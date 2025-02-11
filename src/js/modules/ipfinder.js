const refs = {
  formEl: document.querySelector('.js-location-form'),
  cardInfo: document.querySelector('.js-ip-form'),
};

//!======================================================
function getIpInfo(userIp) {
  const BASE_URL = 'https://ip-geolocation-ipwhois-io.p.rapidapi.com';
  const END_POINT = '/json/';
  const params = new URLSearchParams({
    ip: userIp,
    pageSize: 10,
  });
  const headers = {
    'x-rapidapi-key': '9b3ff61931msh1b42d77d34e33dap1c29cajsn3d3169e0e2f4',
    'x-rapidapi-host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
  };

  const url = `${BASE_URL}${END_POINT}?${params}`;

  return fetch(url, { headers }).then(res => res.json());
}
//!======================================================

refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const userIp = e.target.elements.userip.value;

  getIpInfo(userIp).then(renderIp).catch();
});

//!======================================================

function renderIp(arr) {
  const markup = `
    <div class="info-item">
    <img
      class="flag"
      src="${country_flag}"
      alt="Flag of ${country}"
    />
    <span class="info-label">Country:</span>
    <span class="info-value">${country}</span>
  </div>
  <div class="info-item">
    <span class="info-label">IP Address: </span>
    <span class="info-value">${ip}</span>
  </div>
  <div class="info-item">
    <span class="info-label">City: </span> <span class="info-value">${city}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Timezone: </span>
    <span class="info-value">${timezone}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Currency:</span>
    <span class="info-value">${currency}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Currency Rate:</span>
    <span class="info-value">${currency_rates}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Completed Requests:</span>
    <span class="info-value">${completed_requests}</span>
  </div>
  <div class="info-item">
    <span class="info-label">Google Maps:</span>
    <a href="https://www.google.com.ua/maps/@${latitude},${longitude},13.18z?entry=ttu"><span class="info-value">Тицяй</span></a>
  </div>`;

  refs.cardInfo.innerHTML = markup;
}

// mysite.com/?test=awdawd&awd=gdrg&awda=sefgd&
