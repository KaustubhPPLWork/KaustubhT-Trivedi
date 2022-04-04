{/*
A simple scenario: Suppose Jon is waiting for the result of an exam, and he plans a vacation based on his exam score.
The exam result is divided into 4 rankings: A, B, C, and D:
If Jon gets an A, he rewards himself and goes for travel happily.
If Jon gets a B, the reward drops to normal shopping.
If Jon gets a C, he stays home and watches TV.
If Jon gets a D, he’ll go to the library and work on the subject.
If we had to write a function to describe this behavior, what would you write?
*/ }

const examResult = 'A'.toUpperCase()
const conditionOfResult = {
  "A": "travel happily",
  "B": "normal shopping",
  "C": "watch TV",
  "D": "work on the subject"
}

function action(ranking){
  let result = conditionOfResult[ranking]
  console.log(`What is Jon doing? : ${result}`)
}

action(examResult)