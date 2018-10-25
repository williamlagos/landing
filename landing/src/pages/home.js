import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby"

import Header from "../components/Header";
import Layout from '../components/layout';
import Background from "../assets/img/backgrounds/bg-03.jpg";
const parallaxBackground = { backgroundImage: `url(${Background})` };

class HomePage extends React.Component {
    render() {
        const siteTitle = "Momentum";
        return (
            <Layout>
                <Helmet title={siteTitle} />
                <Header></Header>
                <div className="container">
                    <div className="description">
                        <div className="row">
                            <div className="col col-6">
                                <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                </iframe>
                            </div>
                            <div className="col col-6">
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default HomePage;