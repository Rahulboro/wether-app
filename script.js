const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=lakhimpur%20assam%20india%20';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f66624530cmshd7e361d254eb304p19c792jsncf3ac59211eb',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

async function async_get_weather(){
	try {
		const response = await fetch(url, options)
		const result = await response.text();
		console.log(result);
		let noida = document.getElementById("noida_id")
	} catch (error) {
		console.error(error);
	}
}