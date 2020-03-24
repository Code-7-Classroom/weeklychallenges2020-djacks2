var userInput = prompt('What were you saying?')

if (userInput === userInput.toUpperCase()) {
    console.log(userInput);
}
else if (userInput === userInput.toLowerCase()) {
    console.log("The user is whispering.")
}
else{
    console.log("The user is talking normally")
}

