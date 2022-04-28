(function () {
    const app = document.querySelector(".app");
    const socket = io();

    let uname;

    app.querySelector(".join-screen #join-user").addEventListener("click", function () {
        let username = app.querySelector(".join-screen #username").value;
        if (username.length == 0) {
            return;
        }
        socket.emit("newuser", username);
        uname = username;
        app.querySelector(".join-screen").classList.remove("active");
        app.querySelector(".chat-screen").classList.add("active");
    })

    app.querySelector(".join-screen #username").addEventListener("keypress", function (e) {
        if (e.key === 'Enter') {
            let username = app.querySelector(".join-screen #username").value;
            if (username.length == 0) {
                return;
            }
            socket.emit("newuser", username);
            uname = username;
            app.querySelector(".join-screen").classList.remove("active");
            app.querySelector(".chat-screen").classList.add("active");
        }
    })


    app.querySelector(".chat-screen #send-message").addEventListener("click", function () {
        let message = app.querySelector(".chat-screen #message-input").value;
        if (message.length == 0) {
            return;
        }
        renderMessage("my", {
            username: uname,
            text: message
        });
        socket.emit("chat", {
            username: uname,
            text: message
        });
        app.querySelector(".chat-screen #message-input").value = "";
    });

    app.querySelector(".chat-screen #message-input").addEventListener("keypress", function (e) {
        if (e.key === 'Enter') {
            let message = app.querySelector(".chat-screen #message-input").value;
            if (message.length == 0) {
                return;
            }
            renderMessage("my", {
                username: uname,
                text: message
            });
            socket.emit("chat", {
                username: uname,
                text: message
            });
            app.querySelector(".chat-screen #message-input").value = "";
        }
    })

    app.querySelector(".chat-screen #exit-chat").addEventListener("click", function () {
        socket.emit("exituser", uname)
        window.location.href = "chat.html";
    });

    socket.on("update", function (update) {
        renderMessage("update", update);
    })

    socket.on("chat", function (message) {
        renderMessage("other", message);
    })

    function renderMessage(type, message) {
        let messageContainer = app.querySelector(".chat-screen .messages");
        if (type == "my") {
            let el = document.createElement("div");
            el.setAttribute("class", "message my-message");
            el.innerHTML = `
                <div>
                    <div class="name">Ty</div>
                    <div class="text">${message.text}</div>
                </div>
            
            `;
            messageContainer.appendChild(el);
        } else if (type == "other") {
            let el = document.createElement("div");
            el.setAttribute("class", "message other-message");
            el.innerHTML = `
                <div>
                    <div class="name">${message.username}</div>
                    <div class="text">${message.text}</div>
                </div>
            
            `;
            messageContainer.appendChild(el);
        } else if (type == "update") {
            let el = document.createElement("div");
            el.setAttribute("class", "update");
            el.innerText = message;
            messageContainer.appendChild(el);
        }
        messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight
    }
})();
let t = document.getElementById('username');
t.addEventListener('input', (event) => {
    if (document.querySelector("#username").value.length === 12) {
    document.querySelector(".error").innerHTML= '<label style="color: red">Osiągnięto limit znaków!</label>'
}else 
document.querySelector(".error").innerHTML= ''
})
let tt = document.getElementById('message-input');
tt.addEventListener('input', (event) => {
    if (document.querySelector("#message-input").value.length === 128) {
    alert('Osiągnięto limit znaków!')
}})