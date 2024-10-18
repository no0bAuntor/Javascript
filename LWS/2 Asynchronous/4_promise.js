// Example-1

// const status = true;
// console.log("Task 1");

// // promise definition
// const promise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (status) {
//       resolve("Task 2");
//     } else {
//       reject("failed");
//     }
//   }, 2000);
// });

// // promise call
// promise
//   .then(function (value) {
//     console.log(value);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// console.log("Task 3");

// Example-2
const paymentSuccess = true;
const marks = 90;
function enroll() {
  console.log("Course enrollment is in progrees");
  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (paymentSuccess) {
        resolve();
      } else {
        reject("Payment failed");
      }
    }, 2000);
  });

  return promise;
}

function progress() {
  console.log("Course on progrees");

  const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (marks >= 80) {
        resolve();
      } else {
        reject("You could not het enough marks to get the certification");
      }
    }, 3000);
  });

  return promise;
}

function getCertificate() {
  console.log("Preparing your certificate");

  const promise = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("Congrats! Tou got the certificate");
    }, 1000);
  });

  return promise;
}

enroll()
  .then(progress)
  .then(getCertificate)
  .then(function (value) {
    console.log(value);
  })

  .catch(function (error) {
    console.log(error);
  });
