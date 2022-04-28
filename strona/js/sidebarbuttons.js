function dom() {
    if (location.href.includes("#dom")) {
        const app = document.querySelector(".home_content");
        window.open(`index.html`, '_self');
    }
    addEventListener("hashchange", e => {
        if (location.href.includes("#dom")) {
            const app = document.querySelector(".home_content");
            window.open('index.html', '_self');
        }
    });
}

function skracacz() {
    if (location.href.includes("#skracacz")) {
        const app = document.querySelector(".home_content");
        app.innerHTML = `<div class="text">W trakcie budowy</div>`;
    }
    addEventListener("hashchange", e => {
        if (location.href.includes("#skracacz")) {
            const app = document.querySelector(".home_content");
            app.innerHTML = `<div class="text">W trakcie budowy</div>`;
        }
    });
}

function pastebin() {
    if (location.href.includes("#pastebin")) {
        const app = document.querySelector(".home_content");
        app.innerHTML = `<div class="text">W trakcie budowy</div>`;
    }
    addEventListener("hashchange", e => {
        if (location.href.includes("#pastebin")) {
            const app = document.querySelector(".home_content");
            app.innerHTML = `<div class="text">W trakcie budowy</div>`;
        }
    });
}

function papa() {
    if (location.href.includes("#2137")) {
        const app = document.querySelector(".home_content");
        app.innerHTML = `<iframe width="100%" height="100%" frameBorder="0" src="timer.html"></iframe>`;
    }
    addEventListener("hashchange", e => {
        if (location.href.includes("#2137")) {
            const app = document.querySelector(".home_content");
            app.innerHTML = `<iframe width="100%" height="100%" frameBorder="0" src="timer.html"></iframe>`;
        }
    });
}

function czat() {
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
}

function stats() {
    if (location.href.includes("#statystyki")) {
        const app = document.querySelector(".home_content");
        app.innerHTML = `<div class="text">W trakcie budowy</div>`;
    } 
    addEventListener("hashchange", e => {
        if (location.href.includes("#statystyki")) {
            const app = document.querySelector(".home_content");
            app.innerHTML = `<div class="text">W trakcie budowy</div>`;
        }
    });
}
function error() {
    if (location.href.includes("#404")) {
        const app = document.querySelector(".home_content");
        app.innerHTML = `<iframe width="100%" height="100%" frameBorder="0" src="404.html"></iframe>`;
    } 
    addEventListener("hashchange", e => {
        if (location.href.includes("#404")) {
            const app = document.querySelector(".home_content");
            app.innerHTML = `<iframe width="100%" height="100%" frameBorder="0" src="404.html"></iframe>`;
        }
    });
}

dom()
skracacz()
pastebin()
papa()
czat()
stats()
error()