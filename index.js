// Admin user login credentials
const admin_email = "site@gmail.com"
const admin_password = "pass"

document.getElementById("submitBtn").addEventListener("click", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check if email and password match the predefined values
    if (email === "site@gmail.com" && password === "pass") {
        console.log("Redirecting to index.html...");
        // Redirect to 'index.html'
        window.location.href = "index.html";
    } else {
        alert("Invalid email or password. Please try again.");
    }
});
