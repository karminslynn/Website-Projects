
const pw1 = document.getElementById("password1");
const pw2 = document.getElementById("password2");
let check = document.querySelector("span");


pw1.addEventListener("keyup", () => {

    if (!(pw1.value === pw2.value)) {
    check.style.color="#ed1111";
    pw1.style.borderColor="#ed1111";
    pw2.style.borderColor="#ed1111";
    check.textContent="*Passwords doesn't match.";

    }
    else {
    check.style.color="#596d48";
    pw1.style.borderColor="#596d48";
    pw2.style.borderColor="#596d48";
    check.textContent="*Passwords match."
    };
});


pw2.addEventListener("keyup", () => {

    if (!(pw1.value === pw2.value)) {
    check.style.color="#ed1111";
    pw2.style.borderColor="#ed1111";
    pw1.style.borderColor="#ed1111";
    check.textContent="*Passwords doesn't match.";

    }
    else {
    check.style.color="#596d48";
    pw2.style.borderColor="#596d48";
    pw1.style.borderColor="#596d48";
    check.textContent="*Passwords match."
    };
});

/* const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const statusMessage = document.querySelector("span");

// Function to check if passwords match and update UI
const validatePasswords = () => {
    const isMatch = password1.value === password2.value;
    const borderColor = isMatch ? "#596d48" : "#ed1111";
    const textColor = isMatch ? "#596d48" : "#ed1111";
    const message = isMatch ? "*Passwords match." : "*Passwords don't match.";

    statusMessage.style.color = textColor;
    password1.style.borderColor = borderColor;
    password2.style.borderColor = borderColor;
    statusMessage.textContent = message;
};

// Add event listeners to both password fields
password1.addEventListener("keyup", validatePasswords);
password2.addEventListener("keyup", validatePasswords); */