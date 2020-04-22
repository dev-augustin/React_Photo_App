import React, { Component } from 'react';
import firebaseConfig from '../firebaseConfig';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Bookmarks from './Bookmarks';
import ProfilePage from './ProfilePage';
import HomePage from './HomePage'

export default class Home extends Component {
    constructor(props){
        super(props);
        
        this.logout=this.logout.bind(this);
        
    }



    logout =() =>{
        //event.preventDefault();
        firebaseConfig.auth().signOut()
        .then((error) => {
            //var errorMessage=error.message;
            console.log(error);
            //console.log(error.message);
            //alert(errorMessage);
        });
    }
    render() {
        return (
            <div>
                <h1> Welcome to Home screen</h1>
        
                <button type="button" onClick={this.logout}>Logout</button>
                {/* <Router>
                    <HomePage/>
                </Router> */}
            </div>
        );
    }
}
