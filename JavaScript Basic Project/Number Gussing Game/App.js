const max = prompt("enter the max number");

const random =Math.floor(Math.random() * max) +1;

let guess = prompt("guess the number");

while(true){
    if(guess == "quit"){
        console.log("user quit");
        break;
    }

    if (guess == random){
        console.log("you are correct ! congratulation !! random no. is ", random);
        break;
    }

    else{
        guess = prompt ("your guess is wrong ! please try again ");
    }
}


