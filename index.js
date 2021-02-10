document.addEventListener('DOMContentLoaded', () => {

    var opacity = 0;
    var intervalId = 0;

    window.onload = fadeout;

    function fadeout()
    {
        setInterval(hide, 200);
    }

    function hide()
    {
        var wrapper = document.getElementById("body");

        opacity = Number(window.getComputedStyle(wrapper).getPropertyValue("opacity"));

        if (opacity > 0) 
        {
            opacity = opacity - 0.1;
        }

        else {
            clearInterval(intervalId);
        }
    }
});