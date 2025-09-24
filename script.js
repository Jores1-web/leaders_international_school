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


//Compte à rebours dynamique (exemple)
        function updateCountdown() {
            const days = document.getElementById('days');
            const hours = document.getElementById('hours');
            const minutes = document.getElementById('minutes');
            const seconds = document.getElementById('seconds');
            
            // Date cible (15 jours dans le futur)
            const targetDate = new Date();
            targetDate.setDate(targetDate.getDate() + 15);
            
            function update() {
                const now = new Date();
                const difference = targetDate - now;
                
                if (difference <= 0) {
                    days.textContent = '00';
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                    return;
                }
                
                const d = Math.floor(difference / (1000 * 60 * 60 * 24));
                const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const s = Math.floor((difference % (1000 * 60)) / 1000);
                
                days.textContent = d.toString().padStart(2, '0');
                hours.textContent = h.toString().padStart(2, '0');
                minutes.textContent = m.toString().padStart(2, '0');
                seconds.textContent = s.toString().padStart(2, '0');
            }
            
            update();
            setInterval(update, 1000);
        }
        
        // Démarrer le compte à rebours quand la page est chargée
        document.addEventListener('DOMContentLoaded', updateCountdown);