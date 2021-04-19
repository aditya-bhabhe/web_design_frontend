import React from "react";
import { HomeNavigationBar } from "./HomeNavigationBar";
import MovieSlider from "./MovieSlider";
import FooterComponent from "./FooterComponent";
import UserService from "../../services/UserService";
import MovieServiceClient from "../../services/MovieService";
import { AdminMovieSearchResultItem } from "../HomeComponent/AdminMovieSearchResultItem";
import StripeCheckout from "react-stripe-checkout";
import { ToastContainer, toast } from 'react-toastify';
import posed from "react-pose";

const AnimatedDiv = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
});

export default class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();

    this.state = {
      popularMovies: [],
      nowPlayingMovies: [],
      searchQuery: "",
      userProfile: "",
      searchType: "movie",
      isVisible: false,
      searchResults: [],
      fullSubscribtion: 100,
      subscriptionName: "Gold Membership",
    };

    this.userService.getProfile().then((response) =>
      this.setState({
        userProfile: response,
      })
    );

    this.searchTextUpdated = this.searchTextUpdated.bind(this);
    this.searchButtonClicked = this.searchButtonClicked.bind(this);
    this.searchTypeUpdated = this.searchTypeUpdated.bind(this);
  }

  componentDidMount() {
    this.loginNotify();
    setTimeout(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 500);

    MovieServiceClient.instance.getPopularMovies().then((response) => {
      this.setState({
        popularMovies: response.results,
      });
    });

    MovieServiceClient.instance.getNowPlayingMovies().then((response) => {
      this.setState({
        nowPlayingMovies: response.results,
      });
    });

    MovieServiceClient.instance
      .searchMovieForQuery(this.props.match.params.query)
      .then((response) => {
        console.log(response.results);
        this.setState({
          searchResults: response.results,
        });
      });
  }

  searchTextUpdated(event) {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  searchTypeUpdated(event) {
    this.setState({
      searchType: event.target.value,
    });
  }


  loginNotify = () => {
    console.log("skfdjsdfsdf")
    toast("Successfully logged in!")
  };

  updateUser = (user, userId) => {};

  handleStripeToken = (token, addresses) => {
    console.log(token, "token");
    console.log(addresses, "address");
    this.handleStripeUser();
  };

  handleStripeUser = () => {
    console.log(this.state.userProfile, "user");
    let userId = this.state.userProfile._id;
    let user = {
      isGold: true,
    };
    this.userService.updateUser(user, userId).then((user) => {
      console.log(user, "api user");
      let a = { ...this.state.userProfile };
      a.isGold = user.isGold;
      console.log(a, "updateduser");
      this.setState({
        userProfile: a,
      });
    });
  };

  searchButtonClicked() {
    if (this.state.searchQuery !== "") {
      if (this.state.searchType === "movie") {
        this.props.history.push("/movie/search/" + this.state.searchQuery);
      } else {
        this.props.history.push("/user/search/" + this.state.searchQuery);
      }
    } else {
      alert("Enter a search query first!");
    }
  }

  renderResults() {
    if (this.state.searchResults) {
      if (this.state.searchResults.length === 0) {
        return <h4 className="white-title ml-4">No results found</h4>;
      } else {
        let items = this.state.nowPlayingMovies.map(function (result) {
          return <AdminMovieSearchResultItem searchResult={result} />;
        });
        return items;
      }
    }
  }

  logout = () => {
    this.userService.logout();
  };

  render() {
    console.log(this.state.userProfile.isGold, "userProfile");
    if (this.state.userProfile.type === "admin") {
      return (
        
        <AnimatedDiv pose={this.state.isVisible ? "visible" : "hidden"}>
          {this.state.userProfile.message === "You are not logged in" && (
            <HomeNavigationBar loggedIn={false} />
          )}
          <ToastContainer
                position="top-right"
                autoClose={15000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
              />
          {this.state.userProfile.username !== undefined && (
            <div>
              <HomeNavigationBar
                loggedIn={true}
                username={this.state.userProfile.username}
                logout={this.logout}
              />
            </div>
          )}
          <div className="row justify-content-center mt-4">
            <div className="col-6">
              <input
                style={{
                  backgroundColor: "rgb(0,0,0,0.3)",
                  caretColor: "rgb(255,255,0)",
                  color: "white",
                  backgroundBlendMode: "overlay",
                  borderRadius: "100px",
                  height: "40px",
                  fontSize: "20px",
                }}
                className="form-control"
                type="text"
                onChange={this.searchTextUpdated}
                placeholder="Search"
                value={this.state.searchQuery}
                aria-label="Search"
              />
            </div>
            <div className="col-4 px-1">
              <select
                style={{
                  width: "100px",
                  backgroundColor: "rgb(255,255,255,1)",
                  color: "black",
                  borderRadius: "20px",
                  height: "40px",
                  fontSize: "18px",
                }}
                className="custom-select col-lg-1 col-xs-1"
                onChange={this.searchTypeUpdated}
              >
                <option value="movie">Movies</option>
                <option value="user">Users</option>
              </select>
            </div>
            <button
              type="btn"
              className="col-1 text-white btn btn-danger"
              onClick={this.searchButtonClicked}
            >
              Search
            </button>
          </div>
          <div className="container-fluid ml-0 ">
            <h6 className={"mt-4 col-12 white-title text-center"}>
              {" "}
              Search results for "{this.props.match.params.query}"{" "}
            </h6>

            <div className="row">
              <div className="col-2"></div>
              <div className="col-8 mt-4 justify-content-center">
                <ul className="list-group ">{this.renderResults()}</ul>
              </div>
            </div>
          </div>
          <FooterComponent />
        </AnimatedDiv>
      );
    } else {
      if (this.state.userProfile.message === "You are not logged in") {
        return (
          <AnimatedDiv pose={this.state.isVisible ? "visible" : "hidden"}>
            <HomeNavigationBar loggedIn={false} />
            <ToastContainer
                position="top-right"
                autoClose={15000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
              />
            <div className="row col-12 justify-content-center mt-4">
              <div className="col-6">
                <input
                  style={{
                    backgroundColor: "rgb(0,0,0,0.3)",
                    caretColor: "rgb(255,255,0)",
                    color: "white",
                    backgroundBlendMode: "overlay",
                    borderRadius: "100px",
                    height: "50px",
                    fontSize: "20px",
                  }}
                  className="form-control"
                  type="text"
                  onChange={this.searchTextUpdated}
                  placeholder="Search"
                  value={this.state.searchQuery}
                  aria-label="Search"
                />
              </div>
              <div className="col-4 px-1">
                <select
                  style={{
                    width: "100px",
                    backgroundColor: "rgb(255,255,255,1)",
                    color: "black",
                    borderRadius: "20px",
                    height: "50px",
                    fontSize: "18px",
                  }}
                  className="custom-select col-lg-1 col-xs-1"
                  onChange={this.searchTypeUpdated}
                >
                  <option value="movie">Movies</option>
                  <option value="user">Users</option>
                </select>
              </div>
              <button
                type="btn"
                className="text-white col-1 btn btn-danger"
                onClick={this.searchButtonClicked}
              >
                Search
              </button>
            </div>

            <h3 className="ml-4 mt-4 white-title text-center">
              {" "}
              Popular Movies{" "}
            </h3>
            <br></br>
            <MovieSlider movies={this.state.popularMovies} />

            <h3 className="ml-4 mt-4 white-title text-center"> In Theatres </h3>
            <br></br>
            <MovieSlider movies={this.state.nowPlayingMovies} />

            <FooterComponent />
          </AnimatedDiv>
        );
      } else if (this.state.userProfile !== undefined) {
        return (
          <AnimatedDiv pose={this.state.isVisible ? "visible" : "hidden"}>
            <div>
            <ToastContainer
                position="top-right"
                autoClose={15000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover={false}
              />
              <HomeNavigationBar
                loggedIn={true}
                username={this.state.userProfile.username}
                logout={this.logout}
              />
              <div className="row">
                <div className="col-3 d-flex">
                  <h4 className="white-title">
                    Hello {this.state.userProfile.firstname}!
                  </h4>
                  <StripeCheckout
                    stripeKey="pk_test_51IhdUTF5dzVrN4Y4kyR1yh38i3yb6PMoZ56mI8FVdXy9HydpyYSxQlYNAstvfpGNnh8A60AzEtBIxsPnq47D0nL400lsudbxw7"
                    token={this.handleStripeToken}
                    amount={this.state.fullSubscribtion * 100}
                    name={this.state.subscriptionName}
                    display="Pay"
                  />
                </div>
              </div>
            </div>
            <div className="row col-12 justify-content-center mt-4">
              <div className="col-6">
                <input
                  style={{
                    backgroundColor: "rgb(0,0,0,0.3)",
                    caretColor: "rgb(255,255,0)",
                    color: "white",
                    backgroundBlendMode: "overlay",
                    borderRadius: "100px",
                    height: "50px",
                    fontSize: "20px",
                  }}
                  className="form-control"
                  type="text"
                  onChange={this.searchTextUpdated}
                  placeholder="Search"
                  value={this.state.searchQuery}
                  aria-label="Search"
                />
              </div>
              <select
                style={{
                  width: "100px",
                  backgroundColor: "rgb(255,255,255,1)",
                  color: "black",
                  borderRadius: "20px",
                  height: "50px",
                  fontSize: "18px",
                }}
                className="custom-select col-lg-1 col-xs-1"
                onChange={this.searchTypeUpdated}
              >
                <option value="movie">Movies</option>
                <option value="user">Users</option>
              </select>
              <button
                type="btn"
                className="text-white btn btn-outline-success ml-2"
                onClick={this.searchButtonClicked}
              >
                GO
              </button>
            </div>

            <h3 className="ml-4 mt-4 white-title"> Popular Movies </h3>
            <MovieSlider movies={this.state.popularMovies} />

            <h3 className="ml-4 mt-4 white-title"> Now Running </h3>
            <MovieSlider movies={this.state.nowPlayingMovies} />

            <FooterComponent />
            {/* <Paypal /> */}
          </AnimatedDiv>
        );
      }
    }
  }
}
