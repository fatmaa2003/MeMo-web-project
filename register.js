<<<<<<< HEAD
function validatePassword(){

    var pass = document.getElementById("pass").value;
    var numbers = document.getElementById("numbers");
    var lowercase = document.getElementById("lowercase");
    var uppercase = document.getElementById("uppercase");
    var specialchars = document.getElementById("specialchars");
    var charLen8 = document.getElementById("charLen8");

    var specialcharsList = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    var lowercaseList = /[a-z]/;
    var uppercaseList = /[A-Z]/;
    var numbersList = /[0-9]/;

    if(pass.match(numbersList)){
        numbers.classList.remove("invalid");
        numbers.classList.add("valid");
    }
    else{
        numbers.classList.remove("valid");
        numbers.classList.add("invalid");
    }
    if(pass.match(lowercaseList)){
        lowercase.classList.remove("invalid");
        lowercase.classList.add("valid");
    }
    else{
        lowercase.classList.remove("valid");
        lowercase.classList.add("invalid");
    }
    if(pass.match(uppercaseList)){
        uppercase.classList.remove("invalid");
        uppercase.classList.add("valid");
    }
    else{
        uppercase.classList.remove("valid");
        uppercase.classList.add("invalid");
    }
    if(pass.match(specialcharsList)){
        specialchars.classList.remove("invalid");
        specialchars.classList.add("valid");
    }
    else{
        specialchars.classList.remove("valid");
        specialchars.classList.add("invalid");
    }
    if (pass.length >= 8){
        charLen8.classList.remove("invalid");
        charLen8.classList.add("valid");
    }
    else {
        charLen8.classList.remove("valid");
        charLen8.classList.add("invalid");
    }
                                    
}

function toggleIcon(){
    var pass = document.getElementById("pass");
    var icon = document.getElementById("icon");
    icon.classList.toggle("fa-eye-slash");
    icon.classList.toggle("fa-eye");
    var className = icon.className;
    console.log(className);
    if(className.match("fa-eye"))
    {
        pass.type = "password"; 
    }
    if(className.match("fa-eye-slash"))
    {
        pass.type = "text";
    }
}

function submitPassword(){
    var numbers = document.getElementById("numbers");
    var lowercase = document.getElementById("lowercase");
    var uppercase = document.getElementById("uppercase");
    var specialchars = document.getElementById("specialchars");
    var charLen8 = document.getElementById("charLen8");

    var array = [numbers,lowercase,uppercase,specialchars,charLen8];
    var classLists = [];
    var flag = 1;
    for(var i = 0;i<5;i++)
    {
        classLists[i] = array[i].className;
        if(classLists[i] == "invalid")
        {
            window.alert("Password is invalid!");
            flag = 0;
            break;
        }
    } 
    
    if(flag == 1)
    {
        window.alert("Password is valid!");
    }
}

document.getElementById("submitbutton").addEventListener("click",handleSubmitClick);


=======

function validatePassword(){

    var pass = document.getElementById("pass").value;
    var numbers = document.getElementById("numbers");
    var lowercase = document.getElementById("lowercase");
    var uppercase = document.getElementById("uppercase");
    var specialchars = document.getElementById("specialchars");
    var charLen8 = document.getElementById("charLen8");
>>>>>>> 60be7c3b8feb0258e8d0f0b22d8a21cec7efc5d2

    var specialcharsList = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    var lowercaseList = /[a-z]/;
    var uppercaseList = /[A-Z]/;
    var numbersList = /[0-9]/;

    if(pass.match(numbersList)){
        numbers.classList.remove("invalid");
        numbers.classList.add("valid");
    }
    else{
        numbers.classList.remove("valid");
        numbers.classList.add("invalid");
    }
    if(pass.match(lowercaseList)){
        lowercase.classList.remove("invalid");
        lowercase.classList.add("valid");
    }
    else{
        lowercase.classList.remove("valid");
        lowercase.classList.add("invalid");
    }
    if(pass.match(uppercaseList)){
        uppercase.classList.remove("invalid");
        uppercase.classList.add("valid");
    }
    else{
        uppercase.classList.remove("valid");
        uppercase.classList.add("invalid");
    }
    if(pass.match(specialcharsList)){
        specialchars.classList.remove("invalid");
        specialchars.classList.add("valid");
    }
    else{
        specialchars.classList.remove("valid");
        specialchars.classList.add("invalid");
    }
    if (pass.length >= 8){
        charLen8.classList.remove("invalid");
        charLen8.classList.add("valid");
    }
    else {
        charLen8.classList.remove("valid");
        charLen8.classList.add("invalid");
    }
                                    
}



function submitPassword(){
    var numbers = document.getElementById("numbers");
    var lowercase = document.getElementById("lowercase");
    var uppercase = document.getElementById("uppercase");
    var specialchars = document.getElementById("specialchars");
    var charLen8 = document.getElementById("charLen8");

    var array = [numbers,lowercase,uppercase,specialchars,charLen8];
    var classLists = [];
    var flag = 1;
    for(var i = 0;i<5;i++)
    {
        classLists[i] = array[i].className;
        if(classLists[i] == "invalid")
        {
            window.alert("Password is invalid!");
            flag = 0;
            break;
        }
    } 
    
    if(flag == 1)
    {
        window.alert("Password is valid!");
    }
}

document.getElementById("submitbutton").addEventListener("click",handleSubmitClick);

function handleSubmitClick(){
     console.log("here");
     window.location.href="\calendar.html";
}


// function submitPassword() {
//      var numbers = document.getElementById("numbers");
//      var lowercase = document.getElementById("lowercase");
//      var uppercase = document.getElementById("uppercase");
//      var specialchars = document.getElementById("specialchars");
//      var charLen8 = document.getElementById("charLen8");

//      var array = [numbers, lowercase, uppercase, specialchars, charLen8];
//      var classLists = [];
//      var flag = 1;
//      for (var i = 0; i < 5; i++) {
//           console.log(array[i]);
//           classLists[i] = array[i].className;
//           if (classLists[i] == "invalid") {
//                window.alert("Password is invalid!");
//                flag = 0;
//                console.log("salmahere")

//                break;
//           }
//      }

//      if (flag == 1) {
//           window.alert("Password is valid!");
//      }
// }
