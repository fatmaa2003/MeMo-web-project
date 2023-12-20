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

async function saveDiary(){
    let diary = document.getElementById('diary-text')
    let url = "http://localhost:3000/events"
    const response = await fetch(url,{
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "new title",
            desc: diary.textContent.trim(),
        })    
    });
    console.log({response})
    if(response.status === 200){
        alert("diary saved")
    }
}
