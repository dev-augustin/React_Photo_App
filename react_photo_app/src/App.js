import React, { Component } from 'react';
import './App.css';
import firebaseConfig from './firebaseConfig';
import 'firebase/firebase-auth'

import Home from "./components/Home"
import Login from "./components/Login"

export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      user:""
    }
  }
componentDidMount(){
  this.authState();
}
  //on AuthSgateChanged method to check sign-in state of user
  authState(){
     firebaseConfig.auth().onAuthStateChanged((user) =>{
        console.log("user: ", user);
        if(user){
          this.setState({user});
        }
        else{
          this.setState({user:""});
        }
     });
  }

  render() {
    return (
      <div>
        {/* If user ,home component else Login components*/}
       {this.state.user ? (<Home/>) : (<Login/>)}
      </div>
    )
  }
}

