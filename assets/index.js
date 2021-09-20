/////////////////////
//////global vars////
/////////////////////


var weatherDisplay = $('#cityName')

var weatherAPI = "1dee9ec087a3948d8a3c15a7bd25d92c" //my generated API key

var city = "San Diego" //For selecting a city










function getApi() {
  
    fetch(    "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + weatherAPI)
      .then(function (response) {
          console.log(response)
        return response.json();
      })
      .then(function (data) {
          console.log(data)
          console.log(data.name)
          console.log(weatherDisplay)
          weatherDisplay.textContent = data.name

        });
  }

getApi()

