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
      resolve("Congrats! you got the certificate");
    }, 1000);
  });

  return promise;
}

// enroll()
//   .then(progress)
//   .then(getCertificate)
//   .then(function (value) {
//     console.log(value);
//   })

//   .catch(function (error) {
//     console.log(error);
//   });

async function course() {
  try {
    await enroll();
    await progress();
    const message = await getCertificate();
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

course();
