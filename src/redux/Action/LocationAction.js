import axios from "axios";
import { FORM_DATA, LOCATION_DATA_GET, TOKEN_LOGIN } from "../type/type";



export const formData = ({ prop, value }) => {
    return {
        type: FORM_DATA,
        payload: { prop, value },
    };
};
export const postLocation = (data) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const token = localStorage.getItem(TOKEN_LOGIN)
            axios.post('http', data, {
                headers: {
                    'x-access-token': token,
                    'Content-Type': 'application/json'
                }
            })
                .then((data) => {
                    resolve(data)
                })
                .catch((error) => {
                    let errorMessage = error.message;
                    reject(errorMessage)
                });
        });
    };
}

export const getLocation = (data) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            const token = localStorage.getItem(TOKEN_LOGIN)
            axios.get('http', {
                headers: {
                    'x-access-token': token,
                    'Content-Type': 'application/json'
                }
            })
                .then((data) => {
                    dispatch({ type: LOCATION_DATA_GET, payload: data.data })
                    resolve(data)
                })
                .catch((error) => {
                    let errorMessage = error.message;
                    reject(errorMessage)
                });
        });
    };
}
