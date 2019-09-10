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
    console.log("start handle login")
    localStorage.setItem("token", data.jwt)
    localStorage.setItem("user_id", data.user_id)
    this.props.setLoginStatus(true)
    this.props.history.push("/draft")
    console.log(this.props.history)
}


    handleSubmit = (ev) => {
        ev.preventDefault();
        // console.log(this.state.username, this.state.password);
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
            <div id="loginBackground">
                <h1>Fantasy Football</h1>
            <div>
            <form id="loginForm" onSubmit={(ev) => this.handleSubmit(ev)}>
                <label>
                   Username:
                   <input type="text" placeholder="username" name="username" value={this.state.username} onChange={this.handleUsernameChange}/>
                </label>
                <br />
                <label>
                   Password:
                   <input type="text" placeholder="password" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                </label>
                <br />
                <input type="submit" value="Submit"/>
            </form>
            </div>
                <Link to="/signup">Create Account</Link>
            </div>
        )
    }
}

export default Login