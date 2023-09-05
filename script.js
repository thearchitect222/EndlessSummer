const donationSubmitBtn = document.getElementById("donation-submit-btn");

donationSubmitBtn.addEventListener("click", (event) => {
    event.preventDefault()
    console.log('myEvent');
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an email address!");
//   } else {
//     email.setCustomValidity("");
//   }
});
