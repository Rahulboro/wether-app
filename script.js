
const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f66624530cmshd7e361d254eb304p19c792jsncf3ac59211eb',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};


async function asyncCall(){

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

}


