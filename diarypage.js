// const colorThemes = document.querySelectorAll('[name="theme"]');

// // store theme
// const storeTheme = function (theme) {
//     localStorage.setItem("theme", theme);
// };

// // set theme when visitor returns
// const setTheme = function () {
//     const activeTheme = localStorage.getItem("theme");
//     colorThemes.forEach((themeOption) => {
//         if (themeOption.id === activeTheme) {
//             themeOption.checked = true;
//         }
//     });
//     // fallback for no :has() support
//     document.documentElement.className = activeTheme;
// };

// colorThemes.forEach((themeOption) => {
//     themeOption.addEventListener("click", () => {
//         storeTheme(themeOption.id);
//         // fallback for no :has() support
//         document.documentElement.className = themeOption.id;
//     });
// });

// document.onload = setTheme();
document.addEventListener("DOMContentLoaded", () => {
    let sidebar = document.querySelector(".sidebar");
    let closeBtn = document.querySelector("#btn");
   
    closeBtn.addEventListener("click", () => {
        sidebar.classList.toggle("open");
        menuBtnChange();//calling the function(optional)
    });
   
    // following are the code to change sidebar button(optional)
    function menuBtnChange() {
        if (sidebar.classList.contains("open")) {
            closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
        } else {
            closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");//replacing the iocns class
        }
    }

    getDiary();
});


async function getDiary() {
    // let diary = document.getElementById('diary-text')
    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const dailyEvents = urlParams.get('event') !== "undefined" ? JSON.parse(urlParams.get('event')) : {}
    const date = urlParams.get('date');
    console.log(dailyEvents);
    let text = document.getElementById("diary-text");

    text.innerHTML = dailyEvents[0]?.desc
}

async function saveDiary() {
    let diary = document.getElementById('diary-text')
    let queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const date = urlParams.get('date')
    let url = "http://localhost:3000/events"
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "authorization": localStorage.getItem('tokenKey')
        },
        body: JSON.stringify({
            title: "new title",
            desc: diary.textContent.trim(),
            date: date
        })
    });
    console.log({ response })
    if (response.status === 200) {
        alert("diary saved")
        let text = document.getElementById("diary-text");
        text.innerHTML = diary.textContent.trim()
        var queryParams = new URLSearchParams(window.location.search);
        let updatedEvent = JSON.stringify([{ title: "new title", desc: diary.textContent.trim(), date: date }])
        // Set new or modify existing parameter value.
        console.log(updatedEvent)
        queryParams.set("event", updatedEvent);

        // Replace current querystring with the new one.
        history.replaceState(null, null, "?" + queryParams.toString());
    }
}

