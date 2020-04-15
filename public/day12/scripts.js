(() => {
  async function getAirQuality({ city, state, country }) {
    const response = await fetch(
      `./data/mock-${city}-${state}-${country}.json`
    );
    const {
      data: { current },
    } = await response.json();
    const { pollution, weather } = current;
    return {
      aqi: pollution.aqius,
      temperature: weather.tp,
      humidity: weather.hu,
      wind: weather.ws,
    };
  }

  function displayAirQuality({
    city,
    state,
    country,
    aqi,
    temperature,
    humidity,
    wind,
  }) {
    const cityElem = document.querySelector('.city');
    const stateCountryElem = document.querySelector('.state-country');
    const aqiElem = document.querySelector('.aqi > h1');
    const temperatureElem = document.querySelector('.temperature');
    const humidityElem = document.querySelector('.humidity');
    const windElem = document.querySelector('.wind');

    cityElem.innerText = city;
    stateCountryElem.innerText = `${state}, ${country}`;
    aqiElem.innerText = aqi;
    temperatureElem.innerText = `Temp: ${temperature}`;
    humidityElem.innerText = `Humidity: ${humidity}%`;
    windElem.innerText = `Wind: ${wind}`;
  }

  function setAirQualityColor(aqi) {
    if (aqi <= 50) {
      document.documentElement.style.setProperty(
        '--current-aqi-color',
        'var(--good-aqi-color)'
      );
    } else if (aqi <= 100) {
      document.documentElement.style.setProperty(
        '--current-aqi-color',
        'var(--medium-aqi-color)'
      );
    } else {
      document.documentElement.style.setProperty(
        '--current-aqi-color',
        'var(--bad-aqi-color)'
      );
    }
  }

  async function getCity(city) {
    let state = 'Bangkok';
    let country = 'Thailand';
    if (city == 'Bangbuathong') {
      state = 'Nonthaburi';
    }
    const { aqi, temperature, humidity, wind } = await getAirQuality({
      city,
      state,
      country,
    });
    return { aqi, temperature, humidity, wind, city, state, country };
  }
  async function setup() {
    const index = document.querySelector('#country').selectedIndex
    const options = document.querySelector('#country').options
    const {
      aqi,
      temperature,
      humidity,
      wind,
      city,
      state,
      country,
    } = await getCity(options[index].value);
    displayAirQuality({
      city,
      state,
      country,
      aqi,
      temperature,
      humidity,
      wind,
    });
    setAirQualityColor(aqi);
  }
  async function run() {
    setup()
    const selectElem = document.querySelector('#country');
    selectElem.addEventListener('change', async (event) => {
      const {
        aqi,
        temperature,
        humidity,
        wind,
        city,
        state,
        country,
      } = await getCity(event.target.value);
      displayAirQuality({
        city,
        state,
        country,
        aqi,
        temperature,
        humidity,
        wind,
      });
      setAirQualityColor(aqi);
    });
  }
  run();
})();
