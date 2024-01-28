let username = document.getElementById("usrname")
let password = document.getElementById("psw")

// let lower_letter = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 

let lower_letter = /[a-z]/
let upper_letter = /[A-Z]/
let number = /[0-9]/
// let flag = 1;

function validatePassword() {
    if (password.value.length < 8) {
        document.getElementById("passError").innerHTML = "Minimum length of password must be 8"
    }

    else if (!password.value.match(lower_letter)) {
        document.getElementById("passError").innerHTML = "Enter atleast one lowercase letter"
    }

    else if (!password.value.match(upper_letter)) {
        document.getElementById("passError").innerHTML = "Enter atleast one uppercase letter"
    }

    else if (!password.value.match(number)) {
        document.getElementById("passError").innerHTML = "Enter atleast one digit"
    }
    else{
        document.getElementById("passError").innerHTML = ""
        alert("Valid password")
    }

}