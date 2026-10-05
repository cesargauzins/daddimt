// Lit la config et affiche le bon état de vente (rappelée à chaque changement de langue)
function renderSale() {
  const openBox   = document.getElementById("order-open");
  const closedBox = document.getElementById("order-closed");

  if (CONFIG.saleOpen) {
    document.getElementById("sale-title").textContent       = configText(CONFIG.saleTitle) || t("sale.badge");
    document.getElementById("sale-description").textContent = configText(CONFIG.saleDescription);

    const deadlineEl = document.getElementById("sale-deadline");
    const deadline   = configText(CONFIG.saleDeadline);
    if (deadline) {
      deadlineEl.textContent = t("sale.deadline") + deadline;
      deadlineEl.style.display = "";
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
}

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
