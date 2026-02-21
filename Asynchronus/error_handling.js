// function getData(callback) {
//   let ok = true;

//   if (ok) {
//     callback(null, "data");
//   } else {
//     callback("Something wrong", null);
//   }
// }

// getData(function (error, data) {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   console.log(data);
// });

function getData(callback) {
  let ok = false;

  if (ok) {
    callback(null, "data");
  } else {
    callback("Something wrong", null);
  }
}

getData(function (error, data) {
  if (error) {
    console.log(error);
    return;
  }
  console.log(data);
});
