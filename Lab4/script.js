document.getElementById("registrationForm").addEventListener("input", function(event) {
    let field = event.target.id;
    let value = event.target.value;
    
    switch (field) {
        case "fname":
            validateName(value);
            break;
        case "email":
            validateEmail(value);
            break;
        case "password":
            validatePassword(value);
            break;
        case "age":
            validateAge(value);
            break;
        case "phone":
            validatePhone(value);
            break;
    }
});

function validateName(name) {
    let errorSpan = document.getElementById("nameError");
    if (!/^[A-Za-z ]{2,50}$/.test(name)) {
        errorSpan.innerText = "Invalid name!";
    } else {
        errorSpan.innerText = "";
    }
}

function validateEmail(email) {
    let errorSpan = document.getElementById("emailError");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errorSpan.innerText = "Invalid email!";
    } else {
        errorSpan.innerText = "";
    }
}

function validatePassword(password) {
    let errorSpan = document.getElementById("passwordError");
    let strengthDiv = document.getElementById("passwordStrength");

    if (password.length < 8 || !/\d/.test(password) || !/[!@#$%^&*]/.test(password)) {
        errorSpan.innerText = "Weak password!";
        strengthDiv.innerText = "Weak";
        strengthDiv.style.color = "red";
    } else {
        errorSpan.innerText = "";
        strengthDiv.innerText = "Strong";
        strengthDiv.style.color = "green";
    }
}

function validateAge(age) {
    let errorSpan = document.getElementById("ageError");
    if (age < 18 || age > 100) {
        errorSpan.innerText = "Invalid age!";
    } else {
        errorSpan.innerText = "";
    }
}

function validatePhone(phone) {
    let errorSpan = document.getElementById("phoneError");
    let formattedPhone = phone.replace(/\D/g, "");
    if (formattedPhone.length !== 10) {
        errorSpan.innerText = "Invalid phone number!";
    } else {
        errorSpan.innerText = "";
        document.getElementById("phone").value = formattedPhone.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3");
    }
}

document.getElementById("toggleGPA").addEventListener("click", function() {
    let gpaSection = document.getElementById("gpaCalculator");
    gpaSection.style.display = gpaSection.style.display === "none" ? "block" : "none";
});

let gpaInputs = document.getElementById("gpaInputs");
for (let i = 1; i <= 5; i++) {
    gpaInputs.innerHTML += `<div>Course ${i}: <input type='number' class='grade' placeholder='Grade (0-4)'>
    <input type='number' class='credit' placeholder='Credits'></div>`;
}

document.getElementById("calculateGPA").addEventListener("click", function() {
    let grades = document.querySelectorAll(".grade");
    let credits = document.querySelectorAll(".credit");
    let totalCredits = 0, weightedSum = 0;
    
    for (let i = 0; i < grades.length; i++) {
        let g = parseFloat(grades[i].value);
        let c = parseFloat(credits[i].value);
        if (!isNaN(g) && !isNaN(c) && g >= 0 && g <= 4 && c > 0) {
            weightedSum += g * c;
            totalCredits += c;
        }
    }
    
    let gpa = totalCredits > 0 ? (weightedSum / totalCredits).toFixed(2) : "N/A";
    document.getElementById("gpaResult").innerText = "Your GPA: " + gpa;
});
