// Efeito hover nos cards
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
  });

  card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
  });
});

// Rolagem suave para os links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});

// --- Filtro de pesquisa direto nos cards ---
const searchInput = document.getElementById('searchInput');
const exploreBtn = document.getElementById('exploreBtn'); // botão "Explorar"
const cards = document.querySelectorAll('.card');

function filterCards() {
  const searchValue = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const cardTitle = card.querySelector("h3").textContent.toLowerCase();
    const cardLocation = card.querySelector(".location").textContent.toLowerCase();

    if (cardTitle.includes(searchValue) || cardLocation.includes(searchValue)) {
      card.style.display = "block"; // mostra
    } else {
      card.style.display = "none"; // esconde
    }
  });
}

// Filtro em tempo real
searchInput.addEventListener('input', filterCards);

// Filtro ao clicar no botão "Explorar"
if (exploreBtn) {
  exploreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    filterCards();
  });
}
