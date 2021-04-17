import React from "react";
import "./LoginRegister.css";
import { Link } from "react-router-dom";
import UserService from "../../services/UserService";
import logo from "../../assets/goodmovies_logo.png";
import NetflixImage from "../../assets/batman.jpg";

import posed from "react-pose";

const AnimatedDiv = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.userService = new UserService();
    this.state = {
      username: "",
      password: "",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: !this.state.isVisible });
    }, 500);
  }

  usernameChanged = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  passwordChanged = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  login = () => {
    // const userNameTest = RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    // const usernameError = "",
    // usernameError.email = userNameTest.test(username) && username.length > 0 ? "" : "Invalid email address";

    var user = {
      username: this.state.username,
      password: this.state.password,
    };

    this.userService.login(user).then((response) => {
      console.log(response, "loginresponse");
      if (response.username != null) {
        this.props.history.push("/home");
      } else if (response.message) {
        alert(
          "Username and Password does not match with our records. Try again!"
        );
        this.resetFields();
      }
    });
  };

  resetFields = () =>
    this.setState({
      username: "",
      password: "",
    });

  render() {
    return (
      <AnimatedDiv
        pose={this.state.isVisible ? "visible" : "hidden"}
        className={"background"}
      >
        <div
          className="row justify-content-center login-page"
          style={{ backgroundColor: "transparent", margin: 0 }}
        >
            <div className="col-12 col-md-5 login-section px-0">
            <div className="box p-3">
              <form className={"box-elements"}>
                <h1 className="mb-3">
                  Register&nbsp;<i class="fa fa-sign-in-alt"></i>
                </h1>
                <input
                  className={"form-control my-2"}
                  type={"text"}
                  placeholder={"Username"}
                  value={this.state.username}
                  onChange={this.usernameChanged}
                />
                <input
                  className={"form-control my-2"}
                  type={"password"}
                  placeholder={"Password"}
                  value={this.state.password}
                  onChange={this.passwordChanged}
                />
                <button
                  className={"red-button my-2 py-2 px-3"}
                  type={"button"}
                  onClick={this.login}
                >
                  Sign In
                </button>
                <p className="mb-0">
                  <Link to={"/register"} style={{ color: "white" }}>
                    Not a member?&nbsp;Sign Up here!
                  </Link>
                </p>
                <br />
                <Link className="color-yellow" to={"/home"} style={{ color: "white" }}>
                  Continue as Guest
                </Link>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-7 px-0">
            <div className="flip-section p-0">
              <ul class="flip4 px-0">
                <li>Anytime anywhere instantly</li>
                <li>All movies on your mobile</li>
                <li># So what you are watching</li>
                <li>Let your sofa get some action</li>
              </ul>
            </div>
          </div>
          </div>
      </AnimatedDiv>
    );
  }
}

export default Login;
