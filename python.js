function callPython() {
    const userNameInput = document.querySelector("#username")
    let userName = userNameInput.value;

    const userQuestion = "Is python good?";

    const randomNumber = Math.floor(Math.random() * 8);

    let eightBall = ""

    switch (randomNumber) {
        case 0:
            eightBall = "It is certainly"
            break;
        case 1:
            eightBall = "It is all you need in life";
            break;
        case 2:
            eightBall = "Python is love";
            break;
        case 3:
            eightBall = "Haters be hatin";
            break;
        case 4:
            eightBall = "Do count on it, its perfect";
            break;
        case 5:
            eightBall = "My sources say YES";
            break;
        case 6:
            eightBall = "Pyhton is all you need";
            break;
        case 7:
            eightBall = "Signs point to yes";
            break;

        default:
            console.log("your code sucks")

    }

    const outputDiv = document.querySelector("#output")
    const outputText = `Hello ${userName}! You asked: ${userQuestion}! The magic eightballs answear is: ${eightBall}`;
    outputDiv.innerHTML = outputText
}






