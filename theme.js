function toggleTheme() {
    document.body.classList.toggle('light-theme');
    localStorage.setItem('theme', document.body.classList.contains('light-theme') ? 'light' : 'dark');
}

window.onload = () => {
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
    }
};
