document.addEventListener('DOMContentLoaded', () => {

    console.log('DOM Loaded..!!');

    const btnHamburger = document.querySelector('#btnHamburger');
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const fadeElements = document.querySelectorAll('.has-fade');


    btnHamburger.onclick = () => {

        if (header.classList.contains('open'))
        {
            header.classList.remove('open');
            body.classList.remove('no-scroll');
            fadeElements.forEach((element) => {
                element.classList.remove('fade-in');
                element.classList.add('fade-out');
            });
        }


        else
        {
            header.classList.add('open');
            body.classList.add('no-scroll');
            fadeElements.forEach((element) => {
                element.classList.remove('fade-out');
                element.classList.add('fade-in');
            });
        }
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