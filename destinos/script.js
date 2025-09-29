// Dados dos destinos
const destinosInfo = {
  'paris': {
    nome: 'Paris',
    pais: 'França',
    lat: 48.8566,
    lon: 2.3522,
    moeda: 'EUR',
    atracoes: [
      'Torre Eiffel',
      'Museu do Louvre',
      'Catedral de Notre-Dame',
      'Avenida Champs-Élysées',
      'Arco do Triunfo',
      'Sacré-Cœur'
    ],
    hoteis: [
      'Hotel Le Meurice',
      'Hotel Ritz Paris',
      'Hotel Pullman Paris Tour Eiffel'
    ]
  },
  'madrid': {
    nome: 'Madrid',
    pais: 'Espanha',
    lat: 40.4168,
    lon: -3.7038,
    moeda: 'EUR',
    atracoes: [
      'Museu do Prado',
      'Parque do Retiro',
      'Palácio Real',
      'Plaza Mayor',
      'Puerta del Sol',
      'Mercado de San Miguel'
    ],
    hoteis: [
      'Hotel Riu Plaza España',
      'Hotel Urban',
      'Hotel NH Collection Madrid'
    ]
  },
  'toquio': {
    nome: 'Tóquio',
    pais: 'Japão',
    lat: 35.6895,
    lon: 139.6917,
    moeda: 'JPY',
    atracoes: [
      'Templo Senso-ji',
      'Torre de Tóquio',
      'Shibuya Crossing',
      'Akihabara',
      'Meiji Shrine',
      'Tokyo Skytree'
    ],
    hoteis: [
      'Park Hotel Tokyo',
      'Hotel Gracery Shinjuku',
      'The Peninsula Tokyo'
    ]
  },
  'roma': {
    nome: 'Roma',
    pais: 'Itália',
    lat: 41.9028,
    lon: 12.4964,
    moeda: 'EUR',
    atracoes: [
      'Coliseu',
      'Fontana di Trevi',
      'Panteão',
      'Vaticano',
      'Fórum Romano',
      'Piazza Navona'
    ],
    hoteis: [
      'Hotel de Russie',
      'Rome Cavalieri',
      'Hotel Eden'
    ]
  },
  'milao': {
    nome: 'Milão',
    pais: 'Itália',
    lat: 45.4642,
    lon: 9.1900,
    moeda: 'EUR',
    atracoes: [
      'Duomo de Milão',
      'Galeria Vittorio Emanuele II',
      'Teatro alla Scala',
      'Castelo Sforzesco',
      'Navigli',
      'Pinacoteca di Brera'
    ],
    hoteis: [
      'Armani Hotel Milano',
      'Hotel Principe di Savoia',
      'Excelsior Hotel Gallia'
    ]
  },
  'nova-york': {
    nome: 'Nova York',
    pais: 'EUA',
    lat: 40.7128,
    lon: -74.0060,
    moeda: 'USD',
    atracoes: [
      'Estátua da Liberdade',
      'Central Park',
      'Times Square',
      'Empire State Building',
      'Brooklyn Bridge',
      'Metropolitan Museum'
    ],
    hoteis: [
      'The Plaza Hotel',
      'The Ritz-Carlton',
      'Mandarin Oriental NY'
    ]
  },
  'los-angeles': {
    nome: 'Los Angeles',
    pais: 'EUA',
    lat: 34.0522,
    lon: -118.2437,
    moeda: 'USD',
    atracoes: [
      'Hollywood Sign',
      'Calçada da Fama',
      'Santa Monica Pier',
      'Griffith Observatory',
      'Venice Beach',
      'Universal Studios'
    ],
    hoteis: [
      'The Beverly Hills Hotel',
      'Hotel Bel-Air',
      'The Ritz-Carlton LA'
    ]
  },
  'amsterda': {
    nome: 'Amsterdã',
    pais: 'Holanda',
    lat: 52.3676,
    lon: 4.9041,
    moeda: 'EUR',
    atracoes: [
      'Museu Van Gogh',
      'Casa de Anne Frank',
      'Vondelpark',
      'Rijksmuseum',
      'Canais de Amsterdã',
      'Jordaan'
    ],
    hoteis: [
      'W Amsterdam',
      'Pulitzer Amsterdam',
      'Conservatorium Hotel'
    ]
  },
  'sydney': {
    nome: 'Sydney',
    pais: 'Austrália',
    lat: -33.8688,
    lon: 151.2093,
    moeda: 'AUD',
    atracoes: [
      'Ópera de Sydney',
      'Harbour Bridge',
      'Bondi Beach',
      'Darling Harbour',
      'The Rocks',
      'Royal Botanic Gardens'
    ],
    hoteis: [
      'Park Hyatt Sydney',
      'Four Seasons Hotel',
      'The Darling'
    ]
  },
  'singapura': {
    nome: 'Singapura',
    pais: 'Singapura',
    lat: 1.3521,
    lon: 103.8198,
    moeda: 'SGD',
    atracoes: [
      'Gardens by the Bay',
      'Marina Bay Sands SkyPark',
      'Sentosa',
      'Merlion Park',
      'Chinatown',
      'Orchard Road'
    ],
    hoteis: [
      'Marina Bay Sands',
      'Raffles Hotel',
      'The Fullerton Hotel'
    ]
  },
  'barcelona': {
    nome: 'Barcelona',
    pais: 'Espanha',
    lat: 41.3851,
    lon: 2.1734,
    moeda: 'EUR',
    atracoes: [
      'Sagrada Família',
      'Parque Güell',
      'La Rambla',
      'Casa Batlló',
      'Camp Nou',
      'Montjuïc'
    ],
    hoteis: [
      'Hotel Arts Barcelona',
      'Majestic Hotel & Spa',
      'W Barcelona'
    ]
  },
  'rio-de-janeiro': {
    nome: 'Rio de Janeiro',
    pais: 'Brasil',
    lat: -22.9068,
    lon: -43.1729,
    moeda: 'BRL',
    atracoes: [
      'Cristo Redentor',
      'Pão de Açúcar',
      'Praia de Copacabana',
      'Maracanã',
      'Lapa',
      'Jardim Botânico'
    ],
    hoteis: [
      'Copacabana Palace',
      'Hotel Fasano',
      'Miramar by Windsor'
    ]
  },
  'sao-paulo': {
    nome: 'São Paulo',
    pais: 'Brasil',
    lat: -23.5505,
    lon: -46.6333,
    moeda: 'BRL',
    atracoes: [
      'Avenida Paulista',
      'Parque Ibirapuera',
      'Catedral da Sé',
      'MASP',
      'Mercado Municipal',
      'Beco do Batman'
    ],
    hoteis: [
      'Hotel Unique',
      'Renaissance São Paulo',
      'Palácio Tangará'
    ]
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

// Função para carregar clima usando WeatherAPI
async function carregarClima(lat, lon, nomeDestino) {
  const API_KEY = 'a87a79d907724bfdb63191919252909';
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${lat},${lon}&lang=pt`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.current) {
      const temperatura = Math.round(data.current.temp_c);
      const descricao = data.current.condition.text;
      const icone = data.current.condition.icon;
      
      return `
        <div style="display: flex; align-items: center; gap: 15px; padding: 15px; background: #f8f9fa; border-radius: 10px;">
          <img src="https:${icone}" alt="${descricao}" style="width: 64px;">
          <div>
            <p style="font-size: 2rem; font-weight: bold; margin: 0;">${temperatura}°C</p>
            <p style="margin: 5px 0 0 0; color: #666;">${descricao}</p>
            <p style="margin: 5px 0 0 0; color: #999; font-size: 0.85rem;">
              Sensação térmica: ${Math.round(data.current.feelslike_c)}°C
            </p>
          </div>
        </div>
      `;
    }
  } catch (error) {
    console.error('Erro ao carregar clima:', error);
  }
  
  return '<p style="color: #999;">Clima não disponível</p>';
}

// Função para carregar câmbio
async function carregarCambio(moeda) {
  if (moeda === 'BRL') {
    return '1 BRL = R$ 1,00';
  }
  
  try {
    const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${moeda}-BRL`);
    const data = await response.json();
    const chave = `${moeda}BRL`;
    
    if (data[chave]) {
      const valor = parseFloat(data[chave].bid).toFixed(2);
      return `1 ${moeda} = R$ ${valor}`;
    }
  } catch (error) {
    console.error('Erro ao carregar câmbio:', error);
  }
  
  return 'Câmbio não disponível';
}

