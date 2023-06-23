
// const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'f66624530cmshd7e361d254eb304p19c792jsncf3ac59211eb',
// 		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
// 	}
// };


// async function async(){

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }
// }





// const options = {
//   method: 'GET',
//   headers: {
//     'X-RapidAPI-Key': 'b45e96323fmshfSe4bc50d3b8a%0pled1djsnfb21lcdedeb8',
//     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//   }
// };

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/vl/weather?city=Seattle',)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));





const url = 'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly?lat=35.5&lon=-78.5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f66624530cmshd7e361d254eb304p19c792jsncf3ac59211eb',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

async function data(params) {
	
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
	console.error(error);
}