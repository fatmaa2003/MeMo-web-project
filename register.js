function validatePassword() {

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
 
     if (pass.match(numbersList)) {
         numbers.classList.remove("invalid");
         numbers.classList.add("valid");
     }
     else {
         numbers.classList.remove("valid");
         numbers.classList.add("invalid");
     }
     if (pass.match(lowercaseList)) {
         lowercase.classList.remove("invalid");
         lowercase.classList.add("valid");
     }
     else {
         lowercase.classList.remove("valid");
         lowercase.classList.add("invalid");
     }
     if (pass.match(uppercaseList)) {
         uppercase.classList.remove("invalid");
         uppercase.classList.add("valid");
     }
     else {
         uppercase.classList.remove("valid");
         uppercase.classList.add("invalid");
     }
     if (pass.match(specialcharsList)) {
         specialchars.classList.remove("invalid");
         specialchars.classList.add("valid");
     }
     else {
         specialchars.classList.remove("valid");
         specialchars.classList.add("invalid");
     }
     if (pass.length >= 8) {
         charLen8.classList.remove("invalid");
         charLen8.classList.add("valid");
     }
     else {
         charLen8.classList.remove("valid");
         charLen8.classList.add("invalid");
     }
 
 }

document.getElementById("submitbutton").addEventListener("click", handleSubmitClick);


async function handleSubmitClick() {
     console.log(validateInputs());
     if (validateInputs()) {
          let url = `http://localhost:3000/registration`
          const response = await fetch(url, {
               method: 'POST',
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify({
                    email: document.getElementById('email').value,
                    username: document.getElementById('user').value,
                    password: document.getElementById('pass').value
               })
          });
          if (response.status === 200) {
               window.location.href = "\login.html";
          }
     }

}
function validateInputs() {
     let username = document.getElementById('user').value
     let password = document.getElementById('pass').value
     if (username.trim() !== "" && password.trim() !== "") {
         // console.log('jsdjsdhfsdfsdfsdfsdfsdf', submitPassword())
          if (validatePassword()) {
               return true;
          }
          
     }
     return false;}



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
