const darkModeBtn = document.getElementById('dark-mode-btn');

darkModeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
});