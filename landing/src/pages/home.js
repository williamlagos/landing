import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby"

import Layout from '../components/layout';

import landing01 from "../assets/img/landing-01.jpg";

import Background from "../assets/img/backgrounds/bg-01.jpg";
const parallaxBackground = { backgroundImage: `url(${Background})` };

class IndexPage extends React.Component {
    render() {
        const siteTitle = "MoHub";
        return (
            <Layout style={parallaxBackground}>
                <Helmet title={siteTitle} />
                <div className="wrapper text-center">
                    <div className="parallax filter-gradient blue section-colorful hero-image">
                        <div className="parallax-background banner-parallax"></div>
                        <div className="container box">
                            <div className="row">
                                <div className="description">
                                    <img className="hero-img" src={landing01} />
                                    <h3>  Saiba o que mais de 5.000 brasileiros comuns estão fazendo para prosperar em 2018</h3>
                                    <h5>Pessoas como você, com determinação e vontade de crescimento: Saiba o que elas estão fazendopara crescer como nunca antes!</h5>
                                    <Link className="button button-primary" to="subscribe/" >
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

export default IndexPage;
