var snd = new Audio("sound.wav");

function getTime() {
    console.log('getTime--', new Date().getHours());
}

window.onload = function () {

    let e = document.getElementById('currentTime')
    let called = false;
    if (!called) {
        let h = 0;

        setInterval(() => {
            let hour = new Date().getHours();
            e.textContent = new Date().getHours() + "::" + new Date().getMinutes() + "::" + new Date().getSeconds()

            let seconds = new Date().getSeconds();
            let element2 = document.getElementById('s')
            let degS = (seconds*6 +  + 180) % 360
            element2.style.transform = 'rotate(' + degS + 'deg)';

            let minute = hour * 60 + new Date().getMinutes();
            let element1 = document.getElementById('m')
            let degM = (180 + minute * 6) % 360;

            element1.style.transform = 'rotate(' + degM + 'deg)';


            h = h + 0.00833333333;
            let element = document.getElementById('h')
            let degH = (180 + hour * 30 + h) % 360;
            element.style.transform = 'rotate(' + degH + 'deg)';

        }, 1000)
    }



}

function onColorChange (c) {
    console.log('ccccc', c)
    document.documentElement.style.setProperty('--color',c);

}