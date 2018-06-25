var wordArray = ["QUASAR", "SYZYGY","CONSTELLATION","SOLSTICE","EQUINOX","SOL","GALAXY","JUPITER","URANUS","EARTH","MARS",
    "VENUS", "PLUTO","MERCURY"];

var hint = ["Hint: Inhabit the center of some galaxies, and give off huge amounts of energy periodically.",
    "Hint: An alignment of three celestial bodies.", "Hint: The southern cross is a...", "Hint: The most sunligth of the year.",
    "Hint: Equal sun and moon", "Hint: The name of our sun.","Hint: A gravitationally bound system of stars, stellar remnants, interstellar gas, dust, and dark matter.",
    "Hint: Chief deity of imperial Roman state.", "Hint: Husband of Mother Earth.","Hint: 3rd from the sun.", "Hint: Roman God of War",
    "Hint: Roman goddess of love, lust, and fertility.", "Hint: Roman judge of the dead.","Hint: The messenger."];
var guess;
var unguessed=[];
var remaining;
var guessedLetters=[];


//This sets the variable word to a randomly selected word from the array.
var random =Math.floor(Math.random() * wordArray.length);
var word = wordArray[random];
console.log(word);
var chances = word.length*2;
var displayHint = hint[random];

document.getElementById("hint").innerHTML=(displayHint);

//This takes measure of random selected word from word[],and applies '_' for each letter of the word.
for(var i=0; i<word.length; i++){
    unguessed[i]="_ ";
    document.getElementById("random-word").innerHTML=(unguessed.join(""));
}
remaining = word.length;// this will be -- each letter that is correctly guessed. When it reaches 0, it will cease the game.
//console.log(unguessed);



//This logs whatever key was selected, converts it to uppercase.

document.onkeyup=function(event){
   
    
    guess = event.key.toUpperCase();
    guessedLetters.push(guess);
    document.getElementById("guessed-letters").innerHTML=(guessedLetters);
     chances = chances-1;   
     //console.log(chances+ " remaining");
   
    if (chances < 1){
        alert("You are out of chances! GAME OVER!");
    }
    //This iterator is for checking the guessed letter against the randomly selected word.
    for (var j=0; j < word.length; j++) {
        if (word.charAt(j) === guess){
            //console.log("There's an " + guess + " at index: "+ j);
            remaining--;
           
            unguessed[j]=guess;
            console.log(remaining+ " letters left to guess.");
            document.getElementById("random-word").innerHTML=(unguessed.join(""));
            
            unguessed[j];
            if (remaining < 1){
                alert ("YOU WIN!");
            }
           
        }
    }
    
}



