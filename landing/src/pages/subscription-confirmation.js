import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby"

import Layout from '../components/layout';
import Background from "../assets/img/backgrounds/bg-03.jpg";
const parallaxBackground = { backgroundImage: `url(${Background})` };

class SubscriptionConfirmationPage extends React.Component {
    render() {
        const siteTitle = "Momentum";

        return (
            <Layout>
                <Helmet title={siteTitle} />
                <div className="wrapper">
                    <div className="parallax filter-gradient green section-colorful hero-image">
                        <div className="parallax-background banner-parallax" style={parallaxBackground}></div>
                        <div className="container">
                            <div className="description no-padding">
                                <h1> Obrigado! Sua inscrição está confirmada.  </h1>
                                <h3>Nos vemos nos dias 10, 12 de setembro às 20h e 14 de setembro, às 19h.</h3>
                                <br />
                                <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                </iframe>
                                <br />
                                <Link className="btn-facebook" to="/home/index.html" >
                                    <i className="fa fa-2x fa-facebook"></i>   Me lembre das aulas
                                     </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default SubscriptionConfirmationPage;