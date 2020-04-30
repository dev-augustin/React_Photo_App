import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Bookmarks from './Bookmarks';
import ProfilePage from './ProfilePage';
import Home from './Home'
export default function HomePage() {
    return (
        <div>
        
                 <Router>
                 <nav>
                     <Link to='/' >Home</Link>
                     <Link to='/ProfilePage'>User Profile</Link>
                     <Link to='/Bookmarks'>Bookmarks</Link>
                 </nav>
                     <Route path='/' component={Home} exact />
                     <Route path='/ProfilePage' component={ProfilePage} />
                     <Route path='/Bookmarks' component={Bookmarks}/>
                 </Router>
        </div>
    )
}
