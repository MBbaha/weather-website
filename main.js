const apikey = '852d2989e592795c777c38100e639401';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon')


async function checkWeather(city) {
    const response = await fetch(apiUrl +city+ `&appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector('.error').style.display = 'block';
        document.querySelector('.weather').style.display = 'none';
    } else {
        let data = await response.json();


    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp ) +'°C';
    document.querySelector('.humidity').innerHTML = data.main.humidity +'%';
    document.querySelector('.wind').innerHTML = data.wind.speed + ' km/h';


    if(data.weather[0].main == 'Clouds') {
        weatherIcon.src = 'clouds.png';
      
    }
    else  if(data.weather[0].main == 'Clear') {
        weatherIcon.src = 'clear.png';
      
    }
    else  if(data.weather[0].main == 'Rain') {
        weatherIcon.src = 'rain.png';
       
    }
    else  if(data.weather[0].main == 'Snow') {
        weatherIcon.src ='snow.png';
        
    }
    else  if(data.weather[0].main == 'drizzle') {
        weatherIcon.src = 'drizzle.png';
        
    }
    else  if(data.weather[0].main == 'Mist') {
        weatherIcon.src = 'Mist.png';
        
    }
    document.querySelector('.weather').style.display = 'block'
    document.querySelector('.error').style.display = 'none';
   
}
    }

    

searchBtn.addEventListener('click', () => {
    checkWeather(searchBox.value);
    
})


