window.onload = function () {
    var currentMode = "addition";
    var canvas = document.getElementById("myBox");
    var context = canvas.getContext("2d");
    var mathProblem;
    var equation;
    var solution;
    var points = 0;
    var textRuta = document.getElementById("answer");

    

    DrawQuestion = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();       
        document.getElementById("answer").value = "";
        document.getElementById('checkAnswer').style.visibility = 'visible';

        if(currentMode == "addition"){
            var temp1 = Math.floor(Math.random() * 100) + 1;
            var temp2 = Math.floor(Math.random() * 100) + 1;
            equation = temp1 + "+" + temp2;
            solution = temp1 + temp2;
        }
        if(currentMode == "subtraction"){
            var temp1 = Math.floor(Math.random() * 100) + 1;
            var temp2 = Math.floor(Math.random() * 100) + 1;
            equation = temp1 + "-" + temp2;
            solution = temp1 - temp2;
        }
        if(currentMode == "multiplication"){
            var temp1 = Math.floor(Math.random() * 10) + 1;
            var temp2 = Math.floor(Math.random() * 10) + 1;
            equation = temp1 + "x" + temp2;
            solution = temp1 * temp2;
        }

        context.textBaseline = "middle";
        context.font = "24pt Calibri, Arial";        
        context.fillStyle = "black";
        context.fillText("" + equation + "", 50, 30);
        
    }


    SetAddition = function (){
        currentMode = "addition";
    }
        
    SetSubtraction = function (){
        currentMode = "subtraction";
    }

    SetMultiplication = function (){
        currentMode = "multiplication";
    }

CheckAnswer = function (){
    var answer = document.getElementById("answer").value;
    
    // if (typeof answer != 'number' || answer instanceof String)
    if (isNaN(answer) || answer =="" || answer.length == 0 || answer == null){
        alert("You need to answer with a number");
        return;
    }
    answer = parseInt(answer, 10);
    if(answer == solution){
        points++;
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.textBaseline = "middle";
        context.font = "15pt Calibri, Arial";        
        context.fillStyle = "black";
        //context.fillText("You're correct! Your points: " + points, 10, 30);
        context.fillText("You're correct!", 10, 30); 
        context.fillText("Your points: " + points, 10, 60);
        document.getElementById('checkAnswer').style.visibility = 'hidden';
    }
    
    else{
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();
        context.textBaseline = "middle";
        context.font = "20pt Calibri, Arial";        
        context.fillStyle = "black";
        context.fillText("Wrong answer :(", 10, 30);
    }
}

};