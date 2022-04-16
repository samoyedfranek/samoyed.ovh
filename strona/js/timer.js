(function () {
    var start = new Date();
    start.setHours(21, 37, 0); // 11pm

    function pad(num) {
        return ("0" + parseInt(num)).substr(-2);
    }

    function tick() {
        var now = new Date();
        if (now > start) {
            // too late, go to tomorrow
            start.setDate(start.getDate() + 1);
        }
        var remain = (start - now) / 1000;
        var hh = pad((remain / 60 / 60) % 60);
        var mm = pad((remain / 60) % 60);
        var ss = pad(remain % 60);

        const time = hh + ":" + mm + ":" + ss;
        if (now.getHours() == 19 && now.getMinutes() == 35) {
            document.getElementsByTagName("body")[0].classList.add("papiezowa");
            document.getElementById("time").innerText = "";
        } else {
            document
                .getElementsByTagName("body")[0]
                .classList.remove("papiezowa");
            document.getElementById("time").innerText =
                hh + ":" + mm + ":" + ss;
        }
        setTimeout(tick, 1000);
    }

    document.addEventListener("DOMContentLoaded", tick);
})();
