import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby"

import Layout from '../components/layout';

import landing01 from "../assets/img/landing-01.jpg";
import Background from "../assets/img/backgrounds/bg-01.jpg";

const parallaxBackground = { backgroundImage: `url(${Background})` };

class HomePage extends React.Component {
    render() {
        const siteTitle = "Momentum";
        return (
            <Layout>
                <Helmet title={siteTitle} />
                <div className="wrapper">
                    <div className="parallax filter-gradient blue section-colorful hero-image" data-color="blue" style={ parallaxBackground }>
                        <div className="parallax-background banner-parallax"></div>
                        <div className="container">
                            <div className="row">
                                <div className="description">
                                    <img className="hero-thumb" src={landing01} />
                                    <h1>  Saiba o que mais de 5.000 brasileiros comuns estão fazendo para prosperar em 2018</h1>
                                    <h3>Pessoas como você, com determinação e vontade de crescimento: Saiba o que elas estão fazendopara crescer como nunca antes!</h3>
                                    <Link className="btn-section" to="subscribe/index.html" >
                                        Quero saber!
                                     </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default HomePage;