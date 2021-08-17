function play() {
    var audio = new Audio('./media/music/chime.mp3');
    audio.play();
};

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

	const tabs = document.querySelector('.experience__tabs');

	tabs.addEventListener('click', e => handleClick(e));

	function handleClick(e) {
		const target = e.target;
		const tabNum = target.dataset.tab;
		const activeTab = document.querySelector('.experience__tabs .active');
		const activeContent = document.querySelector('.experience__content .visible');
		const currentContent = document.querySelector(`.experience__content__section[data-tab='${tabNum}']`);

		if (!tabNum) {
			return;
		}

		activeTab.classList.remove('active');
		target.classList.add('active');
		activeContent.classList.remove('visible');
		currentContent.classList.add('visible');
	};
});
