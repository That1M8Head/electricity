document.addEventListener("DOMContentLoaded", () => {
    const textArea = document.getElementById('text-area');
    const previewPane = document.getElementById('preview');

    const fs = window.electron.fs;
    fs.readFile('sample.md', 'utf-8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        textArea.value = data;
        const html = window.electron.marked().parse(data);
        previewPane.innerHTML = html;
    });

    textArea.addEventListener('input', () => {
        const text = textArea.value;
        const html = window.electron.marked().parse(text);
        previewPane.innerHTML = html;
    });
});
