
// =================================
// QUIZNOVA - JAVASCRIPT PRINCIPAL
// =================================

document.addEventListener("DOMContentLoaded", function () {

    // Message de bienvenue
    console.log("Bienvenue sur QuizNova !");
    console.log("Apprendre. Jouer. Évoluer.");

    // Mise à jour automatique de l'année du footer
    const footerText = document.querySelector(".footer-content p");

    if (footerText) {
        footerText.textContent =
            `© ${new Date().getFullYear()} QuizNova. Tous droits réservés.`;
    }

    // Animation des cartes au défilement
    const cards = document.querySelectorAll(".space-card");

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.15
        });

        cards.forEach(function (card) {
            card.classList.add("reveal");
            observer.observe(card);
        });

    }


    // ==========================================
    // QUIZNOVA KIDS - SELECTIONS
    // ==========================================

    if (document.body.classList.contains("kids-page")) {

        let selectedAge = "";
        let selectedCategory = "";

        // Sélection de la tranche d'âge
        const ageCards = document.querySelectorAll(".age-card");

        ageCards.forEach(function (card) {

            card.addEventListener("click", function () {

                ageCards.forEach(function (item) {
                    item.classList.remove("selected");
                });

                card.classList.add("selected");

                selectedAge = card.dataset.age;

                updateKidsMessage();
            });

        });

        // Sélection de la matière
        const kidsCategories = document.querySelectorAll(".kids-category");

        kidsCategories.forEach(function (card) {

            card.addEventListener("click", function () {

                kidsCategories.forEach(function (item) {
                    item.classList.remove("selected");
                });

                card.classList.add("selected");

                selectedCategory = card.dataset.category;

                updateKidsMessage();
            });

        });

        // Actualisation du message
        function updateKidsMessage() {

            const message = document.getElementById("kids-selection-message");

            if (!message) return;

            if (selectedAge && selectedCategory) {

                message.textContent =
                    "Super ! Tu as choisi " + selectedAge +
                    " ans et la matière " + selectedCategory + ".";

            } else if (selectedAge) {

                message.textContent =
                    "Bravo ! Maintenant, choisis une matière.";

            } else if (selectedCategory) {

                message.textContent =
                    "Super choix ! Maintenant, indique ton âge.";

            }

        }

        // Bouton pour commencer le quiz
        const kidsStart = document.getElementById("kids-start");

        if (kidsStart) {

            kidsStart.addEventListener("click", function () {

                if (!selectedAge || !selectedCategory) {

                    alert("Choisis d'abord ton âge et une matière !");
                    return;

                }

                const kidsSelection = {
                    age: selectedAge,
                    category: selectedCategory
                };

                localStorage.setItem(
                    "quizNovaKidsSelection",
                    JSON.stringify(kidsSelection)
                );

                // Nettoyer l'ancienne sélection adulte
                localStorage.removeItem("quizNovaAdultSelection");

                // Redirection vers le quiz
                window.location.href = "quiz.html";

            });

        }

    }


    // ==========================================
    // QUIZNOVA ADULTES - SELECTIONS
    // ==========================================

    if (document.body.classList.contains("adults-page")) {

        let selectedAdultCategory = "";
        let selectedDifficulty = "";

        // Sélection de la catégorie
        const adultCategories = document.querySelectorAll(".adults-category");

        adultCategories.forEach(function (card) {

            card.addEventListener("click", function () {

                adultCategories.forEach(function (item) {
                    item.classList.remove("selected");
                });

                card.classList.add("selected");

                selectedAdultCategory = card.dataset.category;

                updateAdultsMessage();
            });

        });

        // Sélection du niveau de difficulté
        const difficultyCards = document.querySelectorAll(".difficulty-card");

        difficultyCards.forEach(function (card) {

            card.addEventListener("click", function () {

                difficultyCards.forEach(function (item) {
                    item.classList.remove("selected");
                });

                card.classList.add("selected");

                selectedDifficulty = card.dataset.difficulty;

                updateAdultsMessage();
            });

        });

        // Actualisation du message
        function updateAdultsMessage() {

            const message = document.getElementById("adults-selection-message");

            if (!message) return;

            if (selectedAdultCategory && selectedDifficulty) {

                message.textContent =
                    "Votre sélection : " + selectedAdultCategory +
                    " - Niveau " + selectedDifficulty + ".";

            } else if (selectedAdultCategory) {

                message.textContent =
                    "Catégorie choisie ! Sélectionnez maintenant votre niveau.";

            } else if (selectedDifficulty) {

                message.textContent =
                    "Niveau choisi ! Sélectionnez maintenant une catégorie.";

            }

        }

        // Bouton pour commencer le quiz
        const adultsStart = document.getElementById("adults-start");

        if (adultsStart) {

            adultsStart.addEventListener("click", function () {

                if (!selectedAdultCategory || !selectedDifficulty) {

                    alert(
                        "Veuillez choisir une catégorie et un niveau de difficulté."
                    );

                    return;

                }

                const adultSelection = {
                    category: selectedAdultCategory,
                    difficulty: selectedDifficulty
                };

                localStorage.setItem(
                    "quizNovaAdultSelection",
                    JSON.stringify(adultSelection)
                );

                // Nettoyer l'ancienne sélection enfant
                localStorage.removeItem("quizNovaKidsSelection");

                // Redirection vers le quiz
                window.location.href = "quiz.html";

            });

        }

    }

});