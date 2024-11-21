document.getElementById("toggle-btn").addEventListener("click", () => {
    const title = document.getElementById("form-title");
    const toggleText = document.getElementById("toggle-text");
    const signupOnlyFields = document.querySelectorAll(".signup-only");

    if (title.textContent === "Login") {
        title.textContent = "Signup";
        toggleText.innerHTML = 'Already have an account? <span id="toggle-btn">Login</span>';
        signupOnlyFields.forEach(field => field.style.display = "block");
    } else {
        title.textContent = "Login";
        toggleText.innerHTML = 'Don\'t have an account? <span id="toggle-btn">Signup</span>';
        signupOnlyFields.forEach(field => field.style.display = "none");
    }

    document.getElementById("toggle-btn").addEventListener("click", arguments.callee);
});
