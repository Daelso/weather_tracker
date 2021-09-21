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

var today = new Date().toLocaleDateString()

var weatherAPI = "1dee9ec087a3948d8a3c15a7bd25d92c" //my generated API key

var city //For selecting a city










function getApi() {
  
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + weatherAPI)
      .then(function (response) {
          console.log(response)
        return response.json();
      })
      .then(function (data) {
          console.log(data)
          console.log(data.name)
          cityName.text(data.name + " " + today)
          cityTemp.text("Temp " + data.main.temp + " °F")
          cityWind.text("Wind " + data.wind.speed + " MPH")
          cityHumidity.text(data.main.humidity + " % humidity")



        });
  }



searchButton.on('click', function () {
    console.log("test")
    city = citySearch.val()
    console.log(city)
    getApi()



})