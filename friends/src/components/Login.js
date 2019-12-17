import React from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'


class Login extends React.Component {
    state = {
        login: {
            username: '',
            password: ''
        },
        
    }

handleChange = e => {
    this.setState({
        login: {
            ...this.state.login, [e.target.name]: e.target.value
        }
    }) 
}
logn = e => {
    e.preventDefault();
    this.setState({
        isLoading: true
    })
    axiosWithAuth()
    .post('/login', this.state.credentials)
    .then(res => {
        localStorage.setItem('token', res.data.payload)
        this.PaymentResponse.history.push('/protected')

    })
    .catch(err => console.log(err))
   }
  render() {
    return(
        <div>
            <form onSubmit={this.logn}>
                <input
                    type='text'
                    name='username'
                    value={this.state.login.username}
                    onChange={this.handleChange}
                    placeholder='username'
                    />
                    <i
                        type='password'
                        name='password'
                        value={this.state.login.password}
                        onChange={this.handleChange}
                        placeholder='password'
                    />
                    <button>Log In</button>
                    {this.state.isLoading && 'Logging in...'}
            </form>
        </div>
    )
    }
}
export default Login;