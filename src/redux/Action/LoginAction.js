import axios from "axios";
import { LOGIN_FORM_DATA } from '../type/type'
import { toast } from 'react-toastify';

export const loginFormData = ({ prop, value }) => {
    return {
        type: LOGIN_FORM_DATA,
        payload: { prop, value },
    };
};

export const LoginUser = (data) => {
    return (dispatch) => {
        return new Promise((resolve, reject) => {

            axios.post('http', data)
                .then((data) => {
                    toast.success("Login Successfully");
                    resolve(data)

                })
                .catch((error) => {
                    let errorMessage = error.message;
                    reject(errorMessage)
                });
        });
    };
}
