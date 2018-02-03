////User inputs a sentence
let sentence = prompt("Provide a sentence."); 

//The red fox likes to jump in the snow after the rabbit.

document.getElementById("origSent").innerHTML = `<p><strong>The sentence you provided was:</strong> ${sentence} </p>`;

////The program breaks it into individual words.
function stringToSplit(string, separator) {
    const strArray = string.split(separator);
    return strArray;
}

//Testing the above function.

let sentArray = stringToSplit(sentence, " ");

//Testing new variable
console.log(sentArray.length);

////The program outputs each word on a line in addition to the last in a new paragraph until the last word is reached
var newPar = "";

var arrayLoop = document.getElementById("arrayLoop")

// For the length of the sentence array...
for( let i = 0; i < sentArray.length; i++) {

    // store the new word
    let storedWord = sentArray[i] + " ";

    //add the next word to the stored word(s)
    //// newPar += storedWord; //original

    // If the current value of the counter variable can be evenly divided by 3 - using the JavaScript remainder operator - then add a single exclamation point (!) to the output.

    if ( i % 3 === 0 && i != 0) {
         //then remove the last word
        let lastWord = sentArray[i-1]; //"fox"
        console.log("lastWord is", lastWord);

        let excitedWord = lastWord + "!"; //// "fox!"
        console.log("excitedWord is", excitedWord)

        let replacedPar = newPar.replace(lastWord, excitedWord);

        console.log("replacedWord is \" ", replacedPar, "\""); //// "The red fox!"

        //then add the last word + ! + the new word;
        newPar = replacedPar + storedWord; //// "The red fox! likes"
    } else {
        newPar += storedWord;
    };

    console.log(newPar);

    arrayLoop.innerHTML += `<p> ${newPar} </p>`;
}


// 3. Adding Conditions to the Loop
// Then add logic to addExcitement that places an exclamation point (!) after every third word. This will require you to do some basic math in JavaScript, and use an if statement.
// Your job is to read the following English statement and write the equivalent in JavaSript code to make it work.



// 4. Even More Excited
// Add logic in the addExcitement function to the increase the number of exclamation points after every third word. The number of exclamation points (!) will be determined by how many times the counter variable can be divided by 3.

// 5. Function Arguments
// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

// 6. Another Sentence
// Now you should define another variable that will hold an array of different words than your existing sentence. Perhaps name the variable betterSentence, or nextSentence.
// Invoke your function for a second time, passing in the new sentence variable and a different special character.

// 7. Arrow Functions
// Watch the video about arrow functions, and see if you can rewrite addExcitement using that syntax.