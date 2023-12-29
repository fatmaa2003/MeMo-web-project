


function toggleIcon() {
    var pass = document.getElementById("pass");
    var icon = document.getElementById("icon");
    icon.classList.toggle("fa-eye-slash");
    icon.classList.toggle("fa-eye");
    var className = icon.className;
    console.log(className);
    if (className.match("fa-eye")) {
        pass.type = "password";
    }
    if (className.match("fa-eye-slash")) {
        pass.type = "text";
    }
}


document.getElementById("submitbutton").addEventListener("click", handleSubmitClick);

async function handleSubmitClick() {
    if (validateInputs()) {
        let url = `http://localhost:3000/login`
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: document.getElementById('user').value,
                password: document.getElementById('pass').value
            })
        });
        if (response.status === 200) {
            let resp = await response.json();
            localStorage.setItem('tokenKey', resp.token);
            window.location.href = "\calendar.html";
        }
    }
}

function validateInputs() {
    let username = document.getElementById('user').value
    let password = document.getElementById('pass').value
    if (username.trim() !== "" && password.trim() !== "") {
       return true
    
    }
    return false;
}

