# FizzBuzz

## What I did
My first goal was to write a program to just list all integers from 1 to 100.
I used this code from the code along as my starting point
`
let counter = 0;
while (counter < 3) {
  counter++;
  console.log("Happy Thursday");
}
if (counter >= 3) {
  console.log("Happy Friday");
}
`
Next, I changed the 3 in the "counter < 3" part to 100.
Then I got rid of the happy thursday/friday parts and setup a chain of if/else if statements for the fizz, buzz, and fizzbuzz scenarios.
I used the modulo operator set equal to zero to identify the specific scenarios...
`
if (counter % 5 == 0) console.log("Buzz");
`
For example.
For the fizzbuzz scenario, I used the modulo operator with an 'and' gate so I could identify a scenario where the integer is divisible by both 3 and 5.
Finally, I ended the if/else if chain with a command that logged the counter if none of the other scenarios are fulfilled.

## ABDYD
I had one syntax error when intially setting up the fundamental code to count from 1 to 100 because I forgot to close a bracket.
Next, when adding in the fizzbuzz scenario, at first I put it at the end of the chain, when it should go at the beginning (this way a 15 doesn't get logged as "fizz" because it didn't have a chance to check for "fizzbuzz" yet).
Other than these two things, and much to my surprise, I had no other errors. The assignment went very smoothly in general.