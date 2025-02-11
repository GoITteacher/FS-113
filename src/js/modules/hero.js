const refs = {
  formEl: document.querySelector('.js-hero-form'),
  heroEl: document.querySelector('.js-hero-container'),
};

//!======================================================

// ЗАПИТ НА СЕРВЕР
// РЕНДЕР РЕЗУЛЬТАТУ
// ПРОСЛУХОВУВАЧ

//!======================================================
function searchHero(superhero) {
  const BASE_URL = 'https://superhero-search.p.rapidapi.com';
  const END_POINT = '/api/';

  const params = new URLSearchParams({
    hero: superhero,
  });

  const headers = {
    'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'x-rapidapi-host': 'superhero-search.p.rapidapi.com',
  };

  const url = `${BASE_URL}${END_POINT}?${params}`;
  return fetch(url, { headers }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error('Sorry');
    }
  });
}

//!======================================================
refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const userValue = e.target.elements.query.value;
  searchHero(userValue)
    .then(renderHero)
    .catch(() => {
      console.log('');
    });
  e.target.reset();
});
//!======================================================

function heroTemplate(hero) {
  const { appearance, biography, images, name, powerstats } = hero;
  return `<div class="hero-card card">
  <div class="image-container">
    <img
      src="${images.lg}"
      alt="#"
      class="hero-image"
    />
  </div>
  <div class="hero-body">
    <h4 class="hero-name">${name}</h4>

    <div class="hero-powerstats">
      <p class="hero-bio">FullName - ${biography.fullName}</p>
      <p class="hero-bio">Publisher - ${biography.publisher}</p>
      <p class="hero-bio">Alignment - ${biography.alignment}</p>
      <p class="hero-bio">Gender - ${appearance.gender}</p>
      <p class="hero-bio">Race - ${appearance.race}</p>
    </div>

    <div class="hero-powerstats">
      <span>Power: ${powerstats.power}</span>
      <span>Strength: ${powerstats.strength}</span>
      <span>Speed: ${powerstats.speed}</span>
      <span>Combat: ${powerstats.combat}</span>
    </div>
  </div>
</div>`;
}

function renderHero(hero) {
  const markup = heroTemplate(hero);
  refs.heroEl.insertAdjacentHTML('afterbegin', markup);
}
