// promise to execute step by steap

function step1() {
  return Promise.resolve("A");
}

function step2(value) {
  return Promise.resolve(value + "B");
}

function step3(value) {
  return Promise.resolve(value + "C");
}

step1()
  .then((value) => {
    return step2(value);
  })
  .then((value) => {
    return step3(value);
  })
  .then((value) => {
    console.log(value);
  });

// using async await

const run = async () => {
  let v = await step1();
  let v1 = await step2(v);
  let v2 = await step3(v1);
  console.log(v2);
};

run();

// error handling

const fun1 = () => {
  return Promise.reject("Failed");
};

const run1 = async () => {
  try {
    let v1 = await fun1();
    console.log(v1);
  } catch (error) {
    console.log(error);
  }
};

run1();

// If tasks do not depend on each other, you can run them in parallel.

//Use Promise.all() to wait for both.

const run2 = async () => {
  let p1 = step1();
  let p2 = step2();

  let values = await Promise.all([p1, p2]);
  console.log(values);
};
