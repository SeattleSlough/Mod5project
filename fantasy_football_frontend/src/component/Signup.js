import React from 'react'
import {BrowserRouter as Link} from 'react-router-dom'

const create_user_api = 'http://localhost:3000/api/v1/users'

class Signup extends React.Component {

    constructor() {
        super()
        this.state = {
            username : "",
            password : ""
        }
    }

    createUser = () => {
        return fetch(create_user_api, {
            method: 'POST',
            header: {
                'Content-Type':'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify ({
                username: this.state.username,
                password: this.state.password
            })
        })
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        console.log(this.state.username, this.state.password);
        this.createUser()
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
            </div>
        )
    }
}

export default Signup