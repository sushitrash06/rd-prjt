// import axios from 'axios';
// import { BASE_URL } from '../env/index';
// export const api = {
// 	login,
// }

// const storedCreds = JSON.parse(localStorage.getItem("DMDSHBTOKEN"));
// const token = storedCreds?.token;

// // console.log(token,'ini token di awal')
// function clearStoredCreds() {
// 	localStorage.removeItem("DMDSHBTOKEN");
// }
// // console.log(token)

// const defaultHeaders = {
// 	'Content-Type': 'application/json',
// 	'Authorization':'Bearer '+ token
// };

// // console.log('lalalalala')
// async function login(data) {
// 	// console.log('login')
// 	try {
// 		const url = `${BASE_URL}login`;
// 		const headers = defaultHeaders;
// 		const response = await axios({
// 			method: 'POST',
// 			url,
// 			data,
// 			headers,
// 		});
// 		return response;
// 	} catch (error) {
// 		if (error.response.status === 401) {
// 			//clearStoredCreds();
// 		}
// 		return Promise.reject(error.response);
// 	}
// }