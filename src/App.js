import React, {Component} from 'react';
import Login from "./components/AuthenticateUserComponent/Login";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from "./components/AuthenticateUserComponent/Register";
import Profile from "./components/UserProfileComponents/Profile";
import MovieDetailsComponent from "./components/MovieDetailsComponent/MovieDetailsComponent";
import HomeContainer from "./components/HomeComponent/HomeContainer";
import MovieSearchComponent from "./components/MovieSearchComponent/MovieSearchComponent";
import UserSearchComponent from "./components/UserSearchComponent/UserSearchComponent";
import IntroPageComponent from "./components/IntroPageComponent/IntroPageComponent";
import MovieBookingComponent from "./components/MovieBookingComponent/MovieBookingComponent";
import RenderMovie from './components/RenderMovie/RenderMovie';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <div>
                        <Route path="/" exact component={Login}/>
                        <Route path="/home" exact component={HomeContainer}/>
                        {/* <Route path="/login" exact component={Login}/> */}
                        <Route path="/register" exact component={Register}/>
                        <Route path="/profile" exact component={Profile}/>
                        <Route path="/profile/:id" exact component={Profile}/>
                        <Route path='/movie/:movieId' exact component={MovieDetailsComponent}/>
                        <Route path='/movie/search/:query' exact component={MovieSearchComponent}/>
                        <Route path='/user/search/:query' exact component={UserSearchComponent}/>
                        <Route path = '/movie/:movieId/booking' exact component={MovieBookingComponent}/>
                        <Route path = '/streaming/:search/:movieId' exact component={RenderMovie}/>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
