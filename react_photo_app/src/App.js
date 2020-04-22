import React, { Component } from 'react';
import './App.css';
import firebaseConfig from './firebaseConfig';
import 'firebase/firebase-auth'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from "./components/Home"
import Login from "./components/Login"
import Bookmarks from './components/Bookmarks';
import ProfilePage from './components/ProfilePage';


export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      user:"",
      Email:""
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
          console.log(user.uid);
          console.log(user.email)
          // getUserData(user.uid);
        }
        else{
          this.setState({user:""});
        }
     });
  }
// getUserData(uid){
//   firebaseConfig.database().ref('users/' + uid).once('value', snap =>{
//     console.log(snap.val())
//   })
// }
  render() {
    return (
      <div>
        {/* If user ,home component else Login component*/}
       {this.state.user ? (<Home />) : (<Login/>)}
       {/* {this.state.user ? 
       (<Router>
         <nav>
            <Link to='/' >Home</Link>
            <Link to='/ProfilePage'>User Profile</Link>
            <Link to='/Bookmarks'>Bookmarks</Link>
         </nav>
            <Route path='/' component={Home} exact />
            <Route path='/ProfilePage' component={ProfilePage} />
            <Route path='/Bookmarks' component={Bookmarks}/>
       </Router>) : (<Login/>)} */}
      </div>
    )
  }
}

