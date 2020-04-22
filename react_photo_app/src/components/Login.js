import React, { Component } from 'react'
import  firebaseConfig from '../firebaseConfig';
import SignUp from './SignUp'

export default class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            Email: "",
            Password: "",
            ErrorMessage: ""
        }
        this.handleChange=this.handleChange.bind(this);
        this.login=this.login.bind(this);
    }
     handleChange = (event) =>{
         this.setState({[event.target.name] : event.target.value})
     }
     
     login = (event) => {
         event.preventDefault();
         firebaseConfig.auth().signInWithEmailAndPassword(this.state.Email, this.state.Password)
         .then ((user) =>{console.log(user);
        // wrtieUserData(user)
    })
         .catch((error) => {
             console.log(error);
             console.log(error.message);
             alert(error.message);
             alert("click on sign up to register");
             this.setState({ErrorMessage : error.message});
         })
         
     }

    //  wrtieUserData = () =>{
    //   firebaseConfig.database().ref('users/' + user.uid).set(user).catch(error => {
    //       console.log(error.message)
    //      });
   
    //  }
    render() {
        return (
            <div>
               
                <h3>Login</h3>
                <form>
                    <label>Email: </label>
                    <input type="email" name="Email" value={this.state.Email} onChange={this.handleChange} />
                    <label>  Password  </label>
                    <input type="password" name="Password" value={this.state.Password} onChange={this.handleChange}/>
                    <button type="button"  onClick={this.login}> Login </button>
                    <h3 style={{color:"red"}}>{this.state.ErrorMessage}</h3>
                 
                </form>
                <SignUp/>
            </div>
        )
    }
}