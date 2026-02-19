// way to solve the problem of callback hell

// Example of the callback Hell
/*
The phenomenon which happens when we nest multiple callbacks within a function is called a callback hell. The shape of the resulting code structure resembles a pyramid and hence callback hell is also called the “pyramid of the doom”
*/

// console.log("Start");

// setTimeout(() => {}, 1000);

// setTimeout(() => {
//   console.log("Step 1");

//   setTimeout(() => {
//     console.log("Step 2");

//     setTimeout(() => {
//       console.log("Step 3");

//       setTimeout(() => {
//         console.log("Step 4");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Use Promises to resolve that
// function step(message) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(message);
//       resolve();
//     }, 1000);
//   }); 
// }     


// console.log("Start");

// step("Step 1")
//   .then(() => step("Step 2"))
//   .then(() => step("Step 3"))
//   .then(() => step("Step 4"));

// Using async and await

// async function runSteps() {
//   console.log("Start");
//   await step("Step 1");
//   await step("Step 2");
//   await step("Step 3");
//   await step("Step 4");

// }

// runSteps();

// A Promise is a placeholder for a future value, representing the eventual completion (or failure) of an asynchronous operation.

/*
States of a Promise:
Pending:	Initial state, neither fulfilled nor rejected
Fulfilled:	The operation completed successfully
Rejected:	The operation failed
*/

// Handling rejected promises - denotes that were some error

function rejectStep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Network Error");
      console.log("I am rejecting the promise due to some error");
    }, 1000);
  });
}

// rejectStep()
//   .then(() => {
//     console.log("Event completed");
//   })
//   .catch((err) => {
//     console.log("I have handled the error", err);
//   });

// another way to handle this
try {
  await rejectStep();
  console.log("I was resolved");
  // if resolved, then code here will be executed
} catch (err) {
  console.log("error in catch", err);
}
