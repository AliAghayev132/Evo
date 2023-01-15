export default function updateLangue(state) {
    if (state === 'AZ') {
        window.location.reload();
        return;
    }
    const loadText = data => {
        for (let i in data) {
            document.querySelector(data[i].element).innerText = data[i].text;
        }
    }
    fetch(`./src/languages/${state === 'EN' ? "english" : "russian"}.json`)
        .then(response => response.json())
        .then(data => loadText(data.texts))
}