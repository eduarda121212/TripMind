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

// Lista de destinos
const destinations = [
  'Paris', 'Madri', 'Tóquio', 'Roma', 'Milão', 'Nova York',
  'Los Angeles', 'Amsterdã', 'Sydney', 'Singapura',
  'Barcelona', 'Rio de Janeiro', 'São Paulo'
];

const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

function normalizeText(text) {
  return text.toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
}

// Mostrar sugestões
searchInput.addEventListener('input', function() {
  const query = this.value.trim();
  
  if (query.length === 0) {
      searchResults.style.display = 'none';
      return;
  }
  
  const normalizedQuery = normalizeText(query);
  const matches = destinations.filter(dest => 
      normalizeText(dest).includes(normalizedQuery)
  );
  
  if (matches.length > 0) {
      displaySearchResults(matches);
      searchResults.style.display = 'block';
  } else {
      searchResults.style.display = 'none';
  }
});

function displaySearchResults(matches) {
  searchResults.innerHTML = matches.map(match => 
      `<div class="search-result" onclick="selectDestination('${match}')">${match}</div>`
  ).join('');
}

function performSearch() {
  const query = searchInput.value.trim();
  if (query) {
      console.log('Pesquisando por:', query);
      searchResults.style.display = 'none';
  }
}
