document.addEventListener('DOMContentLoaded', (event) => {
    const checkbox = document.getElementById('checkbox');
    const body = document.body;

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.add(savedTheme);
        checkbox.checked = savedTheme === 'dark-mode';
    } else {
        body.classList.add('light-mode'); // default
    }

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});

