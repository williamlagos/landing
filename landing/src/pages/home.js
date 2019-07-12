import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby"
import { Box } from 'grommet'

import Layout from '../components/layout';
// import Countdown from '../components/Countdown';
import Footer from '../components/Footer';

import landing01 from "../assets/img/video.png";
import mohublogo from "../assets/img/mohub_white.png";
import Background from "../assets/img/backgrounds/bg-01.png";

class IndexPage extends React.Component {
    render() {
        const siteTitle = "MoHub";
        return (
            <Layout>
                <Helmet title={siteTitle}>
                  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
                  <link href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" rel="stylesheet" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"/>
                </Helmet>
                <Box id="cover" justify="between" background={`url(${Background})`} fill="true">
                <div className="page">
                    <div className="container">
                        <div className="row">
                            <div className="offset-by-one ten columns">
                                <div className="center spacing">
                                  <img src={mohublogo} alt="mohub logo"/>
                                </div>
                                <div className="white">
                                  <div className="red">Importante! Assista ao vídeo abaixo!</div>
                                  <img className="fluid" src={landing01} alt="video 1"/>
                                  <div className="row top">
                                    <h1 className="two columns big">1</h1>
                                    <div className="ten columns">
                                      <h4 className="uppercase">Ative a notificação via Facebook</h4>
                                      <p>Clique abaixo e cadastre-se para receber os avisos das aulas e atualizações do Workshop diretamente no seu Facebook Messenger.</p>
                                      <Link className="btn-facebook" to="videos/" >
                                          <i class="fab fa-facebook-square"></i>
                                          &nbsp; Ative seu Facebook
                                      </Link>
                                    </div>
                                  </div>
                                  <hr/>
                                  <div className="row top big-bottom">
                                    <h1 className="two columns big">2</h1>
                                    <div className="ten columns">
                                      <h4 className="uppercase">Confirme o seu e-mail</h4>
                                      <p>Clique abaixo e cadastre-se para receber os avisos das aulas e atualizações do Workshop diretamente no seu e-mail correspondente.</p>
                                      <div className="buttons">
                                        <button className="btn-mail outlook">Outlook</button>
                                        <button className="btn-mail gmail">Gmail</button>
                                        <button className="btn-mail yahoo">Yahoo</button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
                </Box>
            </Layout>
        );
    }
}

export default IndexPage;
