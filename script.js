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
		console.log(result.location)
			// let celcis = document.getElementById("name_city").innerHTML = result([2,3])
		


	} catch (error) {
		console.error(error);
	}
}















// import axios from "axios";


// const options = {
//   method: 'GET',
//   url: 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather',
//   params: {city: 'Seattle'},
//   headers: {
//     'X-RapidAPI-Key': 'f66624530cmshd7e361d254eb304p19c792jsncf3ac59211eb',
//     'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
//   }
// };
// const data_coming = async()=>{
// 	try {
// 		const response = await axios.request(options);
// 		console.log(response.data);
// 	} catch (error) {
// 		console.error(error);
// 	}
// }