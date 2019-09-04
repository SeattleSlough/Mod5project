import React from 'react'
import {Link} from 'react-router-dom'


const user_api = 'http://localhost:3000/api/v1/login'

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            username : "",
            password : ""
        }
    }

    login = () => {
        return fetch(user_api, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Accept' : 'application/json'
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then(res => res.json()).then(
            data => {
                console.log(data)
                this.handleLogin(data)
            }
        )
    }

handleLogin = (data) => {
    localStorage.setItem("token", data.jwt)
    localStorage.setItem("user_id", data.user_id)
}


    handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(this.state.username, this.state.password);
        this.login()
    }
    
    handleUsernameChange = (ev) => {
       this.setState({username: ev.target.value})
    }

    handlePasswordChange = (ev) => {
       this.setState({password: ev.target.value})
    }

    render() {
        return (
            <div>
            <div>
            <form onSubmit={(ev) => this.handleSubmit(ev)}>
                <label>
                   Username:
                   <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
                </label>
                <label>
                   Password:
                   <input type="text" placeholder="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            </div>
                <Link to="/signup">Create Account</Link>
                <Link to="/draft">Draft</Link>
            </div>
        )
    }
}

export default Login