const today = dayjs();
const searchInputEl = $("#searchInput");
const searchBtn = $("#searchBtn");
const currentCityEl = $("#currentCity");
const currentIconEl = $("#currentIcon");
const currentDateEl = $('#currentDate');
const currentTempEl = $("#temp");
const currentHumidityEl = $("#humidity");
const currentWindSpeedEl = $("#windSpeed");
const currentUviEl = $("#uvIndex");

const MAX_HISTORY_ITEMS = 10;

let lastSearchedCity = '';

// Event listener for #searchHistory li
$(".list-group-item").click((event) => {
    handleSearch($(event.target).text());
});

// Event listener for searchBtn
searchBtn.click(() => {
    let cityName = searchInputEl.val();
    handleSearch(cityName);
    searchInputEl.val(''); // Clear search field
});

function handleSearch(cityName) {
    // update lastSearchedCity in localStorage
    // updateSearchHistory(cityName);
    getCurrentWeather(cityName);
    getForecastWeather(cityName);
};

function updateSearchHistory(cityName) {
    // Create new <>button.list-group-item.list-group-item-action
    // Add 'cityName' text
    // Prepend to #searchHistory div

    // IF $('#searchHistory').children().length > maxHistoryItems
    // THEN pop last element of children array
};

function getCurrentWeather(cityName) {
    const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=d805afa702cbd0d0da430b05b58308fc`
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then((response) => {
        const city = response.name;
        const icon = getIconElement(response.weather[0].icon);
        const temp = response.main.temp;
        const humidity = response.main.humidity;
        const windSpeed = response.wind.speed;
        const lat = response.coord.lat;
        const lon = response.coord.lon;

        currentCityEl.text(city);
        currentIconEl.html(icon);
        currentDateEl.text(today.format('M/DD/YYYY'));
        currentTempEl.text(temp);
        currentHumidityEl.text(humidity);
        currentWindSpeedEl.text(windSpeed);
        getUVIndex(lat, lon);
    });
};

function getForecastWeather(cityName) {
    const queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=5&units=imperial&appid=d805afa702cbd0d0da430b05b58308fc`;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then((response) => {
        const daysArray = response.list
        // FOR loop over API data array:
        for (let i = 0; i < daysArray.length; i++) {

            const date = today.add(i + 1, 'day').format('M/DD');
            const icon = getIconElement(daysArray[i].weather[0].icon);
            const temp = daysArray[i].main.temp;
            const humidity = daysArray[i].main.humidity;

            // $(`#day-${index}`).append( {
            // // date: <h5> + <br>
            // // icon: getIconElement(code)
            // // temp: <p>
            // // humidity: <p> } )
        }
    });
};

function getIconElement(code) {
    const iconUrl = `http://openweathermap.org/img/wn/${code}@2x.png`;
    return `<img src="${iconUrl}">`
};

function getUVIndex(lat, lon) {
    const queryURL = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=d805afa702cbd0d0da430b05b58308fc`;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then((response) => {
        const uvi = response.value;
        currentUviEl.text(uvi);
        colorUVIndex(uvi);
    });
};

function colorUVIndex(value) {
    // Values based on EPA UV Index scale
    if (value < 3) {
        currentUviEl.attr('class', 'btn btn-sm btn-success')
    } else if (value < 7) {
        currentUviEl.attr('class', 'btn btn-sm btn-warning')
    } else {
        currentUviEl.attr('class', 'btn btn-sm btn-danger')
    }
}

// My API key: 'd805afa702cbd0d0da430b05b58308fc'
