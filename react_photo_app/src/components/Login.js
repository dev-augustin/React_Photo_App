import React, { Component } from 'react'
import  firebaseConfig from '../firebaseConfig';

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            Email: "",
            Password: ""
        }
        this.handleChange=this.handleChange.bind(this);
        this.login=this.login.bind(this);
    }
     handleChange(event){
         this.setState({[event.target.name] : event.target.value})
     }
     
     login(event){
         
     }
    render() {
        return (
            <div>
               
                <h3>Login</h3>
                <form>
                    <label>Email: </label>
                    <input type="email" name="Email" value={this.state.Email} onChange={this.handleChange} />
                    <label>  Password  </label>
                    <input type="password" name="Password" value={this.state.password} onChange={this.handleChange}/>
                    <button type="button"  onClick={this.login}> Login </button>
                 
                </form>
            </div>
        )
    }
}