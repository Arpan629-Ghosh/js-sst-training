//creating a promise

let myPromise = new Promise(function (resolve, reject) {
  //code that take some time

  resolve(value); // function to run if finishes successfully
  reject(value); // function to if not finishes successfully
});

//How to use a promise
myPromise.then(
  function (value) {
    /* code if success */
  },
  function (value) {
    /* code if error */
  },
);
