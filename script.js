const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=lakhimpur%20assam%20india%20';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f66624530cmshd7e361d254eb304p19c792jsncf3ac59211eb',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};
const  async_get_weather = async ()=>{
	try {
		const response = await fetch(url, options)
		const result = await response.json();

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

	} catch (error) {
		console("this is the error");
	}
}
async_get_weather()
