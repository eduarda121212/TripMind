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
    id: 1,
    nome: "Paris",
    pais: "França",
    descricao: "A cidade luz, famosa por sua arquitetura, arte e gastronomia incomparáveis.",
    foto: "img/paris.jpg",
    hoteis: ["Hotel Lutetia", "Le Bristol", "Hôtel Plaza Athénée"],
    pontos: ["Torre Eiffel", "Museu do Louvre", "Catedral de Notre-Dame"]
  },
  {
    id: 2,
    nome: "Madrid",
    pais: "Espanha",
    descricao: "Capital espanhola, repleta de praças, museus e vida noturna vibrante.",
    foto: "img/madrid.webp",
    hoteis: ["Hotel Ritz", "Only YOU Hotel", "Barceló Torre de Madrid"],
    pontos: ["Museu do Prado", "Parque do Retiro", "Plaza Mayor"]
  },
  {
    id: 3,
    nome: "Tóquio",
    pais: "Japão",
    descricao: "Tecnologia futurista misturada à tradição milenar japonesa.",
    foto: "img/toquio.jpg",
    hoteis: ["Park Hyatt", "Mandarin Oriental", "Hotel Gracery Shinjuku"],
    pontos: ["Shibuya", "Templo Senso-ji", "Tokyo Skytree"]
  },
  {
    id: 4,
    nome: "Roma",
    pais: "Itália",
    descricao: "História e cultura em cada esquina da cidade eterna.",
    foto: "img/roma.jpg",
    hoteis: ["Hotel de Russie", "Rome Cavalieri", "Hotel Eden"],
    pontos: ["Coliseu", "Fontana di Trevi", "Panteão"]
  },
  {
    id: 5,
    nome: "Milão",
    pais: "Itália",
    descricao: "Capital da moda e do design, cheia de charme italiano.",
    foto: "img/milao.jpg",
    hoteis: ["Armani Hotel Milano", "Hotel Principe di Savoia", "Excelsior Hotel Gallia"],
    pontos: ["Duomo de Milão", "Galeria Vittorio Emanuele II", "Teatro alla Scala"]
  },
  {
    id: 6,
    nome: "Nova York",
    pais: "EUA",
    descricao: "Arranha-céus, Broadway e a cidade que nunca dorme.",
    foto: "img/novayork.jpg",
    hoteis: ["The Plaza Hotel", "The Ritz-Carlton", "Mandarin Oriental NY"],
    pontos: ["Estátua da Liberdade", "Central Park", "Times Square"]
  },
  {
    id: 7,
    nome: "Los Angeles",
    pais: "EUA",
    descricao: "Hollywood, praias e estilo de vida californiano.",
    foto: "img/losangeles.jpg",
    hoteis: ["The Beverly Hills Hotel", "Hotel Bel-Air", "The Ritz-Carlton LA"],
    pontos: ["Hollywood Sign", "Calçada da Fama", "Santa Monica Pier"]
  },
  {
    id: 8,
    nome: "Amsterdã",
    pais: "Holanda",
    descricao: "Canais charmosos, bicicletas e museus de arte renomados.",
    foto: "img/amsterda.jpg",
    hoteis: ["W Amsterdam", "Pulitzer Amsterdam", "Conservatorium Hotel"],
    pontos: ["Museu Van Gogh", "Casa de Anne Frank", "Vondelpark"]
  },
  {
    id: 9,
    nome: "Sydney",
    pais: "Austrália",
    descricao: "Cidade costeira famosa pela Ópera House e praias incríveis.",
    foto: "img/sydney.jpg",
    hoteis: ["Park Hyatt Sydney", "Four Seasons Hotel", "The Darling"],
    pontos: ["Ópera de Sydney", "Harbour Bridge", "Bondi Beach"]
  },
  {
    id: 10,
    nome: "Singapura",
    pais: "Singapura",
    descricao: "Cidade-estado moderna e multicultural no sudeste asiático.",
    foto: "img/singapura.jpg",
    hoteis: ["Marina Bay Sands", "Raffles Hotel", "The Fullerton Hotel"],
    pontos: ["Gardens by the Bay", "Marina Bay Sands SkyPark", "Sentosa"]
  },
  {
    id: 11,
    nome: "Barcelona",
    pais: "Espanha",
    descricao: "Praias, Gaudí e uma cidade cheia de energia mediterrânea.",
    foto: "img/barcelona.jpg",
    hoteis: ["Hotel Arts Barcelona", "Majestic Hotel & Spa", "W Barcelona"],
    pontos: ["Sagrada Família", "Parque Güell", "La Rambla"]
  },
  {
    id: 12,
    nome: "Rio de Janeiro",
    pais: "Brasil",
    descricao: "Cristo Redentor, Copacabana e paisagens naturais deslumbrantes.",
    foto: "img/riodejaneiro.webp",
    hoteis: ["Copacabana Palace", "Hotel Fasano", "Miramar by Windsor"],
    pontos: ["Cristo Redentor", "Pão de Açúcar", "Praia de Copacabana"]
  },
  {
    id: 13,
    nome: "São Paulo",
    pais: "Brasil",
    descricao: "Maior cidade da América do Sul, repleta de cultura e diversidade.",
    foto: "img/saopaulo.png",
    hoteis: ["Hotel Unique", "Renaissance São Paulo", "Palácio Tangará"],
    pontos: ["Avenida Paulista", "Parque Ibirapuera", "Catedral da Sé"]
  }
];

