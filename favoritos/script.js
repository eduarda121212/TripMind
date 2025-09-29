// Base de dados completa dos destinos
const destinosData = {
  'Paris': {
    foto: 'img/paris.jpg',
    pais: 'França',
    rating: '4.8',
    temp: '15°C',
    cambio: '1 EUR = R$ 5,50',
    descricao: 'A cidade luz, famosa por sua arquitetura, arte e gastronomia incomparáveis.'
  },
  'Madrid': {
    foto: 'img/madrid.webp',
    pais: 'Espanha',
    rating: '4.7',
    temp: '20°C',
    cambio: '1 EUR = R$ 5,50',
    descricao: 'Capital espanhola, repleta de praças, museus e vida noturna vibrante.'
  },
  'Tóquio': {
    foto: 'img/toquio.jpg',
    pais: 'Japão',
    rating: '4.7',
    temp: '22°C',
    cambio: '1 JPY = R$ 0,033',
    descricao: 'Tecnologia futurista misturada à tradição milenar japonesa.'
  },
  'Roma': {
    foto: 'img/roma.jpg',
    pais: 'Itália',
    rating: '4.8',
    temp: '20°C',
    cambio: '1 EUR = R$ 5,50',
    descricao: 'História e cultura em cada esquina da cidade eterna.'
  },
  'Milão': {
    foto: 'img/milao.jpg',
    pais: 'Itália',
    rating: '4.6',
    temp: '19°C',
    cambio: '1 EUR = R$ 5,50',
    descricao: 'Capital da moda e do design, cheia de charme italiano.'
  },
  'Nova York': {
    foto: 'img/novayork.jpg',
    pais: 'EUA',
    rating: '4.6',
    temp: '18°C',
    cambio: '1 USD = R$ 5,20',
    descricao: 'Arranha-céus, Broadway e a cidade que nunca dorme.'
  },
  'Los Angeles': {
    foto: 'img/losangeles.jpg',
    pais: 'EUA',
    rating: '4.7',
    temp: '24°C',
    cambio: '1 USD = R$ 5,20',
    descricao: 'Hollywood, praias e estilo de vida californiano.'
  },
  'Amsterdã': {
    foto: 'img/amsterda.jpg',
    pais: 'Holanda',
    rating: '4.8',
    temp: '14°C',
    cambio: '1 EUR = R$ 5,50',
    descricao: 'Canais charmosos, bicicletas e museus de arte renomados.'
  },
  'Sydney': {
    foto: 'img/sydney.jpg',
    pais: 'Austrália',
    rating: '4.8',
    temp: '25°C',
    cambio: '1 AUD = R$ 3,40',
    descricao: 'Cidade costeira famosa pela Ópera House e praias incríveis.'
  },
  'Singapura': {
    foto: 'img/singapura.jpg',
    pais: 'Singapura',
    rating: '4.7',
    temp: '29°C',
    cambio: '1 SGD = R$ 3,90',
    descricao: 'Cidade-estado moderna e multicultural no sudeste asiático.'
  },
  'Barcelona': {
    foto: 'img/barcelona.jpg',
    pais: 'Espanha',
    rating: '4.8',
    temp: '21°C',
    cambio: '1 EUR = R$ 5,50',
    descricao: 'Praias, Gaudí e uma cidade cheia de energia mediterrânea.'
  },
  'Rio de Janeiro': {
    foto: 'img/riodejaneiro.webp',
    pais: 'Brasil',
    rating: '4.9',
    temp: '30°C',
    cambio: '1 BRL = R$ 1,00',
    descricao: 'Cristo Redentor, Copacabana e paisagens naturais deslumbrantes.'
  },
  'São Paulo': {
    foto: 'img/saopaulo.png',
    pais: 'Brasil',
    rating: '4.6',
    temp: '26°C',
    cambio: '1 BRL = R$ 1,00',
    descricao: 'Maior cidade da América do Sul, repleta de cultura e diversidade.'
  }
};

// Função para slugificar nomes
function slugify(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '');
}

// Função para criar card HTML
function criarCardHTML(nome, dados) {
  return `
    <div class="card" data-destino="${nome}">
      <div class="card-image">
        <img src="${dados.foto}" alt="${nome}">
        <button class="favorite favorito-ativo">
          <i class="fa-solid fa-heart"></i>
        </button>
      </div>
      <div class="card-content">
        <div class="card-header">
          <h3>${nome}</h3>
          <span class="rating"><i class="fa-solid fa-star"></i> ${dados.rating}</span>
        </div>
        <p class="location"><i class="fa-solid fa-location-dot"></i> ${dados.pais}</p>
        <p class="info">
          <i class="fa-solid fa-temperature-half"></i> ${dados.temp} &nbsp; | &nbsp;
          <i class="fa-solid fa-dollar-sign"></i> ${dados.cambio}
        </p>
        <p class="description">${dados.descricao}</p>
      </div>
    </div>
  `;
}

// Função para remover dos favoritos
function removerFavorito(nomeDestino) {
  let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  favorites = favorites.filter(f => f !== nomeDestino);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Função para abrir detalhes do destino
function openDestinationDetails(destinationName) {
  const urlName = slugify(destinationName);
  window.location.href = `destino-detalhes.html?destino=${urlName}`;
}

// Carregar favoritos ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('favoritosContainer');
  const mensagemVazio = document.getElementById('mensagemVazio');
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

  if (favorites.length === 0) {
    mensagemVazio.style.display = 'block';
    container.style.display = 'none';
  } else {
    mensagemVazio.style.display = 'none';
    container.style.display = 'grid';

    // Renderizar cards dos favoritos
    favorites.forEach(nomeDestino => {
      if (destinosData[nomeDestino]) {
        const cardHTML = criarCardHTML(nomeDestino, destinosData[nomeDestino]);
        container.innerHTML += cardHTML;
      }
    });

    // Adicionar eventos aos cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      card.style.cursor = 'pointer';

      // Efeito hover
      card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.transition = 'transform 0.3s ease';
      });

      card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
      });

      // Click no card para ver detalhes
      card.addEventListener('click', function(e) {
        if (e.target.closest('.favorite')) {
          return;
        }
        const destinationName = this.querySelector('h3').textContent;
        openDestinationDetails(destinationName);
      });
    });

    // Adicionar eventos aos botões de favorito
    const favoriteBtns = document.querySelectorAll('.favorite');
    favoriteBtns.forEach(btn => {
      btn.style.color = '#e74c3c';
      btn.style.transition = 'transform 0.2s ease';
      
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        
        const card = this.closest('.card');
        const destName = card.querySelector('h3').textContent;
        
        // Remover dos favoritos
        removerFavorito(destName);
        
        // Animação de saída
        card.style.transition = 'all 0.3s ease';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
          card.remove();
          
          // Verificar se ainda há favoritos
          const remainingCards = document.querySelectorAll('.card');
          if (remainingCards.length === 0) {
            container.style.display = 'none';
            mensagemVazio.style.display = 'block';
          }
        }, 300);
      });
    });
  }
});