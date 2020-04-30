import React, { Component } from 'react'
import firebaseConfig from '../firebaseConfig';
import * as firebase from 'firebase'
export default class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            Username :"",
            Emai: "",
            Password : "",
            ErrorMessage: "",
            user:""

        }

        this.handleChange=this.handleChange.bind(this);
        this.signup=this.signup.bind(this);
    }
  

    handleChange = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    signup = (event) => {
         event.preventDefault();
         firebase.auth().createUserWithEmailAndPassword(this.state.Email, this.state.Password)
         
         .then((user) =>{ 
             console.log(user);
            alert("User created. Go to Login")
            // writeUserData(user);
            })
         .catch ((error) =>{
             console.log(error);
             console.log(error.message); 
             alert(error.message);
             this.setState({ErrorMessage : error.message});
         })
        }

    

    render() {
        return (
            <div>
               
                <h3>New User - Signup</h3>
                <form>
                    <label>  Username:  </label>
                    <input type="text" name="Username" value={this.state.Username} onChange={this.handleChange}/>
                    <label>Email: </label>
                    <input type="email" name="Email" value={this.state.Email} onChange={this.handleChange}/>
                    <label>  Password  </label>
                    <input type="password" name="Password" value={this.state.Password} onChange={this.handleChange}/>
                    <button onClick={this.signup}>Signup</button>
                    <h3 style={{color:"red"}}>{this.state.ErrorMessage}</h3>
                </form>
            </div>
        )
    }
}
