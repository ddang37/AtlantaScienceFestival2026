// action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe6ydFXYBK6CwtpTEvWp9VYLn8WUxyXDWcMkqPCR3yq9kb2MQ/formResponse"



// submit the quiz
const quizForm = document.getElementById("quizForm");

if (quizForm) {
    quizForm.addEventListener("submit", function (e) {
        e.preventDefault(); //stop browser from navigating to a different url
        
        document.querySelector(".userQuiz").style.display = "none";
        document.getElementById("score").style.display = "block";

        const maxScore = document.querySelectorAll('[name^="q"]').length / 4; // same format for name, and each MCQ has 4 options
        let score = 0;

        for (let i = 1; i <= maxScore; i++) {
            const selected = document.querySelector(`input[name="q${i}"]:checked`);
            if (selected && selected.value === "correct") {
                score++;
            }
        }

        document.getElementById("quizScoreDisplay").textContent = 
            "Your score: " + score + " / " + maxScore;
    });

    // Start over and clean data in the quiz form
    document.getElementById("quizStartOver").addEventListener("click", function () {
        document.getElementById("quizForm").reset();
        document.querySelector(".userQuiz").style.display = "block";
        document.getElementById("score").style.display = "none";
    });
  
}


const feedback = document.getElementById("myForm");
if (feedback) {
    // submit to the hidden Google form
    feedback.addEventListener("submit", function () {
        document.querySelector(".userInput").style.display = "none";
        document.getElementById("thankYou").style.display = "block";

        let maxScore = 4; // 4 scripts 
        let score = 0;

        if (document.querySelector('input[name="entry.1014525074"]:checked').value === "correct") {
            score += 1;
        }

        document.getElementById("scoreDisplay").textContent = "Your score: " + score + " / " + maxScore;
    });

    // Start over and clean data in the form
    document.getElementById("startOver").addEventListener("click", function () {
        document.getElementById("myForm").reset();
        document.querySelector(".userInput").style.display = "block";
        document.getElementById("thankYou").style.display = "none";
    });

}




