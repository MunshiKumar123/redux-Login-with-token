import React, { memo, useCallback } from "react";
import { Input, Button } from '../child'
import { loginFormData, LoginUser } from '../redux/Action/LoginAction'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TOKEN_LOGIN } from '../redux/type/type'



const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const signIn = useSelector(state => state.login)

    const loginData = () => {
        let data = {
            email: signIn.email,
            password: signIn.password,
        }
        dispatch(LoginUser(data)).then((resp) => {
            localStorage.setItem(TOKEN_LOGIN, resp?.data?.token)
            navigate('/home')
        }).catch((error) => {
            console.log('error', error);
        })

    }

    return (
        <main>
            <section className="col-sm-4 bg-primary p-3">
                <h4 className="text-white">Login</h4>
                <Input
                    type='email'
                    placeholder='email'
                    className='form-control'
                    onChange={(e) => dispatch(loginFormData({ prop: 'email', value: e.target.value }))}

                />
                <Input
                    type='password'
                    placeholder='password'
                    className='form-control mt-2'
                    onChange={(e) => dispatch(loginFormData({ prop: 'password', value: e.target.value }))}
                />
                <Button className='btn btn-success btn-sm mt-1' onClick={loginData}> SignIn </Button>
            </section>
        </main>
    )
}

export default memo(Login);