const passwordBox = document.querySelector("#pass");
const generateBtn = document.querySelector(".container button")
const copyPw = document.querySelector(".display img") 
const length = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%^~&*()_+-{}[]\|/<>=";
const allChars = upperCase + lowerCase + number + symbol;

const createPassword = () => {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while(length > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password
}

const copyPass = () => {
    passwordBox.select();
    document.execCommand("copy");
}

generateBtn.addEventListener("click", createPassword);
copyPw.addEventListener("click", copyPass);