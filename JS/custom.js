// for smooth scroll
var scroll = new SmoothScroll('a[href*="#"]:not([data-easing])');
if (document.querySelector('[data-easing]')) {
    var easeInOutCubic = new SmoothScroll('[data-easing="easeInOutCubic"]', { easing: 'easeInOutCubic' });
}


var block = document.getElementById('about5');
block.addEventListener('click', function () {
    if(document.getElementById("bd").style["overflow"] == "hidden")
    {
        document.getElementById("bd").style["overflow"] = "visible";
    }


    document.getElementById("hamber").style["display"] = "block";
    document.getElementById("exe").style["display"] = "none";

    document.getElementById("navigation-background").style["transform"] = "scale(0)";
    document.getElementById("navigation-background").style["background-color"] = "none";

    window.location.href = '#About-Section';

});


var block = document.getElementById('aboutF');
block.addEventListener('click', function () {
    if(document.getElementById("bd").style["overflow"] == "hidden")
    {
        document.getElementById("bd").style["overflow"] = "visible";
    }


    document.getElementById("hamber").style["display"] = "block";
    document.getElementById("exe").style["display"] = "none";

    document.getElementById("navigation-background").style["transform"] = "scale(0)";
    document.getElementById("navigation-background").style["background-color"] = "none";

    window.location.href = '#Features-Section';

});


var block = document.getElementById('aboutP');
block.addEventListener('click', function () {
    if(document.getElementById("bd").style["overflow"] == "hidden")
    {
        document.getElementById("bd").style["overflow"] = "visible";
    }


    document.getElementById("hamber").style["display"] = "block";
    document.getElementById("exe").style["display"] = "none";

    document.getElementById("navigation-background").style["transform"] = "scale(0)";
    document.getElementById("navigation-background").style["background-color"] = "none";

    window.location.href = '#Process-Section';

});



var block = document.getElementById('aboutD');
block.addEventListener('click', function () {
    if(document.getElementById("bd").style["overflow"] == "hidden")
    {
        document.getElementById("bd").style["overflow"] = "visible";
    }


    document.getElementById("hamber").style["display"] = "block";
    document.getElementById("exe").style["display"] = "none";

    document.getElementById("navigation-background").style["transform"] = "scale(0)";
    document.getElementById("navigation-background").style["background-color"] = "none";

    window.location.href = '#Download-Section';

});



var block = document.getElementById('aboutC');
block.addEventListener('click', function () {
    if(document.getElementById("bd").style["overflow"] == "hidden")
    {
        document.getElementById("bd").style["overflow"] = "visible";
    }


    document.getElementById("hamber").style["display"] = "block";
    document.getElementById("exe").style["display"] = "none";

    document.getElementById("navigation-background").style["transform"] = "scale(0)";
    document.getElementById("navigation-background").style["background-color"] = "none";

    window.location.href = '#Contact-Section';

});







// click in hambergar or close button
var block = document.getElementById('navi-toggle');
block.addEventListener('click', function () {
    if (document.getElementById("navigation-background").style["transform"] == "scale(800)") {
        document.getElementById("navigation-background").style["transform"] = "scale(0)";
    }
    else {
        document.getElementById("navigation-background").style["transform"] = "scale(800)";
    }

    if (document.getElementById("navigation-background").style["background-color"] == "#002A66") {
        document.getElementById("navigation-background").style["background-color"] = "none";
    }
    else {
        document.getElementById("navigation-background").style["background-color"] = "#002A66";
    }

    if(document.getElementById("bd").style["overflow"] == "hidden")
    {
        document.getElementById("bd").style["overflow"] = "visible";
    }
    else
        document.getElementById("bd").style["overflow"] = "hidden";
});






var block = document.getElementById('hamber');
block.addEventListener('click', function () {
    document.getElementById("hamber").style["display"] = "none";
    document.getElementById("exe").style["display"] = "block";
});
var block = document.getElementById('exe');
block.addEventListener('click', function () {
    document.getElementById("hamber").style["display"] = "block";
    document.getElementById("exe").style["display"] = "none";
});







