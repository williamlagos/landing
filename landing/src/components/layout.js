import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import "../assets/scss/landing.scss";

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
            <div className={`body landing-page landing-page-1 ${this.state.loading}`}>
                {children}
                <Footer />
            </div>
        );
    }
}

export default Template;
