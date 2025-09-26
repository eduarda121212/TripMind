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

// Adicione esta função no final do seu arquivo script.js existente

// Função para abrir página de detalhes do destino
function openDestinationDetails(destinationName) {
  // Converter nome para formato de URL (minúsculo, sem espaços)
  const urlName = destinationName.toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/ã/g, 'a')
    .replace(/ç/g, 'c')
    .replace(/é/g, 'e')
    .replace(/í/g, 'i')
    .replace(/ó/g, 'o')
    .replace(/ú/g, 'u');
  
  // Criar URL com parâmetro do destino
  const detailsUrl = `destino-detalhes.html?destino=${urlName}`;
  
  // Abrir em nova aba
  window.open(detailsUrl, '_blank');
}

// Adicionar event listeners aos cards existentes
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach(card => {
    card.style.cursor = 'pointer'; // Mostrar que é clicável
    
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
});

const locais = [
  {
    "nome" : "lugar",
    "id" : 0
  },
  {
    "nome": "lugar2",
    "descricao" : "",
    "foto" : "",
    "pais" : "",
    "hoteis" : ["res1", "res2"],
    "pontos" : ["ponto1", "ponto2"],
    "id" : 2
  }
]

//               0   1 
const locais = [{}, {}]
locais[0].nome
locais[1].descricao