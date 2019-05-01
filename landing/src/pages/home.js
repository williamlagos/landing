import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby"

import Layout from '../components/layout';
import Countdown from '../components/Countdown';

// import landing01 from "../assets/img/landing-01.jpg";

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
                                    {/*<img className="hero-img" src={landing01} />*/}
                                    <h3>  Tempo para acessar o restante das landings:</h3>
                                    <Countdown/>
                                    <Link className="button button-primary" to="subscribe/" >
                                        Continuar
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
