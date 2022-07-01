// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

const { constants } = require("buffer")

//const { number } = require("yargs")

//const { describe, array } = require("yargs")

//const { isTypedArray } = require("util/types")
//const { describe } = require("yargs")

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

//Pseudocode*
// Input one array with objects return same array with name capitalized and in a sentence format. Plan use string interpolation and uppercase method to return required output. First I am going to look at array and find the name object which I will then create a function to capitalize then I will return both the name and occupation in a string with the name and occupation.

// a) Create a test with an expect statement using the variable provided.
describe("capJobString",() => {
  const people = [
    { name: "ford prefect", occupation: "a hitchhiker" },
    // Expected output: ["Ford Prefect is a hitchhiker."
    { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
    //"Zaphod Beeblebrox is president of the galaxy."
    { name: "arthur dent", occupation: "a radio employee" }
  ]
  //"Arthur Dent is a radio employee."]
 it("returns a string with first  letter of the people.name  capitalized 'is' people.occupation ", () => {
    expect(capJobString(people.name,people.occupation)).toEqual["Ford Prefect is a hitchhiker.","Zaphod Beeblebrox is president of the galaxy.","Arthur Dent is a radio employee."]
})
 })
//  ReferenceError: capJobString is not defined - good error red 

const capJobString =(array) => {
  return `{{people: name.uppercase}} is {{people:occupation}}`
}
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total 
// I originally tried brackets but I could not get it to see the code inside can you provide me another syntax I could use or is this one ok ? found on stack overflow

// b) Create the function that makes the test pass.


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
//Pseudocode--
// input is an array containing different data types which includes numbers, strings, boolean values. The function needs to sort through the array and find numbers. Return the remainder of the numbers after they have been divided by three.

// a) Create a test with an expect statement using the variables provided.
describe("numThreeRemainder",() => {
  const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
  // Expected output: [ 2, 0, -1, 0 ]
  const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
  // Expected output: [ 2, 1, -1 ]
 it("takes in an array  with number and strings and outputs the remainder of each number divided by 3",() =>{
  expect(numThreeRemainder(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
  expect(numThreeRemainder(hodgepodge2)).toEqual([ 2, 1, -1, ])
  //ReferenceError: numThreeRemainder is not defined - good error
 }) 
})
const numThreeRemainder = (array) => {
    let  numArray = array.filter(element => 
       typeof element === 'number' 
       )} 
    const mod3 = (element) % 3
      
    
    

//I am stuck at how to get the resulting numbers modulus 3 ? Several hours spent on this problem. 
    
    
  
  


// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.
//pseduocode
// the input is an array containing numbers. I need to take those numbers and cube each one then add those numbers together. My output will be the sum of those numbers after they are cubed.

// a) Create a test with an expect statement using the variables provided.
describe("cubedSum", () =>{
  const cubeAndSum1 = [2, 3, 4]
  // Expected output: 99
  const cubeAndSum2 = [0, 5, 10]
  // Expected output: 1125
  it("returns a number that is the sum of the array of numbers cubed", () => {
    expect(cubedSum(cubeAndSum1)).toEqual(99)
    expect(cubedSum(cubeAndSum2)).toEqual(1125)
  })
})
// ReferenceError: cubedSum is not defined- good error
const cubeAndSum1 = [2, 3, 4]
const cubedSum = (array) => { 
let cubed = array.map(num => {
    return Math.pow(num,3)
    
   }) 
   return cubed.reduce((previousValue, currentValue) => previousValue + currentValue,0)
}
//console.log(cubedSum(cubeAndSum1))

// b) Create the function that makes the test pass.
