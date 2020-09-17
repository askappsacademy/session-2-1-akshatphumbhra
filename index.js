
/********************

In this exercise, we will be creating a function that takes in two numbers and returns the sum

Step 1. Create and declare a function,
that takes in two parameters

Step 2. In the function body, add both
numbers together and return the sum

Step 3. Call the function

For extra credit, create a conditional that executes a message if the sum is over 10 or less than 100

********************/

// Your Solution:

function add(num1, num2){
  var sum = num1 + num2;
  //I'm unsure as to what the conditional is supposed to look like, so this is my best guess
  if(sum > 10 && sum < 100){
    alert("The sum is greater than 10 but less than 100");
  }
  return sum;
}

add(1, 12);
