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
		// let celcius = result.current.temp_c
		// const cityElement = document.getElementById("name_city");
		// cityElement.innerText = celcius + "°C";
		
		

	} catch (error) {
		console("this is the error");
	}
}
async_get_weather()
