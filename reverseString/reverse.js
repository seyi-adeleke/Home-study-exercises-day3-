exports.reverseString = (stringArgument) =>{
    if(typeof  (stringArgument) !== "string"){
        return null;
    }
    //check if an epty string was passed as a parameter
    if(stringArgument === ''){
        return null;
        }
    //split the string parameter into an array
    let stringArray = stringArgument.split("");
    // create a new array to store the reversed string
    let newArray = [];
    //loop over the array from the tail end
    for(let letter = stringArray.length - 1;letter>=0;letter--){
        //push each letter into the new array created
        newArray.push(stringArray[letter]);
    }
    // check if the string is a palindrome
    if(newArray.join("") === stringArray.join("")){
        return true;
    }

    return newArray.join("");
}
//console.log(reverseString("hello"));