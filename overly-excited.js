let goButton = document.getElementById('genSent');


goButton.addEventListener('click', function () {
    let sentence1 = prompt("Provide a sentence without punctuation."); 
    let punctuation1 = prompt ("Choose one punctuation mark to use. Use the symbol only.");
    excitedSentenceGenerator(sentence1, punctuation1, "origSent", "arrayLoop");
    let nextLoop = document.getElementById('goAgain');    
    nextLoop.innerHTML = `<h3>Generate another very excited, looping sentence:</h3> <button id="genSent2">Go!</button>`
    
    let goButton2 = document.getElementById('genSent2');
    goButton2.addEventListener('click', function () {
        let sentence2 = prompt("Provide a sentence without punctuation."); 
        let punctuation2 = prompt ("Choose one punctuation mark to use. Use the symbol only.");
        excitedSentenceGenerator(sentence2, punctuation2, "origSent2", "arrayLoop2");
        let nextLoop = document.getElementById('goAgain');    
        nextLoop.innerHTML = `<h3>Generate another very excited, looping sentence:</h3> <button id="genSent2">Go!</button>`
    });
    
});
////User inputs a sentence
// let sentence1 = prompt("Provide a sentence without punctuation."); 
// let punctuation1 = prompt ("Choose one punctuation mark to use. Use the symbol only.");

let excitedSentenceGenerator = (sentence, punctuation, origSentNumb, loopNumber) => {
    document.getElementById(origSentNumb).innerHTML = `<p><strong>The sentence you provided was:</strong> ${sentence} </p>`;

    ////The program breaks it into individual words.
    let stringToSplit = (string, separator) => {
        const strArray = string.split(separator);
        return strArray;
    }

    let sentArray = stringToSplit(sentence, " ");

    console.log(sentArray.length);

    ////The program outputs each word on a line in addition to the last in a new paragraph until the last word is reached
    var newPar = "";

    var arrayLoop = document.getElementById(loopNumber)

    let exclamation = "";

    // For the length of the sentence array...
    for( let i = 0; i < sentArray.length; i++) {

        // store the new word
        let storedWord = sentArray[i] + " ";
        console.log('storedWord', storedWord);
        // If the current value of the counter variable can be evenly divided by 3 - using the JavaScript remainder operator - then add a single exclamation point (!) to the output.

        if ( (i + 1) % 3 === 0 && sentArray[i] != undefined) {

                let thirdWord = sentArray[i]; // index is 2 and word is "fox"
                console.log("thirdWord is", thirdWord);

                exclamation += punctuation; //adds an additional ! to the end of each new exclamatory word

                let excitedWord = thirdWord + exclamation + " "; //// "fox! "
                console.log("excitedWord is", excitedWord)

                console.log('newPar is:', newPar);

                newPar += excitedWord; //// "The red fox! likes"
            } else if ( (i + 1) % 3 === 0 && sentArray[i] == undefined){
                exclamation += punctuation
                storedWord = exclamation;
                newPar += storedWord;
            }  else if ( (i + 1) === sentArray.length){
                exclamation += punctuation;
                newPar += storedWord + exclamation;
            } else {
            newPar += storedWord;
        };

        console.log(newPar);

        arrayLoop.innerHTML += `<p> ${newPar} </p>`;
    }
}



//The red fox likes to jump in the snow after the white rabbit who is running for it's life (19 words)
//The quick dog runs over mountains to catch goats in the snow (12 words)

// 3. Adding Conditions to the Loop
// Then add logic to addExcitement that places an exclamation point (!) after every third word. This will require you to do some basic math in JavaScript, and use an if statement.
// Your job is to read the following English statement and write the equivalent in JavaSript code to make it work.



// 4. Even More Excited (done)
// Add logic in the addExcitement function to the increase the number of exclamation points after every third word. The number of exclamation points (!) will be determined by how many times the counter variable can be divided by 3.

// 5. Function Arguments (done)
// Add a new argument to the function so that a developer can specify which character should be displayed instead of it always being an exclamation point.

// 6. Another Sentence 
// Now you should define another variable that will hold an array of different words than your existing sentence. Perhaps name the variable betterSentence, or nextSentence.
// Invoke your function for a second time, passing in the new sentence variable and a different special character.

// 7. Arrow Functions (done)
// Watch the video about arrow functions, and see if you can rewrite addExcitement using that syntax.