import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby"

import Layout from '../components/layout';
import Countdown from '../components/Countdown';
import Footer from '../components/Footer';

import banner from "../assets/img/banner.png";
import landing01 from "../assets/img/video_play.png";
import mohublogo from "../assets/img/mohub_white.png";
import Background from "../assets/img/backgrounds/bg-01.png";
const parallaxBackground = { backgroundImage: `url(${Background})` };
const videoplaBackground = { backgroundImage: `url(${landing01})` };

class SubscriptionConfirmationPage extends React.Component {
    render() {
        const siteTitle = "MoHub";

        return (
          <Layout>
              <Helmet title={siteTitle}>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
                <link href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" rel="stylesheet" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"/>
                <div id="fb-root"></div>
                <script async defer crossorigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v3.3&appId=153246718126522&autoLogAppEvents=1"></script>
              </Helmet>
              <div className="page">
                  <div className="full-width-container" style={parallaxBackground}>
                      <div className="container">
                      <div className="row">
                          <div className="offset-by-one ten columns">
                              <div className="center spacing">
                                <img src={mohublogo} alt="mohub logo"/>
                              </div>
                              <div>
                                {/*<div className="description">Importante! Assista ao vídeo abaixo!</div>*/}
                                <div className="flex">
                                  <div className="flex-left">
                                    <img className="fluid" src={landing01} alt="video 1"/>
                                  </div>
                                  <div className="flex-right">
                                    <button className="block">
                                      <div className="video" style={videoplaBackground}>
                                        <div className="overlay">
                                          <div className="overlay-content">
                                            <i class="fas fa-play"></i>
                                            {/*<h1>07/05</h1>*/}
                                          </div>
                                        </div>
                                      </div>
                                    </button>
                                    <button className="block">
                                      <div className="video" style={videoplaBackground}>
                                        <div className="overlay green">
                                          <div className="overlay-content">
                                            <i class="fas fa-lock"></i>
                                            <h1>14/05</h1>
                                          </div>
                                        </div>
                                      </div>
                                    </button>
                                    <button className="block">
                                      <div className="video" style={videoplaBackground}>
                                        <div className="overlay green">
                                          <div className="overlay-content">
                                            <i class="fas fa-lock"></i>
                                            <h1>21/05</h1>
                                          </div>
                                        </div>
                                      </div>
                                    </button>
                                    <button className="block last">
                                      <div className="video" style={videoplaBackground}>
                                        <div className="overlay green">
                                          <div className="overlay-content">
                                            <i class="fas fa-lock"></i>
                                            <h1>28/05</h1>
                                          </div>
                                        </div>
                                      </div>
                                    </button>
                                    {/*<h5>  Tempo para acessar o restante das landings:</h5>*/}
                                    <div style={{ 'display': 'none' }}><Countdown/></div>
                                  </div>
                                </div>
                              </div>
                          </div>
                      </div>
                      <br/>
                  </div>
                  </div>
                  <div className="full-width-container white">
                    <div className="container">
                  <div className="row top bottom">
                    <div className="twelve columns center">
                      <Link className="btn-share btn-facebook" to="#" >
                          <i class="fab fa-facebook-square"></i>
                          <p>&nbsp; Compartilhar</p>
                      </Link>
                      <Link className="btn-share btn-whatsapp" to="#" >
                          <i class="fab fa-whatsapp"></i>
                          <p>&nbsp; Compartilhar</p>
                      </Link>
                    </div>
                  </div>
                  <div className="row bottom">
                    <div className="twelve columns">
                      <img className="fluid" src={banner} alt="banner"/>
                    </div>
                  </div>
                  <div className="row">
                    <div className="twelve columns fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="100%" data-numposts="5"></div>
                  </div>
                  </div>
                  </div>
                  <div style={{ 'text-align': 'center', 'color': 'white', 'font-size': '1em' }}>
                    <h3> Tempo para acessar o restante das landings:</h3>
                    <Countdown/>
                  </div>
                  <Footer/>
              </div>
          </Layout>
        );
    }
}

export default SubscriptionConfirmationPage;
