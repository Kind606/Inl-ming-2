
function openMenMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.querySelector(".herr-meny").classList.toggle("active-menu");
  }

  function openFemaleMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.querySelector(".Dam-meny").classList.toggle("active-menu");
 }

 function openChildMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.querySelector(".barn-meny").classList.toggle("active-menu");
 }

 function openBeautyMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.querySelector(".beauty-meny").classList.toggle("active-menu");
 }

 function openHomeMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.querySelector(".home-meny").classList.toggle("active-menu");
 }

 function openHbMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.querySelector(".hb-meny").classList.toggle("active-menu");
 }

 window.onclick = function(event) {
    // Om klicket inte är på någon av knapparna
    if (!event.target.matches('.Menbtn') && !event.target.matches('.Femalebtn') && !event.target.matches('.Childbtn') && !event.target.matches('.Beautybtn') && !event.target.matches('.Homebtn') && !event.target.matches('.Hbbtn')) {
        // Hämta alla element med klasserna .navbar-2, .herr-meny och .Dam-meny
        var dropdowns = document.querySelectorAll(".navbar-2, .herr-meny, .Dam-meny, .barn-meny, .beauty-meny, .home-meny, .hb-meny");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            // Ta bort klasserna om de finns
            if (openDropdown.classList.contains('show') || openDropdown.classList.contains('active-menu')) {
                openDropdown.classList.remove('show');
                openDropdown.classList.remove('active-menu');
            }
        }
    }
};