window.onload = function () {
    var currentMode = "addition";
    var canvas = document.getElementById("myBox");
    var context = canvas.getContext("2d");
    var mathProblem;
    var equation;
    

    

    DrawQuestion = function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.beginPath();       

        if(currentMode == "addition"){
            var temp1 = Math.floor(Math.random() * 100) + 1;
            var temp2 = Math.floor(Math.random() * 100) + 1;
            equation = temp1 + "+" + temp2;
        }
        if(currentMode == "subtraction"){
            var temp1 = Math.floor(Math.random() * 100) + 1;
            var temp2 = Math.floor(Math.random() * 100) + 1;
            equation = temp1 + "-" + temp2;
        }
        if(currentMode == "multiplication"){
            var temp1 = Math.floor(Math.random() * 100) + 1;
            var temp2 = Math.floor(Math.random() * 100) + 1;
            equation = temp1 + "x" + temp2;
        }

        context.textBaseline = "middle";
        context.font = "24pt Calibri, Arial";        
        context.fillStyle = "black";
        context.fillText("" + equation + "", 50, 30);
        
        
    SetAddition = function (){
        currentMode = "addition";
    }
        
    SetSubtraction = function (){
        currentMode = "subtraction";
    }

    SetMultiplication = function (){
        currentMode = "multiplication";
    }

}

};