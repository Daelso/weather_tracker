/////////////////////
//////global vars////
/////////////////////


var weatherDisplay = $('#weather-display')

var weatherAPI = "1dee9ec087a3948d8a3c15a7bd25d92c" //my generated API key

var city = "" //For selecting a city










function getApi() {
    var requestUrl = 'http://api.openweathermap.org/data/2.5/onecall?appid=1dee9ec087a3948d8a3c15a7bd25d92c&lang=en$id=1850144'
  
    fetch(requestUrl)
      .then(function (response) {
          console.log(response)
        return response.json();
      })
      .then(function (data) {
          console.log(data)
      });
  }

getApi()