// action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSe6ydFXYBK6CwtpTEvWp9VYLn8WUxyXDWcMkqPCR3yq9kb2MQ/formResponse"



// submit to the hidden Google form
document.getElementById("myForm").addEventListener("submit", function () {
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


