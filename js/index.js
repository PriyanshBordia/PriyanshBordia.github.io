document.addEventListener('DOMContentLoaded', () => {

    console.log('DOM Loaded..!!');

    const btnHamburger = document.querySelector('#btnHamburger');

    btnHamburger.onclick = () => {

        if (btnHamburger.classList.contains('open'))
            btnHamburger.classList.remove('open');

        else
            btnHamburger.classList.add('open');
    };

    function play() {
        var audio = new Audio('media/music/chime.mp3');
        audio.play();
    };

    // var opacity = 0;
    // var intervalId = 0;

    // window.onload = fadeout;

    // function fadeout()
    // {
    //     setInterval(hide, 200);
    // }

    // function hide()
    // {
    //     var wrapper = document.getElementById("body");

    //     opacity = Number(window.getComputedStyle(wrapper).getPropertyValue("opacity"));

    //     if (opacity > 0) 
    //     {
    //         opacity = opacity - 0.1;
    //     }

    //     else {
    //         clearInterval(intervalId);
    //     }
    // }
});