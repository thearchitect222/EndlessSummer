const donationSubmitBtn = document.getElementById("donation-submit-btn");

donationSubmitBtn.addEventListener("click", (event) => {
    event.preventDefault()
    console.log('myEvent');
});

