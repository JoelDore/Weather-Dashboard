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
$("#searchBtn").click((event) => {
    handleSearch($(event.target).text());
});

function handleSearch(cityString) {
    // update lastSearchedCity in localStorage
    updateSearchHistory(cityString);
    getCurrent(cityString);
    getForecast(cityString);
};

function updateSearchHistory(cityString) {
    // Create new <>button.list-group-item.list-group-item-action
    // Add 'cityString' text
    // Prepend to #searchHistory div

    // IF $('#searchHistory').children().length > maxHistoryItems
    // THEN pop last element of children array
};

function getCurrent(cityString) {
    // $.ajax - Get current data
    // getIcon(code) --> img tag src
    // Update #currentCityIcon: $('#currentCityIcon').prepend('City <img> ');
    // Update #temp text
    // Update #humidity text
    // Update #windSpeed text
    // getUVIndex(lat,lon)
};

function getForecast(cityString) {
    // $.ajax - Get 5-day forecast data
    // FOR loop over API data array

    // $(`#day-${index}`).append( {
    // // date: <h5> today.add(i+1, 'day').format(M/DD), <br>
    // // icon: <img> src = getIcon(code),
    // // temp: <p>,
    // // humidity: <p> } )
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