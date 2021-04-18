document.addEventListener('DOMContentLoaded', () => {

    console.log('DOM Loaded..!!');

    const btnHamburger = document.querySelector('#btnHamburger');
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    const footer = document.querySelector('.footer');
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

            footer.classList.remove('fixed-bottom');
        }


        else
        {
            header.classList.add('open');
            body.classList.add('no-scroll');
            fadeElements.forEach((element) => {
                element.classList.remove('fade-out');
                element.classList.add('fade-in');
            });

            footer.classList.add('fixed-bottom');
        }
    };

    function play() {
        var audio = new Audio('media/music/chime.mp3');
        audio.play();
    };
});