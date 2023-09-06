
let Timer = 60;
let result = 0;
let Hit = 0;
let gameRunning = false;
let intervalId;

function makeBubble() {
    let answer = "";

    for (let i = 0; i < 133; i++) {
        let p = Math.floor(Math.random() * 10);
        answer += `<div class="bubble">${p}</div>`;
    }

    document.querySelector(".panalBottom").innerHTML = answer;
}

function resetGame() {
    Timer = 60;
    result = 0;
    document.querySelector(".Timerbox").textContent = Timer;
    document.querySelector(".Scorebox").textContent = result;
    document.querySelector("#startbutton").style.backgroundColor = '#FCF1BF';
    clearInterval(intervalId);
}

function startGame() {
    resetGame();
    runTime();
    getNewTarget();
    gameRunning = true;
}

function runTime() {
    intervalId = setInterval(function () {
        if (Timer > 0) {
            Timer--;
            document.querySelector(".Timerbox").textContent = Timer;
        } else {
            document.querySelector(".panalBottom").innerHTML = `<h1> Time's Up </h1> `;
            clearInterval(intervalId);
            gameRunning = false;
            document.querySelector("#startbutton").style.backgroundColor = '#FCF1BF';
        }
    }, 1000);
}

function getNewTarget() {
    Hit = Math.floor(Math.random() * 10);
    document.querySelector(".Targetbox").textContent = Hit;
}

function getResult() {
    result += 10;
    document.querySelector(".Scorebox").textContent = result;
}

function negative() {
    if (result > 0) {
        result -= 20;
        document.querySelector(".Scorebox").textContent = result;
    } else {
        alert("Come on Focus");
    }
}

document.querySelector(".panalBottom").addEventListener("click", function (det) {
    let clickedNumber = Number(det.target.textContent);
    if (clickedNumber == Hit) {
        getResult();
        makeBubble();
        getNewTarget();
    } else {
        negative();
        makeBubble();
        getNewTarget();
    }
})

makeBubble();

document.querySelector("#startbutton").addEventListener("click", function () {
    if (!gameRunning) {
        startGame();
        this.style.backgroundColor = '#FCF1BF';
    } else {
        this.style.backgroundColor = '#F19367';
    }
})

document.querySelector("#resetbutton").addEventListener("click", function () {
    resetGame();
    function displayCountdown(seconds) {
        if (seconds > 0) {
            // Display the countdown message
            document.getElementById("countdown").innerText = "Game starts in " + seconds + " seconds";
            
            // Schedule the next countdown message
            setTimeout(function () {
                displayCountdown(seconds - 1);
            }, 1000); // Wait for 1 second
        } else {
            // Start the game when the countdown reaches 0
            startGame();
            document.getElementById("countdown").innerText = ""; // Clear the countdown message
        }
    }

    // Start the countdown
    displayCountdown(3); // Start with a 3-second countdown
});
// correct code for reset button

