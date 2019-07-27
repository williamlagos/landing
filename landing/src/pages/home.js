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
        const title = "MoHub";
        const summary = "Uma post teste para o Mohub";
        const url = "https://www.facebook.com/somosmohub/videos/2562218477149895/";
        // const image = "https://efforia.ams3.digitaloceanspaces.com/fretefacil/5b75d00d5ab5c60da7116276_bg.png"
        /*&p[images][0]=${image}'*/
        let shareUrl = `http://www.facebook.com/sharer.php?s=100&p[title]=${title}&p[summary]=${summary}&p[url]=${url},'sharer','toolbar=0,status=0,width=580,height=325`;
        shareUrl = `https://www.facebook.com/sharer.php?u=${url}`
        return (
            <Layout>
                <Helmet title={siteTitle}>
                  <meta property="og:description" content="Your entertaining and descriptive copy here, if your meta description is good, use it." />
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
                                  {/*<img className="fluid" src={landing01} alt="video 1"/>*/}
                                  <div className="fluid">
                                  <iframe id="ytplayer" type="text/html" width="100%" height="400"
                                    src="http://www.youtube.com/embed/fa5p19APgd8/?autoplay=0"
                                    frameborder="0"/>
                                  </div>
                                  <div className="row top">
                                    <h1 className="two columns big">1</h1>
                                    <div className="ten columns">
                                      <h4 className="uppercase">Ative a notificação via Facebook</h4>
                                      <p>Clique abaixo e cadastre-se para receber os avisos das aulas e atualizações do Workshop diretamente no seu Facebook Messenger.</p>
                                      <a id="fb-share"
                                        className="btn-facebook"
                                        style={{ textDecoration: 'none' }}
                                        type="icon_link"
                                        onClick={() => window.open(shareUrl)}
                                        href="javascript: void(0)">
                                        <i class="fab fa-facebook-square"></i>
                                        &nbsp; Ative seu Facebook
                                      </a>
                                    </div>
                                  </div>
                                  <hr/>
                                  <div className="row top big-bottom">
                                    <h1 className="two columns big">2</h1>
                                    <div className="ten columns">
                                      <h4 className="uppercase">Confirme o seu e-mail</h4>
                                      <p>Clique abaixo e cadastre-se para receber os avisos das aulas e atualizações do Workshop diretamente no seu e-mail correspondente.</p>
                                      <div className="buttons">
                                        <a href="https://www.outlook.com/" target="_blank" className="btn-mail outlook">Outlook</a>
                                        <a href="https://mail.google.com/" target="_blank" className="btn-mail gmail">Gmail</a>
                                        <a href="https://mail.yahoo.com/" target="_blank" className="btn-mail yahoo">Yahoo</a>
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
