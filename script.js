// Lit la config et affiche le bon état de vente
(function () {
  const openBox   = document.getElementById("order-open");
  const closedBox = document.getElementById("order-closed");

  if (CONFIG.saleOpen) {
    document.getElementById("sale-title").textContent       = CONFIG.saleTitle       || "Commandes ouvertes !";
    document.getElementById("sale-description").textContent = CONFIG.saleDescription || "";

    const deadlineEl = document.getElementById("sale-deadline");
    if (CONFIG.saleDeadline) {
      deadlineEl.textContent = "Commandes jusqu'au " + CONFIG.saleDeadline;
    } else {
      deadlineEl.style.display = "none";
    }

    document.getElementById("order-btn").href = CONFIG.googleFormLink;
    openBox.style.display   = "block";
    closedBox.style.display = "none";
  } else {
    openBox.style.display   = "none";
    closedBox.style.display = "block";
  }
})();

// Scroll vers "Passer ma commande" centré à l'écran
document.getElementById('hero-cmd-btn').addEventListener('click', function (e) {
  e.preventDefault();
  var openBox = document.getElementById('order-open');
  var target = openBox && openBox.style.display !== 'none'
    ? document.getElementById('order-btn')
    : document.getElementById('order-closed');
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
