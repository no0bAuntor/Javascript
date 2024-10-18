function myFunction() {
  const inpObj = document.getElementById("id1");

  if (inpObj.validity.rangeOverflow) {
      inpObj.setCustomValidity("You have made a range overflow error!");
  } else if (inpObj.validity.rangeUnderflow) {
      inpObj.setCustomValidity("You have made a range underflow error!");
  } else if (inpObj.validity.valueMissing) {
      inpObj.setCustomValidity("Value missing");
  } else {
      inpObj.setCustomValidity("");  // Reset custom validity message if no errors
  }

  // Trigger the validation and show the message if there's an error
  // inpObj.reportValidity();

  // Display the custom validation message or empty string in the <p> tag
  document.getElementById("demo").innerHTML = inpObj.validationMessage;
}
