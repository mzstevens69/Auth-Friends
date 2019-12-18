import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'


export const Login = props => {
    const [data, setData] = useState({
        username: '',
        password: ''
    })


const handleChange = e => {
    setData({
        ...data,
        [e.target.name]: e.target.value
    })
}
    
const handleSubmit = e => {
    e.preventDefault();
    console.log('the data', data);
    axiosWithAuth()
    .post('/login', data)
    .then(res => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/dash')

    })
    .catch(err => console.log(err))
   }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    name='username'
                    value={data.username}
                    onChange={handleChange}
                    placeholder='Username'
                    />
                    <br/>
                    <input
                        type='password'
                        name='password'
                        value={data.password}
                        onChange={handleChange}
                        placeholder='Password'
                    />
                    <br/>
                    <button type='submit'>Log In</button>
                    
            </form>
        </div>
    )
    
}
