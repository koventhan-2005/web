const sideMenu = document.querySelector('#sideMenu');
const navBar = document.querySelector("nav");
const navLinks = document.querySelector("nav ul");
const themeToggleBtn = document.querySelector("button img"); // your moon icon button

function openMenu() {
    sideMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
    sideMenu.style.transform = 'translateX(16rem)';
}

window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navBar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm');
        navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50');
    } else {
        navBar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm');
        navLinks.classList.add('bg-white','shadow-sm','bg-opacity-50');
    }
});


// 🌙 Dark mode toggle
const htmlEl = document.documentElement;

document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault(); // stop page reload

    // Toggle dark mode
    htmlEl.classList.toggle("dark");
    
    // (Optional) Change icon if you have sun/moon
    if (htmlEl.classList.contains("dark")) {
        themeToggleBtn.src = "./images/sun_icon.png";
    } else {
        themeToggleBtn.src = "./images/moon_icon.png";
    }
});
