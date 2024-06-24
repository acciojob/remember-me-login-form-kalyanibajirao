//your JS code here. If required.
const loginForm = document.getElementById("login-form");
        const rememberMeCheckbox = document.getElementById("remember-me");
        const existingButton = document.getElementById("existing-btn");

        // Load saved details from local storage (if any)
        const savedUsername = localStorage.getItem("username");
        const savedPassword = localStorage.getItem("password");

        if (savedUsername && savedPassword) {
            existingButton.style.display = "block";
        }

        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            if (rememberMeCheckbox.checked) {
                // Save username and password in local storage
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
            } else {
                // Remove stored details
                localStorage.removeItem("username");
                localStorage.removeItem("password");
            }

            alert(`Logged in as ${username}`);
        });

        existingButton.addEventListener("click", () => {
            const existingUsername = localStorage.getItem("username");
            alert(`Logged in as ${existingUsername}`);
        });