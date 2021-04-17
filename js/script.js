document.addEventListener('DOMContentLoaded', () => {

    console.log('DOM Loaded..!!');

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

        // const anim = anime.timeline({
        //     loop: true,
        //     direction: 'alternate',
        // });

        // anim
        //     .add({
        //         targets: '#hexagon path',
        //         strokeDashoffset: [anime.setDashoffset, 0],
        //         easing: 'easeInOutQuart',
        //         duration: 2000,
        //         delay: function (el, i) { return i * 250 },
        //     })
        //     .add({
        //         targets: '#hexagon #B',
        //         duration: 1000,
        //         opacity: 1,
        //         easing: 'easeInOutQuart'
        //     });
            
        // window.getComputedStyle(wrapper).setPropertyValue("opacity") = 1
    // }

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
});