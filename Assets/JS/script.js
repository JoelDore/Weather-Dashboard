let today = dayjs();
let lastSearchedCity = '';
let maxHistoryItems = 10;

// Set date in Current
$('#currentDate').text(today.format('M/DD/YYYY'));


// Event listener for #searchHistory li
$(".list-group-item").click((event) => {
    handleSearch($(event.target).text());
});

// Event listener for searchBtn
$("#searchBtn").click(() => {
    let cityName = $('#searchText').val();
    handleSearch(cityName);
    $('#searchText').val(''); // Clear search field
});

function handleSearch(cityName) {
    // update lastSearchedCity in localStorage
    // updateSearchHistory(cityName);
    getCurrent(cityName);
    getForecast(cityName);
};

function updateSearchHistory(cityName) {
    // Create new <>button.list-group-item.list-group-item-action
    // Add 'cityName' text
    // Prepend to #searchHistory div

    // IF $('#searchHistory').children().length > maxHistoryItems
    // THEN pop last element of children array
};

function getCurrent(cityName) {
    // $.ajax - Get current data
    const queryURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=d805afa702cbd0d0da430b05b58308fc`
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then((response) => {
        // getIcon(code) --> img tag src
        // Update #currentCityIcon: $('#currentCityIcon').prepend('City <img> ');
        // Update #temp text
        // Update #humidity text
        // Update #windSpeed text
        // getUVIndex(lat,lon)
    });
};

function getForecast(cityName) {
    // $.ajax - Get 5-day forecast data
    const queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&cnt=5&units=imperial&appid=d805afa702cbd0d0da430b05b58308fc`;
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then((response) => {
        // FOR loop over API data array:

        // $(`#day-${index}`).append( {
        // // date: <h5> today.add(i+1, 'day').format(M/DD), <br>
        // // icon: <img> src = getIcon(code),
        // // temp: <p>,
        // // humidity: <p> } )
    });
};

function getIcon(code) {
    // get URL from icon code
    // return URL
};

function getUVIndex(lat, lon) {
    // get value
    // update #uvIndex text
    // add appropriate color class
};

// My API key: 'd805afa702cbd0d0da430b05b58308fc'
