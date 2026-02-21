// let myPromise = new Promise((resolve, reject) => {
//   let ok = true;

//   // code that will take time

//   if (ok) {
//     resolve(ok);
//   } else {
//     reject("error");
//   }
// });

// myPromise.then(
//   function (value) {
//     console.log(value);
//   },
//   function (value) {
//     console.log(value);
//   },
// );
let myPromise1 = new Promise((resolve, reject) => {
  let ok = false;

  // code that will take time (producing code)

  if (ok) {
    resolve(ok);
  } else {
    reject("error");
  }
});

//consuming code
myPromise1.then(
  (value) => {
    console.log(value);
  },
  (value) => {
    console.log(value);
  },
);

/* 
  Promise API Static Methods
JavaScript also provides static methods on the Promise object for handling multiple promises at once:

Promise.all(iterable):
Fulfills when all promises in the iterable are fulfilled; rejects immediately if any promise rejects.

Promise.allSettled(iterable):
Waits for all promises to settle (either fulfill or reject) and returns an array of their results.

Promise.race(iterable):
Settles (fulfills or rejects) as soon as any of the promises in the iterable settles.

Promise.any(iterable):
Fulfills as soon as any promise in the iterable fulfills; rejects if all promises reject.
*/
