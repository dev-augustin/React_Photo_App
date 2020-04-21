import React, { Component } from 'react';
import firebaseConfig from '../firebaseConfig'

export default class Home extends Component {
    constructor(props){
        super(props);
        this.logout=this.logout.bind(this);
        
    }

    logout =(event) =>{
        event.preventDefault();
        firebaseConfig.auth().signOut()
        .then((error) => {
            var errorMessage=error.message;
            console.log(error);
            console.log(error.message);
            alert(errorMessage);
        });
    }
    render() {
        return (
            <div>
                <h1> Welcome to Home screen</h1>

                <button type="button" onClick={this.logout}>Logout</button>
            </div>
        )
    }
}
