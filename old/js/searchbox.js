document.querySelector("#szukaj").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        const y = document.getElementById("szukaj").value;
        const x = y.replaceAll(/ /g, "+");
        window.location = "https://www.google.com/search?q=" + x;
    }
});
