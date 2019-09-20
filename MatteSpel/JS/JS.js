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
    // DrawQuestion rensar det som är ut ritat i kanvasen och tar även bort det man skrivit i textboxen. sedan kollar den vilken radioknapp som är iklickad.
    // beroende på vilken som är i klickad så tar den fram slumpade tal som och sätter det korrekta svaret i solution variabeln.

    SetAddition = function (){
        currentMode = "addition";
    }
        
    SetSubtraction = function (){
        currentMode = "subtraction";
    }

    SetMultiplication = function (){
        currentMode = "multiplication";
    }
    // dessa sätter current mode som vi använder för att kolla vilken typ av matte som ska göras.

CheckAnswer = function (){
    var answer = document.getElementById("answer").value;
    
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
// Denna tar först in vilket svar man har från textboxen man skrivit in. Sedan kollar den om man skrivit in ett nummer och inget annat som svar.
// Efter det så jämför den svaret med det man själv skrivit, om det är rätt så plussas ett poäng på, och ritar ut att man hade rätt och skriver hur många poäng man har
// eller om man hade fel så ritar den bara ut att man hade fel svar. 

};