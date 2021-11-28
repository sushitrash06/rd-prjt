// import {
//     LOGIN,
//     LOGIN_SUCCESS,
//     LOGIN_FAIL,
// } from '../ActionType';
// import {api} from '../../Api/index';
// // import {LOCAL_STORAGE_KEY} from '../../../config/index';



// const storedCreds = JSON.parse(localStorage.getItem("DMDSHBTOKEN"));
// const token = storedCreds?.token;


// const asyncLocalStorage = {
//     setItem: async function (key, value) {
//         await null;
//         return localStorage.setItem(key, value);
//     },
//     getItem: async function (key) {
//         await null;
//         return localStorage.getItem(key);
//     }
// };

// export const login = (payload) => dispatch => {
//     dispatch({
//         type: LOGIN
//     });

//     const request = api.login(payload);

//     return request.then(
//         response =>dispatch(loginSuccess(response.data)),
//         err => dispatch(loginFail(err))
//     );
// };

// export const loginSuccess = ({
//     data
// }) => dispatch => {
//     return Promise.all([
//         asyncLocalStorage.setItem('DMDSHBTOKEN',JSON.stringify(data)),
//         dispatch
//     ])
//     .then(dispatch => {
//     // callback
//     // console.log('login sukses')
//     return dispatch[1]({
//         type: LOGIN_SUCCESS,
//         payload: data
//     })
// })
//     // localStorage.setItem("DMDSHBTOKEN", JSON.stringify(data));
// }

// export const loginFail = (data) => dispatch => {
//     return dispatch({
//         type: LOGIN_FAIL,
//         payload: data
//     })
// }
