
document.addEventListener("DOMContentLoaded", () => {

    // Récupération des sélections
    const kidsSelection = JSON.parse(
        localStorage.getItem("quizNovaKidsSelection") || "null"
    );

    const adultSelection = JSON.parse(
        localStorage.getItem("quizNovaAdultSelection") || "null"
    );

    const isKids = Boolean(kidsSelection);
    const selection = isKids ? kidsSelection : adultSelection;

    // Éléments HTML
    const quizCard = document.getElementById("quiz-card");
    const resultCard = document.getElementById("result-card");

    const spaceLabel = document.getElementById("quiz-space");
    const categoryTitle = document.getElementById("quiz-category");
    const levelLabel = document.getElementById("quiz-level");
    const questionText = document.getElementById("question-text");
    const answerList = document.getElementById("answer-list");
    const feedback = document.getElementById("feedback");
    const nextButton = document.getElementById("next-button");
    const counter = document.getElementById("quiz-counter");
    const progressBar = document.getElementById("quiz-progress-bar");
    const timerLabel = document.getElementById("quiz-timer");

    // Variables du quiz
    let questions = [];
    let currentQuestion = 0;
    let score = 0;
    let timeLeft = 30;
    let timer = null;
    let answered = false;

    // Normalisation des textes
    function normalize(value) {
        return String(value || "")
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .trim();
    }

    // Récupération des valeurs de sélection
    function getSelectionValue(object, possibleKeys) {
        for (const key of possibleKeys) {
            if (object && object[key] !== undefined) {
                return object[key];
            }
        }

        return "";
    }

    // Affichage d'un message d'erreur
    function showError(title, message) {
        quizCard.innerHTML = `
            <h2>${title}</h2>
            <p>${message}</p>
            <a href="index.html" class="quiz-home">
                Retour à l'accueil
            </a>
        `;
    }

    // Vérification de la sélection
    if (!selection) {
        showError(
            "Impossible de démarrer le quiz",
            "Votre sélection est introuvable. Retournez à l'accueil et choisissez à nouveau votre quiz."
        );
        return;
    }

    // Récupération de la catégorie et du niveau
    const category = getSelectionValue(selection, [
        "category",
        "categorie"
    ]);

    const level = isKids
        ? getSelectionValue(selection, ["age", "selectedAge"])
        : getSelectionValue(selection, ["difficulty", "niveau"]);

    // Récupération des catégories disponibles
    const questionBank = isKids
        ? quizQuestions.enfants
        : quizQuestions.adultes;

    // Recherche de la catégorie sélectionnée
    const categoryKey = Object.keys(questionBank).find(
        key => normalize(key) === normalize(category)
    );

    if (!categoryKey) {
        showError(
            "Catégorie introuvable",
            "La catégorie choisie n'existe pas dans notre banque de questions."
        );
        return;
    }

    // Récupération des questions selon l'espace
    if (isKids) {

        // Les questions enfants restent organisées par catégorie
        questions = [...questionBank[categoryKey]];

    } else {

        // Les questions adultes sont organisées par difficulté
        const difficultyKey = Object.keys(
            questionBank[categoryKey]
        ).find(
            key => normalize(key) === normalize(level)
        );

        if (!difficultyKey) {
            showError(
                "Niveau introuvable",
                "Le niveau de difficulté sélectionné n'existe pas."
            );
            return;
        }

        questions = [
            ...questionBank[categoryKey][difficultyKey]
        ];
    }

    // Vérification de la présence des questions
    if (questions.length === 0) {
        showError(
            "Aucune question disponible",
            "Aucune question n'est encore disponible pour cette sélection."
        );
        return;
    }

    // Mélange aléatoire des questions
    function shuffleQuestions(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            [array[i], array[j]] = [array[j], array[i]];
        }

        return array;
    }

    shuffleQuestions(questions);

    // Affichage des informations du quiz
    spaceLabel.textContent = isKids
        ? "ESPACE ENFANTS"
        : "ESPACE ADULTES";

    categoryTitle.textContent = categoryKey;

    levelLabel.textContent = isKids
        ? `Âge : ${level}`
        : `Niveau : ${level}`;

    // Démarrage du chronomètre
    function startTimer() {
        clearInterval(timer);

        timeLeft = 30;
        timerLabel.textContent = `⏱ ${timeLeft} s`;

        timer = setInterval(() => {
            timeLeft--;

            timerLabel.textContent = `⏱ ${timeLeft} s`;

            if (timeLeft <= 0) {
                clearInterval(timer);
                showCorrection(null);
            }

        }, 1000);
    }

    // Affichage d'une question
    function displayQuestion() {
        answered = false;

        feedback.textContent = "";
        feedback.className = "quiz-feedback";

        nextButton.disabled = true;

        const question = questions[currentQuestion];

        counter.textContent =
            `Question ${currentQuestion + 1} / ${questions.length}`;

        progressBar.style.width =
            `${(currentQuestion / questions.length) * 100}%`;

        questionText.textContent = question.question;

        answerList.innerHTML = "";

        question.answers.forEach((answer, index) => {

            const button = document.createElement("button");

            button.className = "answer-option";
            button.textContent = answer;

            button.addEventListener("click", () => {
                if (answered) return;

                showCorrection(index);
            });

            answerList.appendChild(button);

        });

        startTimer();
    }

    // Correction de la réponse
    function showCorrection(selectedAnswer) {
        if (answered) return;

        answered = true;

        clearInterval(timer);

        const question = questions[currentQuestion];

        const buttons = answerList.querySelectorAll(
            ".answer-option"
        );

        buttons.forEach((button, index) => {

            button.disabled = true;

            if (index === question.correct) {
                button.classList.add("correct-answer");
            }

            if (
                selectedAnswer !== null &&
                index === selectedAnswer &&
                selectedAnswer !== question.correct
            ) {
                button.classList.add("wrong-answer");
            }

        });

        if (selectedAnswer === question.correct) {

            score++;

            feedback.textContent =
                "Bravo ! Bonne réponse. " + question.explanation;

            feedback.classList.add("feedback-correct");

        } else if (selectedAnswer === null) {

            feedback.textContent =
                "Temps écoulé ! " + question.explanation;

            feedback.classList.add("feedback-wrong");

        } else {

            feedback.textContent =
                "Pas tout à fait. " + question.explanation;

            feedback.classList.add("feedback-wrong");

        }

        nextButton.disabled = false;

        nextButton.textContent =
            currentQuestion === questions.length - 1
                ? "Voir mes résultats"
                : "Question suivante";
    }

    // Affichage des résultats
    function showResults() {
        clearInterval(timer);

        quizCard.hidden = true;
        resultCard.hidden = false;

        const total = questions.length;

        const percentage = Math.round(
            (score / total) * 100
        );

        document.getElementById("final-score").textContent =
            `${score}/${total}`;

        document.getElementById("result-title").textContent =
            percentage >= 80
                ? "Excellent travail !"
                : percentage >= 50
                    ? "Bon effort !"
                    : "Continue à apprendre !";

        document.getElementById("result-message").textContent =
            percentage >= 80
                ? "Tu maîtrises très bien cette catégorie."
                : percentage >= 50
                    ? "Tu progresses ! Continue tes efforts."
                    : "Chaque essai est une occasion d'apprendre.";

        document.getElementById("result-detail").textContent =
            `Tu as obtenu ${percentage} % de bonnes réponses.`;

        // Enregistrement dans l'historique
        const history = JSON.parse(
            localStorage.getItem("quizNovaHistory") || "[]"
        );

        history.push({
            espace: isKids ? "Enfants" : "Adultes",
            categorie: categoryKey,
            niveau: level,
            score: score,
            total: total,
            pourcentage: percentage,
            date: new Date().toISOString()
        });

        localStorage.setItem(
            "quizNovaHistory",
            JSON.stringify(history)
        );

        progressBar.style.width = "100%";
    }

    // Passage à la question suivante
    nextButton.addEventListener("click", () => {
        if (!answered) return;

        currentQuestion++;

        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            showResults();
        }
    });

    // Recommencer le quiz
    document.getElementById("restart-button").addEventListener(
        "click",
        () => {

            currentQuestion = 0;
            score = 0;

            shuffleQuestions(questions);

            resultCard.hidden = true;
            quizCard.hidden = false;

            displayQuestion();
        }
    );

    // Lancement du quiz
    displayQuestion();

});
