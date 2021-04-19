import React from 'react';
import UserService from "../../services/UserService";
import youtube from '../../services/Youtube';
import posed from 'react-pose';
import MovieServiceClient from "../../services/MovieService";
import * as constants from '../../services/Constants';
import TwitterService from "../../services/TwitterService";
import './RenderMovie.css';

const AnimatedDiv = posed.div({
    hidden: {opacity: 0},
    visible: {opacity: 1}
});


export default class RenderMovie extends React.Component{

    constructor(props) {
        super(props);
        this.userService = new UserService();
    
        this.state = {
        //   popularMovies: [],
        //   nowPlayingMovies: [],
        //   searchQuery: "",
          userProfile: "",
        //   searchType: "movie",
          isVisible: false,
          searchResults: [],
          video : [],
          tweets : [],
          movie : ""
        //   fullSubscribtion: 100,
        //   subscriptionName: "Gold Membership",
        };
    
        this.userService.getProfile().then((response) =>
          this.setState({
            userProfile: response,
          })
        );
    
        // this.searchTextUpdated = this.searchTextUpdated.bind(this);
        // this.searchButtonClicked = this.searchButtonClicked.bind(this);
        // this.searchTypeUpdated = this.searchTypeUpdated.bind(this);
        // this.twitterService = new TwitterService();
      }

      componentDidMount = async() => {
          console.log("youtube");

          setTimeout(() => {
            this.setState({isVisible: !this.state.isVisible});
        }, 500);

        MovieServiceClient.instance.getMovieDetails(this.props.match.params.movieId)
            .then(response => {
                console.log(response)
                this.setState({
                                  movie: response
                              })

                // this.twitterService.searchTweetsByMovie(this.state.movie.title.replace(' ', ''))
                //     .then(response => response.json())
                //     .then(response => this.setState({tweets: response.statuses}));
            })  
        const response = await youtube.get('/search', {
            params: {
                q: `${this.props.match.params.search} official trailer`
            }
        })

        this.setState({
            video: response && response.data && response.data.items && response.data.items[0]
        })
      }




      render(){
          console.log(this.state.movie, "backdrop");
        const videoSrc = `https://www.youtube.com/embed/${this.state && this.state.video && this.state.video.id && this.state.video.id.videoId}`;
          return(
              
                  <AnimatedDiv style={{
                backgroundImage: `url(${constants.TMDB_BACKDROP_BASE_URL
                                        + this.state.movie.backdrop_path})`,
                backgroundSize: 'contain',
                backgroundColor: '#2d3436',
                height : '100vh',
                width: '100%',
                backgroundBlendMode: 'overlay'
            }} pose={this.state.isVisible ? 'visible' : 'hidden'} className="background" > 
                   <iframe src={videoSrc} allowFullScreen title="Video player" />
              </AnimatedDiv>
          )
      }
}