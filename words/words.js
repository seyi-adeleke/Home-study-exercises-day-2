
exports.words = (stringArgument) =>{

    //remove all double whitespace from argument
    stringArgument = stringArgument.replace(/\s+/g, ' ');

    //variable to store the word count
    let wordCountObject = {};

    //variable to store the array of strings
    let stringArray;


    // check if string contains the new line symbol
    if(stringArgument.includes("\n")){
        //split the string into an array using \n as a delimiter
        stringArray = stringArgument.split("\n");
    }
    //check if string contains the tab symbol
    else if (stringArgument.includes("\t")){
        stringArray = stringArgument.split("\t");
    }
    else{
        //split the string into an array using whitespace as a delimiter
        stringArray = stringArgument.split(" ");
    }

    //use the map function to iterate over the array
    stringArray.map(function(word){
        //check if word is a property of  wordCountObject
        if(wordCountObject.hasOwnProperty(word)){
            wordCountObject[word] = wordCountObject[word] + 1;
        }

        else{
            wordCountObject[word] = 1;
        }
    });
    return wordCountObject;
};