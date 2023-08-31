// this is js fetch 

const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=';
// 53.1%2C-0.13
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f66624530cmshd7e361d254eb304p19c792jsncf3ac59211eb',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const  async_get_weather = async (city)=>{
	try {
		const response = await fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=' + city, options)
		const result = await response.json();
		console.log(result)

		
		const submit = document.getElementById("submit_btn")
	submit.addEventListener("click", ()=>{
		get_weather((city_search.value))
	});
		
		const get_weather = (city) => {
			
			let cityName = document.getElementById("city_search")
		cityName.innerText = city
			// display in celcius 
			let celcius = result.current.temp_c
			const cityElement = document.getElementById("temp_c");
			cityElement.innerText = celcius + "°C";

		// display in fahrenheit
	
			let fahrenheit = result.current.temp_f
			const fElement = document.getElementById("temp_f")
			fElement.innerText = fahrenheit + "°F"
		
		// display how will be the weather 

			let displayWeather = result.current.condition.text
			const weather_day = document.getElementById("day_weather")
			weather_day.innerText = displayWeather

		// display wind speed 

			let wind_speed_kph = result.current.wind_kph
			let wind_speed_mph = result.current.wind_mph
			const kph_wind = document.getElementById("wind_kph")
			kph_wind.innerText = wind_speed_kph + " KPH "
			const mph_wind = document.getElementById("wind_mph")
			mph_wind.innerText = wind_speed_mph + " MPH "

		}
		
		// submit btn 

		
	
} 
	catch (error) {
		console("this is the error");
	}





}

async_get_weather()