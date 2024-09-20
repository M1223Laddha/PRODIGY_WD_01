// Hover effects for the nav
function hover(x) {
    x.style.color = "red";
    x.style.backgroundColor = "#74564c";
    x.style.textDecoration = "underline";
}

function noHover(x) {
    x.style.color = "#66fcf1";
    x.style.backgroundColor = "transparent";
    x.style.textDecoration = "none";
}

// Toggle navigation menu (mobile)
function toggleNav() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('show');
}

// Close nav when a link is clicked (mobile)
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            document.getElementById('menu').classList.remove('show');
        }
    });
});
