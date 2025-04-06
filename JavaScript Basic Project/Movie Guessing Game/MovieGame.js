let favM = "kushi";

let guess=prompt("guess my fav movie (Hint:Movie of Vijay Devarkonda and one word movie)");

while((guess != favM) && (guess != "exit")){

    // console.log("Wrong guess plese try again");ge
    guess=prompt("Wrong guess plese try again");


}

if(guess==favM){
    console.log("Congratulations !! You guess Correct");

}else{
    console.log("You exit from the game");
}