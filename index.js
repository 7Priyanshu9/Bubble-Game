let Timer = 60;
let result = 0;
let Hit = 0;


function makeBubble() {
    let answer = "";

    for (let i = 0; i < 133; i++) {
        let p = Math.floor(Math.random() * 10);
        answer += `<div class="bubble">${p}</div>`;
    }

    document.querySelector(".panalBottom").innerHTML = answer;
}


function runTime() {
    setInterval(function () {
        if (Timer > 0) {
            Timer--;
            document.querySelector(".Timerbox").textContent = Timer;
        } else {
            document.querySelector(".panalBottom").innerHTML=`<h1> Time's Up </h1> `;
            clearInterval(Timer);
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

function negative(){
    if(result>0){
        result-=20;
        document.querySelector(".Scorebox").textContent = result; 
    }else{
        alert("Come on Focus");
    }
   
}

document.querySelector(".panalBottom").addEventListener("click", function (det)
    //    det.target is the value where you clicked
    {
        let clickedNumber = Number(det.target.textContent);
        if (clickedNumber == Hit) {
            getResult();
            makeBubble();
            getNewTarget();
        } else{
            negative();
            makeBubble();
            getNewTarget();
        }
    })

runTime();
makeBubble();
getNewTarget();



// if event listener is present in the element then after getting clicked that event e=will be triggered else it will search for the same event in the parents and will climb the hierarcy