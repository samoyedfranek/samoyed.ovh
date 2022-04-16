(function () {
    var start = new Date;
    start.setHours(21, 37, 0); // 11pm

    function pad(num) {
        return ("0" + parseInt(num)).substr(-2);
    }

    function tick() {
        var now = new Date;
        if (now > start) { // too late, go to tomorrow
            start.setDate(start.getDate() + 1);
        }
        var remain = ((start - now) / 1000);
        var hh = pad((remain / 60 / 60) % 60);
        var mm = pad((remain / 60) % 60);
        var ss = pad(remain % 60);
        document.getElementById('time').innerHTML =
            hh + ":" + mm + ":" + ss;
        const time = hh + ":" + mm + ":" + ss;
        if(time > "23:59:00" && time < "23:59:59") {

        }
        setTimeout(tick, 1000);
    }

    document.addEventListener('DOMContentLoaded', tick);
})();
(function () {
    let now = new Date();
    if (now.getHours() === 19 && now.getMinutes() === 22) {
    document.getElementById('body').innerHTML +=`
    <style>
    * {
        animation: change 2s infinite;
        cursor: url(https://api8.iloveimg.com/v1/download/nxbwpp8zynk26qtd9scjch2w48gn0h733qnssrws0t8193rhvh5drmAgrkg44hrj4m72dl0vAjzstkz8l08c91AdAx61g912wqAqjql1sA5zdj1rn7vdzlvw9mvht285b6nArqkkn466b2034gdxjA5jqy6jt9p87gxv6vjwfA8wbd1wk8k1), auto;
    }
    @keyframes change {
        0% {
            background-color: #1abc9c;
        }
    
        25% {
            background-color: #2ecc71;
        }
    
        50% {
            background-color: #3498db;
        }
    
        75% {
            background-color: #9b59b6;
        }
    
        100% {
            background-color: #e75c3c;
        }
    }
</style>
`;
};
if (now.getHours() !== 19 && now.getMinutes() !== 22) {
    document.getElementById('body').innerHTML =`
    <div id="home_content" class="home_content">
        <center>
            <h1>Odliczanie do 21:37</h1>
            <h2 id="time"></h2>
        </center>
    </div>
    <!-- Skrypty js -->
        <script type="text/javascript" src="/js/timer.js"></script>
    <!-- Skrypty js koniec-->
`;
}
})();