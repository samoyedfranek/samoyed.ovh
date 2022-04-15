if (location.href.includes("#czat")) {
    const app = document.querySelector(".home_content");
    app.innerHTML = `<iframe width="100%" height="100%" frameBorder="0" src="chat.html"></iframe>`;
}
addEventListener("hashchange", e => {
    if (location.href.includes("#czat")) {
        const app = document.querySelector(".home_content");
        app.innerHTML = `<iframe width="100%" height="100%" frameBorder="0" src="chat.html"></iframe>`;
    }
});