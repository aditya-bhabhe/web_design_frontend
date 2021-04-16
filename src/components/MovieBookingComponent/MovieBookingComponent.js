import React from 'react';
import './MovieBookingComponent.css';
import * as constants from '../../services/Constants'
import ReviewComponent from '../ReviewComponent/ReviewComponent';
import MovieServiceClient from "../../services/MovieService";
import UserService from "../../services/UserService";
import AddToWatchlistComponent from "../AddWatchlistComponent/AddToWatchlistComponent";
import TwitterService from "../../services/TwitterService";
import Tweet from 'react-tweet';
import {HomeNavigationBar} from "../HomeComponent/HomeNavigationBar";
import {withRouter} from 'react-router-dom';
import posed from 'react-pose';
import MovieBookingComponent from "../MovieBookingComponent/MovieBookingComponent";





export default MovieBookingComponent;