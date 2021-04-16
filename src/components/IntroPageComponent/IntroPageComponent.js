import React from "react";
import "./IntroPageComponent.css";
import posed from "react-pose";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../../assets/intr.json";

const AnimatedDivText1 = posed.div({
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
});

const AnimatedDivText2 = posed.div({
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
});

const AnimatedDivVisitWebsite = posed.div({
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
});

const AnimatedDivFooter = posed.div({
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
});

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

class IntroPageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisibleText1: false,
      isVisibleText2: false,
      isVisibleButton: false,
      isVisibleFooter: false,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisibleText1: !this.state.isVisibleText1 });
    }, 1000);

    setTimeout(() => {
      this.setState({ isVisibleText2: !this.state.isVisibleText2 });
    }, 2000);

    setTimeout(() => {
      this.setState({ isVisibleButton: !this.state.isVisibleButton });
    }, 3000);

    setTimeout(() => {
      this.setState({ isVisibleFooter: !this.state.isVisibleFooter });
    }, 3000);
  }

  render() {
    return (
      <div className="center container">
        <Lottie
          options={defaultOptions}
          height={300}
          width={300}
          style={{ borderRadius: "100px" }}
        />

        <AnimatedDivText1
          pose={this.state.isVisibleText1 ? "visible" : "hidden"}
        >
          <h1 className="white-title some-pad">Welcome to Flix Farm</h1>
        </AnimatedDivText1>

        <AnimatedDivText2
          pose={this.state.isVisibleText2 ? "visible" : "hidden"}
        >
          <h4 className="white-title">Discover the movies of your kind</h4>
        </AnimatedDivText2>
        <br />

        <AnimatedDivVisitWebsite
          pose={this.state.isVisibleText2 ? "visible" : "hidden"}
        >
          <Link to="/home" className="btn btn-outline-warning btn-lg">
            Hop in
          </Link>
        </AnimatedDivVisitWebsite>
      </div>
    );
  }
}

export default IntroPageComponent;
