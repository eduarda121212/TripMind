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
const exploreBtn = document.getElementById('exploreBtn');
const cards = document.querySelectorAll('.card');

function filterCards() {
  const searchValue = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const cardTitle = card.querySelector("h3").textContent.toLowerCase();
    const cardLocation = card.querySelector(".location").textContent.toLowerCase();

    if (cardTitle.includes(searchValue) || cardLocation.includes(searchValue)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
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

// Função para converter nome em slug (URL amigável)
function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '');
}

// Função para abrir página de detalhes do destino
function openDestinationDetails(destinationName) {
  const urlName = slugify(destinationName);
  const detailsUrl = `destino-detalhes.html?destino=${urlName}`;
  window.location.href = detailsUrl;
}

// Adicionar event listeners aos cards
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.style.cursor = 'pointer';
    
    card.addEventListener('click', function(e) {
      // Prevenir clique se foi no botão de favorito
      if (e.target.closest('.favorite')) {
        return;
      }
      
      // Pegar nome do destino
      const destinationName = this.querySelector('h3').textContent;
      
      // Abrir página de detalhes
      openDestinationDetails(destinationName);
    });
  });
  
  // Funcionalidade de favoritos
  const favoriteBtns = document.querySelectorAll('.favorite');
  
  favoriteBtns.forEach(btn => {
    // Carregar favoritos do localStorage
    const card = btn.closest('.card');
    const destName = card.querySelector('h3').textContent;
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    
    if (favorites.includes(destName)) {
      btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
      btn.style.color = '#e74c3c';
    }
    
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      
      const card = this.closest('.card');
      const destName = card.querySelector('h3').textContent;
      let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      
      if (favorites.includes(destName)) {
        // Remover dos favoritos
        favorites = favorites.filter(f => f !== destName);
        this.innerHTML = '<i class="fa-regular fa-heart"></i>';
        this.style.color = '';
      } else {
        // Adicionar aos favoritos
        favorites.push(destName);
        this.innerHTML = '<i class="fa-solid fa-heart"></i>';
        this.style.color = '#e74c3c';
      }
      
      localStorage.setItem('favorites', JSON.stringify(favorites));
    });
  });
});