// Função principal
document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const destinoSlug = urlParams.get('destino') || 'paris';
  
  const destino = destinosInfo[destinoSlug];
  
  if (!destino) {
    document.querySelector('.container').innerHTML = `
      <div style="text-align: center; padding: 50px;">
        <h2>Destino não encontrado</h2>
        <button onclick="window.location.href='index.html'" class="voltar-btn">
          Voltar para Home
        </button>
      </div>
    `;
    return;
  }
  
  // Atualizar título da página
  document.title = `${destino.nome} - TripMind`;
  document.getElementById('local').textContent = destino.nome;
  
  // Renderizar atrações
  const atracoesHTML = destino.atracoes.map(atracao => `
    <div>
      <i class="fa-solid fa-circle-check" style="color: #6a1b9a;"></i>
      <span>${atracao}</span>
    </div>
  `).join('');
  document.getElementById('atracoes').innerHTML = atracoesHTML;
  
  // Renderizar hotéis
  const hoteisHTML = destino.hoteis.map(hotel => `
    <li>
      <span><i class="fa-solid fa-hotel"></i> ${hotel}</span>
      <i class="fa-solid fa-arrow-right" style="color: #6a1b9a;"></i>
    </li>
  `).join('');
  document.getElementById('hoteis').innerHTML = hoteisHTML;
  
  // Renderizar mapa
  const mapaHTML = `
    <iframe
      src="https://www.google.com/maps?q=${destino.lat},${destino.lon}&output=embed&z=12"
      width="100%"
      height="100%"
      style="border:0; border-radius: 10px;"
      allowfullscreen=""
      loading="lazy">
    </iframe>
  `;
  document.getElementById('localizacao').innerHTML = mapaHTML;
  
  // Carregar clima
  const climaSection = document.querySelector('.card-detalhe:nth-child(2) .lista-atracoes');
  const climaHTML = await carregarClima(destino.lat, destino.lon, destino.nome);
  climaSection.innerHTML = climaHTML;
  
  // Carregar câmbio
  const cambioHTML = await carregarCambio(destino.moeda);
  const cambioDiv = document.getElementById('cambio');
  if (cambioDiv) {
    cambioDiv.innerHTML = `
      <div style="text-align: center; padding: 15px 0; border-top: 1px solid #34495e; margin-top: 20px;">
        <p style="margin: 0;"><i class="fa-solid fa-dollar-sign"></i> ${cambioHTML}</p>
      </div>
    `;
  }
});