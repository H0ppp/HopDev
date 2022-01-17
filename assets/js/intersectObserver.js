////////////////////////////////////////////////////////
// Intersection Observer for Animated container entry
// Author: Jake Hopkins
////////////////////////////////////////////////////////

var sect1, sect2, sect3;

const pageSections = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
            if (entry.target.id != "serviceTrack") { // Check if service page or not
                entry.target.classList.add("anim"); // Add anim class to container
            }
            else { // If service page, add anim class individually to containers
                sect1.classList.add("anim");
                setTimeout(() => {
                    sect2.classList.add("anim");
                }, 250);
                setTimeout(() => {
                    sect3.classList.add("anim");
                }, 500);
            }
        }
    })
})

window.onload = function () { // Assign varaiables once page has loaded
    sect1 = document.querySelector('#serv1');
    sect2 = document.querySelector('#serv2');
    sect3 = document.querySelector('#serv3');
    pages = document.querySelectorAll('.tracker');
    pages.forEach((p) => {
        pageSections.observe(p);
    })
}