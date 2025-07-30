const darkModeBtn = document.getElementById('darkModeBtn');

darkModeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');

    if (document.documentElement.classList.contains('dark')) {
        darkModeBtn.textContent = '💧 Toggle Light Mode';
    } else {
        darkModeBtn.textContent = '🌙 Toggle Dark Mode';
    }
});