/////////////////////
//////global vars////
/////////////////////

var searchButton = $("#search")
var citySearch = $('#city_search')

var cityName = $('#cityName')
var cityTemp = $("#temp")
var cityWind = $("#wind")
var cityHumidity = $("#humidity")
var cityUV = $("#uv")
var cityEmoji = $('#emoji')

var history = $('#history')

var previousSearches = $('.previous')

var previousCities = $('#previous_cities')

var previousSearchStrings = []

var today = new Date().toLocaleDateString()

var weatherAPI = "1dee9ec087a3948d8a3c15a7bd25d92c" //my generated API key



var day1 = $('#day1')
var day2 = $('#day2')
var day3 = $('#day3')
var day4 = $('#day4')
var day5 = $('#day5')

var day1_temp = $('#day1_temp')
var day2_temp = $('#day2_temp')
var day3_temp = $('#day3_temp')
var day4_temp = $('#day4_temp')
var day5_temp = $('#day5_temp')

var day1_wind = $('#day1_wind')
var day2_wind = $('#day2_wind')
var day3_wind = $('#day3_wind')
var day4_wind = $('#day4_wind')
var day5_wind = $('#day5_wind')

var day1_humid = $('#day1_humid')
var day2_humid = $('#day2_humid')
var day3_humid = $('#day3_humid')
var day4_humid = $('#day4_humid')
var day5_humid = $('#day5_humid')

var day1_emoji = $('#day1_emoji')
var day2_emoji = $('#day2_emoji')
var day3_emoji = $('#day3_emoji')
var day4_emoji = $('#day4_emoji')
var day5_emoji = $('#day5_emoji')


function getcurrentWeather() {
  var city = citySearch.val()
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + weatherAPI)
      .then(function (response) {
          console.log(response)
        return response.json();
      })
      .then(function (data) {
          console.log(data)
          cityName.text(data.name + " " + data.sys.country + " " + today)
          cityTemp.text("Temp " + data.main.temp + " °F")
          cityWind.text("Wind " + data.wind.speed + " MPH")
          cityHumidity.text(data.main.humidity + " % humidity")
          var imageTest = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
          cityEmoji.empty()
          cityEmoji.append("<img src='"+ imageTest + "'></img>")

          previousSearchStrings.push(data.name)

          console.log(previousSearchStrings)


           var newLi = $("<button>").text(data.name)
           newLi.attr("style", "background-color: blue; color: white; border-radius: 4px; border: none; margin-left: 5px;")
           newLi.attr('id', 'previous_cities')
           previousSearches.append(newLi)



            localStorage.setItem("previous_searches", previousSearchStrings)

        });}


  function getForecast() {
    var city = citySearch.val()
      fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial" + "&appid=" + weatherAPI)
        .then(function (response) {

          return response.json();
        })
        .then(function (data) {
            console.log(data)
            day1.text(data.list[3].dt_txt)
            day2.text(data.list[11].dt_txt)
            day3.text(data.list[19].dt_txt)
            day4.text(data.list[27].dt_txt)
            day5.text(data.list[35].dt_txt)

            day1_temp.text(data.list[3].main.temp + " °F")
            day2_temp.text(data.list[11].main.temp + " °F")
            day3_temp.text(data.list[19].main.temp + " °F")  
            day4_temp.text(data.list[27].main.temp + " °F")  
            day5_temp.text(data.list[35].main.temp + " °F")  

            day1_wind.text(data.list[3].wind.speed + " MPH")
            day2_wind.text(data.list[11].wind.speed + " MPH")
            day3_wind.text(data.list[19].wind.speed + " MPH")
            day4_wind.text(data.list[27].wind.speed + " MPH")
            day5_wind.text(data.list[35].wind.speed + " MPH")

            day1_humid.text(data.list[3].main.humidity + " % humidity")
            day2_humid.text(data.list[11].main.humidity + " % humidity")
            day3_humid.text(data.list[19].main.humidity + " % humidity")
            day4_humid.text(data.list[27].main.humidity + " % humidity")
            day5_humid.text(data.list[35].main.humidity + " % humidity")

            var imageTest1 = "https://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + ".png"
            day1_emoji.empty()
            day1_emoji.append("<img src='"+ imageTest1 + "'></img>")

            var imageTest2 = "https://openweathermap.org/img/wn/" + data.list[11].weather[0].icon + ".png"
            day2_emoji.empty()
            day2_emoji.append("<img src='"+ imageTest2 + "'></img>")

            var imageTest3 = "https://openweathermap.org/img/wn/" + data.list[19].weather[0].icon + ".png"
            day3_emoji.empty()
            day3_emoji.append("<img src='"+ imageTest3 + "'></img>")

            var imageTest4 = "https://openweathermap.org/img/wn/" + data.list[27].weather[0].icon + ".png"
            day4_emoji.empty()
            day4_emoji.append("<img src='"+ imageTest4 + "'></img>")


            var imageTest5 = "https://openweathermap.org/img/wn/" + data.list[35].weather[0].icon + ".png"
            day5_emoji.empty()
            day5_emoji.append("<img src='"+ imageTest5 + "'></img>")


          });}


searchButton.on('click', function (e) {
  e.preventDefault()
    getcurrentWeather()
    getForecast()

})

  
function init () {


    var testget = localStorage.getItem("previous_searches")

    console.log(testget)



}

init()
