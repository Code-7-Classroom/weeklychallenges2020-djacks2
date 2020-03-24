var userInput = prompt("pick a number 1-10")
var OperatorInput = prompt("+ - / *")
var secondInput = prompt("pick a number 1-10")
if(OperatorInput === '+'){
 console.log(`${userInput}${OperatorInput}${secondInput} = `+ (Number(userInput) + Number(secondInput)))
}
else if(OperatorInput === '-'){
console.log(`${userInput}${OperatorInput}${secondInput}= `+ (Number(userInput) - Number(secondInput)))
}
else if(OperatorInput === '*'){
    console.log(`${userInput}${OperatorInput}${secondInput}= `+ (Number(userInput) * Number(secondInput)))
} 

else if (OperatorInput === '/'){
    console.log(`${userInput}${OperatorInput}${secondInput}= `+ (Number(userInput) / Number(secondInput)))
}
else {
    console.log("No equation found.")
}

    
//  function add(userInput,secondInput){
//     return userInput+secondInput
// }
// function subtract(userInput,secondInput){
//     return userInput-secondInput
// }
// function divide(userInput,secondInput){
//     return userInput/secondInput
// }
// function multiply(userInput,secondInput){
//     return userInput * secondInput
// }


// if (OperatorInput === '+'){
//     return add
// }

// var function add(x,y) {
//     return x+y
// } 
// var function subtract(x,y) {
//     return x-y
// }
// var function divide(x,y) {
//     return x/y
// }
// var function multiply(x,y) {
//     return x*y
// }
// if (userInput >= 1){ 
//     console.log(userInput)
// }
