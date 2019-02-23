import React from "react";

// import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/css/normalize.css";
import "../assets/css/skeleton.css";
import './layout.css';

import Header from "./Header";
import Footer from "./Footer";

class Template extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        loading: 'is-loading'
      }
    }

    componentDidMount () {
      this.timeoutId = setTimeout(() => {
          this.setState({loading: ''});
      }, 100);
    }

    componentWillUnmount () {
      if (this.timeoutId) {
          clearTimeout(this.timeoutId);
      }
    }

    render() {
        const { children } = this.props;

        return (
            <div className={`body landing-page landing-page-1 text-center ${this.state.loading}`} style={this.props.style}>
                {children}
                {/*<Footer />*/}
            </div>
        );
    }
}

export default Template;
