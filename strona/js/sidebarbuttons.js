function dom() {
    if (location.href.includes("#dom")) {
        const app = document.querySelector(".home_content");
        app.innerHTML = `Strona jest nadal w trakcie budowy a to jest tylko wersja poglądowa`;
    }
    addEventListener("hashchange", e => {
        if (location.href.includes("#dom")) {
            const app = document.querySelector(".home_content");
            app.innerHTML = `Strona jest nadal w trakcie budowy a to jest tylko wersja poglądowa`;
        }
    });
}

function skracacz() {
    if (location.href.includes("#skracacz")) {
        const app = document.querySelector(".home_content");
        app.innerHTML = `W trakcie budowy`;
    }
    addEventListener("hashchange", e => {
        if (location.href.includes("#skracacz")) {
            const app = document.querySelector(".home_content");
            app.innerHTML = `W trakcie budowy`;
        }
    });
}

function pastebin() {
    if (location.href.includes("#pastebin")) {
        const app = document.querySelector(".home_content");
        app.innerHTML = `W trakcie budowy`;
    }
    addEventListener("hashchange", e => {
        if (location.href.includes("#pastebin")) {
            const app = document.querySelector(".home_content");
            app.innerHTML = `W trakcie budowy`;
        }
    });
}

function papa() {
    if (location.href.includes("#2137")) {
        const app = document.querySelector(".home_content");
        app.innerHTML = `W trakcie budowy`;
    }
    addEventListener("hashchange", e => {
        if (location.href.includes("#2137")) {
            const app = document.querySelector(".home_content");
            app.innerHTML = `W trakcie budowy`;
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
        app.innerHTML = `W trakcie budowy`;
    } 
    addEventListener("hashchange", e => {
        if (location.href.includes("#statystyki")) {
            const app = document.querySelector(".home_content");
            app.innerHTML = `W trakcie budowy`;
        }
    });
}


dom()
skracacz()
pastebin()
papa()
czat()
stats()