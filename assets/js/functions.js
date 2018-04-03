
document.addEventListener("DOMContentLoaded", function(event) {
	if(window.location.pathname == '/contact') {
		var d = document.getElementById("person");
		d.className += " show";
	}
    if(window.location.pathname == '/research') {
        var d = document.getElementById("astro");
        d.className += " show";
    }
});

function filterNav(evt, section) {

    nav = document.getElementsByClassName("nav-item");

    for (var i = 0, len = nav.length ; i < len; i++) {
        nav[i].classList.toggle("show", nav[i].id == section);
    }

}