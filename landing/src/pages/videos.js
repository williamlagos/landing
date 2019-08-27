import React from "react";
import Helmet from "react-helmet";
// import { Link } from "gatsby"
import { Image } from 'grommet'
// import { Location } from '@react/router';

import Layout from '../components/layout';
// import Countdown from '../components/Countdown';
import Footer from '../components/Footer';

// import banner from "../assets/img/banner.png";
// import landing01 from "../assets/img/video_play.png";
import mohublogo from "../assets/img/mohub_white.png";
import testimonial from "../assets/img/testimonial.png"
import Background from "../assets/img/backgrounds/bg-01.png";
const parallaxBackground = { backgroundImage: `url(${Background})` };
// const videoplaBackground = { backgroundImage: `url(${landing01})` };

class SubscriptionConfirmationPage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        ytid: '-it-OH7pxK4',
        step: 2
      }
    }

    async componentDidMount() {
      const id = window.location.search.slice(1).split("&")[0].split("=")[1];
      const res = await fetch(`http://api.mohub.com.br/leads?id=${id}`);
      // Controle por dias, comparativo entre datas
      // Math.floor((Date.now()/1000 - res.json()[0]['created']/1000)/84600)
      this.setState({ step: 3 });
      console.log(res.json())
      // console.log(id)
    }

    render() {
      const appId = "2267639403332673"
        const siteTitle = "MoHub";
        // const title = "MoHub";
        // const summary = "Uma post teste para o Mohub";
        // const url = "https://www.facebook.com/somosmohub/videos/2562218477149895/";
        const url = "http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html";
        const quote = "Veja que vídeo interessante"
        // const image = "https://efforia.ams3.digitaloceanspaces.com/fretefacil/5b75d00d5ab5c60da7116276_bg.png"
        /*&p[images][0]=${image}'*/
        // let shareUrl = `http://www.facebook.com/sharer.php?s=100&p[title]=${title}&p[summary]=${summary}&p[url]=${url},'sharer','toolbar=0,status=0,width=580,height=325`;
        // shareUrl = `https://www.facebook.com/sharer.php?u=${url}`
        const shareDialog = `https://www.facebook.com/dialog/share?app_id=${appId}&display=popup&href=${url}&quote=${quote}`/*&redirect_uri=${url}`*/
        return (
          <Layout>
              <Helmet title={siteTitle}>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
                <link href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" rel="stylesheet" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"/>
                <div id="fb-root"></div>
                <meta property="og:url"                content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html" />
                <meta property="og:type"               content="article" />
                <meta property="og:title"              content="When Great Minds Don’t Think Alike" />
                <meta property="og:description"        content="How much does culture influence creative thinking?" />
                <meta property="og:image"              content="http://static01.nyt.com/images/2015/02/19/arts/international/19iht-btnumbers19A/19iht-btnumbers19A-facebookJumbo-v2.jpg" />
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
                                    {/*<img className="fluid" src={landing01} alt="video 1"/>*/}
                                    <iframe title="player" id="ytplayer" type="text/html" width="100%" height="400"
                                      src={`http://www.youtube.com/embed/${this.state.ytid}/?autoplay=0`}
                                      frameborder="0"/>
                                  </div>
                                  <div className="flex-right">
                                    <button className="block" onClick={() => this.setState({ ytid: "IesIsKMjB4Y" })}>
                                      <div className="video" style={{ backgroundImage: "url('https://img.youtube.com/vi/IesIsKMjB4Y/0.jpg')", backgroundSize: 'auto' }}>
                                        <div className="overlay">
                                          <div className="overlay-content">
                                            <i class="fas fa-play"></i>
                                            {/*<h1>07/05</h1>*/}
                                          </div>
                                        </div>
                                      </div>
                                    </button>
                                    <button className="block" onClick={() => this.setState({ ytid: "4dwjS_eI-lQ" })}>
                                      <div className="video" style={{ backgroundImage: "url('https://img.youtube.com/vi/4dwjS_eI-lQ/0.jpg')", backgroundSize: 'auto' }}>
                                        <div className={this.state.step > 1 ? 'overlay' : 'overlay green'}>
                                          <div className="overlay-content">
                                            {
                                              this.state.step > 1 ? (<i class="fas fa-play"></i>) : (
                                                <>
                                                  <i class="fas fa-lock"></i>
                                                  <h1>14/05</h1>
                                                </>
                                              )
                                            }
                                          </div>
                                        </div>
                                      </div>
                                    </button>
                                    <button className="block" onClick={() => this.setState({ ytid: "RRuovINxpPc" })}>
                                      <div className="video" style={{ backgroundImage: "url('https://img.youtube.com/vi/RRuovINxpPc/0.jpg')", backgroundSize: 'auto' }}>
                                        <div className={this.state.step > 2 ? 'overlay' : 'overlay green'}>
                                          <div className="overlay-content">
                                            {
                                              this.state.step > 2 ? (<i class="fas fa-play"></i>) : (
                                                <>
                                                  <i class="fas fa-lock"></i>
                                                  <h1>21/05</h1>
                                                </>
                                              )
                                            }
                                          </div>
                                        </div>
                                      </div>
                                    </button>
                                    <button className="block last" onClick={() => this.setState({ ytid: "YgVyPwhkoJs" })}>
                                      <div className="video" style={{ backgroundImage: "url('https://img.youtube.com/vi/YgVyPwhkoJs/0.jpg')", backgroundSize: 'auto' }}>
                                        <div className={this.state.step > 3 ? 'overlay' : 'overlay green'}>
                                          <div className="overlay-content">
                                            {
                                              this.state.step > 3 ? (<i class="fas fa-play"></i>) : (
                                                <>
                                                  <i class="fas fa-lock"></i>
                                                  <h1>28/05</h1>
                                                </>
                                              )
                                            }
                                          </div>
                                        </div>
                                      </div>
                                    </button>
                                    {/*<h5>  Tempo para acessar o restante das landings:</h5>
                                    <div style={{ 'display': 'none' }}><Countdown/></div>*/}
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
                      <button id="fb-share"
                        className="btn-facebook"
                        style={{ textDecoration: 'none' }}
                        type="icon_link"
                        onClick={() => window.open(shareDialog)}>
                        <i class="fab fa-facebook-square"></i>
                        &nbsp; Compartilhar
                      </button>
                      <p/>
                      {/*<Link className="btn-share btn-whatsapp" to="#" >
                          <i class="fab fa-whatsapp"></i>
                          <p>&nbsp; Compartilhar</p>
                      </Link>*/}
                    </div>
                  </div>
                  {/*<div className="row bottom">
                    <div className="twelve columns">
                      <img className="fluid" src={banner} alt="banner"/>
                    </div>
                  </div>*/}
                  <div className="row">
                    <div className="nine columns">
                      <h3>Comente no Facebook</h3>
                      <div class="fb-comments" data-href="https://www.facebook.com/somosmohub" data-width="100%" data-numposts="5"></div>
                    </div>
                    <div className="three columns">
                      <h3>Depoimentos</h3>
                      <div className="row top">
                        <div className="twelve columns">
                             <iframe id="ytplayer" type="text/html" width="100%" height="100%"
                                      src={`http://www.youtube.com/embed/${this.state.ytid}/?autoplay=0`}
                                      frameborder="0"/>
                          <p>O negócio é fantástico. Foi a primeira coisa que eu fiz quando
                            eu completei 18 anos. O Sperry ocupou o espaço que era do Érico Rocha.</p>
                          <p>Guilherme Petrickicz</p>
                        </div>
                      </div>
                      <div className="row top">
                        <div className="twelve columns">
                             <iframe id="ytplayer" type="text/html" width="100%" height="100%"
                                      src={`http://www.youtube.com/embed/${this.state.ytid}/?autoplay=0`}
                                      frameborder="0"/>
                          <p>O negócio é fantástico. Foi a primeira coisa que eu fiz quando
                            eu completei 18 anos. O Sperry ocupou o espaço que era do Érico Rocha.</p>
                          <p>Guilherme Petrickicz</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>
                  {/*<div style={{ 'text-align': 'center', 'color': 'white', 'font-size': '1em' }}>
                    <h3> Tempo para acessar o restante das landings:</h3>
                    <Countdown/>
                  </div>*/}
                  <Footer/>
              </div>
          </Layout>
        );
    }
}

export default SubscriptionConfirmationPage;
