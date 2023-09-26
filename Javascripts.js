let userName = "";

userName ? console.log(`Hello, ${userName}!`) : console.log();

let userQuestion = "";

userQuestion ? console.log(`Hello, ${userName}!`) : console.log();

//console.log(`You asked ${userQuestion}, ${userName}.`)

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = randomNumber;

switch (eightBall) {
  case 0:
    return "It is certain";
    break;
  case 1:
    return "It is decidedly so";
    break;
  case 2:
    return "Reply hazy try again";
    break;
  case 3:
    return "Cannot predict now";
    break;
  case 4:
    return "Do not count on it";
    break;
  case 5:
    return "My sources say no";
    break;
  case 6:
    return "Outlook not so good";
    break;
  case 7:
    return "Signs point to yes";
    break;
}

console.log(
  `Hello ${userName}! You asked: ${userQuestion}! The magic eightballs answear is: ${eightBall}`
);
