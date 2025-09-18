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
