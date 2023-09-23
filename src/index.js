window.addEventListener('load', () => {
    let programs_container = document.getElementById('programs_container')
    if (programs_container) {
        programs_isotope = new Isotope(programs_container, {
            itemSelector: '.programs-item'
        });
    }
    AOS.init({ duration: 1000, easing: "ease-in-out", once: false, mirror: false });
    brython();
});
