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


window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});