// Função para abrir página de detalhes
function openDestinationDetails(destinationName) {
  const urlName = destinationName.toLowerCase()
    .replace(/\s+/g, '-')
    .normalize('NFD').replace(/[\u0300-\u036f]/g, ''); // remove acentos
  
  window.open(`destino-detalhes.html?destino=${urlName}`, '_blank');
}

// Pegar destino da URL
    const params = new URLSearchParams(window.location.search);
    const destinoURL = params.get("destino");

    // Procurar no array locais
    constdestino = locais.find(loc => 
      loc.nome.toLowerCase().replace(/\s+/g, '-')
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '') === destinoURL
    );

    // Renderizar conteúdo
    if (destino) {
      document.getElementById("detalhes").innerHTML = `
        <h1>${destino.nome} - ${destino.pais}</h1>
        <img src="${destino.foto}" alt="${destino.nome}" style="width:400px">
        <p>${destino.descricao}</p>
        
        <h2>🏨 Hotéis</h2>
        <ul>${destino.hoteis.map(h => `<li>${h}</li>`).join("")}</ul>

        <h2>📍 Pontos turísticos</h2>
        <ul>${destino.pontos.map(p => `<li>${p}</li>`).join("")}</ul>
      `;
    } else {
      document.getElementById("detalhes").innerHTML = `<p>Destino não encontrado.</p>`;
    }

    // pega o destino da URL (?destino=Tokyo)
const urlParams = new URLSearchParams(window.location.search);
const destino = urlParams.get("destino");
document.getElementById("tituloDestino").textContent = destino;

// ========== CLIMA ==========
const climaBox = document.getElementById("clima");
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${destino}&units=metric&lang=pt_br&appid=SUA_CHAVE_AQUI`)
  .then(res => res.json())
  .then(data => {
    if (data.main) {
      climaBox.textContent = `${data.weather[0].description}, ${data.main.temp}°C`;
    } else {
      climaBox.textContent = "Clima não encontrado.";
    }
  })
  .catch(() => climaBox.textContent = "Erro ao carregar clima.");

// ========== CÂMBIO ==========
const cambioBox = document.getElementById("cambio");
// exemplo: se a cidade for Tóquio → JPY
let moeda = "JPY"; 
if (destino === "Paris") moeda = "EUR";
if (destino === "Nova York") moeda = "USD";
if (destino === "Londres") moeda = "GBP";
if (destino === "São Paulo") moeda = "BRL";

fetch(`https://economia.awesomeapi.com.br/json/last/USD-${moeda}`)
  .then(res => res.json())
  .then(data => {
    const chave = `USD${moeda}`;
    if (data[chave]) {
      cambioBox.textContent = `1 USD = ${parseFloat(data[chave].bid).toFixed(2)} ${moeda}`;
    } else {
      cambioBox.textContent = "Câmbio não encontrado.";
    }
  })
  .catch(() => cambioBox.textContent = "Erro ao carregar câmbio.");

// ========== MAPA ==========
const mapa = document.getElementById("mapa");
mapa.innerHTML = `
  <iframe
    src="https://www.google.com/maps?q=${destino}&output=embed"
    width="100%"
    height="300"
    style="border:0;"
    allowfullscreen=""
    loading="lazy">
  </iframe>
`;
