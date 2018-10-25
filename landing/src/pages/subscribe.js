import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby"

import Layout from '../components/layout';

import landing02 from "../assets/img/landing-02.jpg";

import Background from "../assets/img/backgrounds/bg-02.jpg";
const parallaxBackground = { backgroundImage: `url(${Background})` };

class SubscribePage extends React.Component {
    render() {
        const siteTitle = "Momentum";

        return (
            <Layout>
                <Helmet title={siteTitle} />
                <div className="wrapper">
                    <div className="parallax filter-gradient purple section-colorful hero-image">
                        <div className="parallax-background banner-parallax" style={parallaxBackground}></div>
                        <div className="row">
                            <div className="container">
                                <div className="description">
                                    <img className="hero-thumb" src={landing02} />
                                    <h1> Faça como esta legião de brasileiros e venha crescer você também!  </h1>
                                    <h3>Ficou interessado? <br />Então corre e vem saber como!</h3>
                                    <br />
                                    <section className="subscribe">
                                        <input type="text" className="subscribe-input" id="subscribe-input" placeholder="Seu endereço de e-mail" />
                                    </section>
                                    <Link className="btn-section" to="subscription-confirmation/index.html" >
                                        Quero crescer!
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

export default SubscribePage;