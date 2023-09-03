function validateForm() {
    var nameField = document.getElementById("name");
    var nameValue = nameField.value.trim(); // Remove leading and trailing whitespace

    if (nameValue === "") {
        alert("Name is required");
        nameField.focus();
        return false; // Prevent form submission
    }
}

