const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText.replace(/\D/g,'');
    const increment = target / 100; // vitesse
    
    if (current < target) {
    counter.innerText = Math.ceil(current + increment) + (target === 100 ? "%" : "+");
    setTimeout(updateCount, 30);
    } else {
    counter.innerText = target + (target === 100 ? "%" : "+");
    }
};
updateCount();
});


const backToTop = document.getElementById("backToTop");

window.onscroll = function() {
if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTop.style.display = "block";
} else {
    backToTop.style.display = "none";
}
};

backToTop.addEventListener("click", () => {
window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Fermer le menu burger lorsqu'un lien est cliqué
        document.addEventListener('DOMContentLoaded', function() {
            var navLinks = document.querySelectorAll('.nav-link');
            var navbarToggler = document.querySelector('.navbar-toggler');
            var navbarCollapse = document.querySelector('.navbar-collapse');
            
            navLinks.forEach(function(navLink) {
                navLink.addEventListener('click', function() {
                    // Vérifier si le menu burger est visible (en mode mobile)
                    if (window.getComputedStyle(navbarToggler).display !== 'none') {
                        // Fermer le menu burger
                        var bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                            toggle: false
                        });
                        bsCollapse.hide();
                    }
                });
            });
        });