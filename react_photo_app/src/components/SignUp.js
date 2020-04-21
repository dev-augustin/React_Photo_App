import React, { Component } from 'react'

export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            Username :"",
            Emai: "",
            Password : ""
        }
    }
    render() {
        return (
            <div>
               
                <h3>New User - Signup</h3>
                <form>
                    <label>  Username:  </label>
                    <input type="text" name="" value={this.state.Username}/>
                    <label>Email: </label>
                    <input type="Email" name="" value={this.state.Email}/>
                    <label>  Password  </label>
                    <input type="Paswwrod" name="" value={this.state.Password}/>
                    <button>Signup</button>
                 
                </form>
            </div>
        )
    }
}