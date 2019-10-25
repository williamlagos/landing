import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
// import { Image } from 'grommet'
// import { Location } from '@react/router';

import Layout from '../components/layout'
// import Countdown from '../components/Countdown';
import Footer from '../components/Footer'

// import banner from "../assets/img/banner.png";
// import landing01 from "../assets/img/video_play.png";
import mohublogo from '../assets/img/mohub_white.png'
// import testimonial from "../assets/img/testimonial.png"
import Background from '../assets/img/backgrounds/bg-01.png'
const parallaxBackground = { backgroundImage: `url(${Background})` }
// const videoplaBackground = { backgroundImage: `url(${landing01})` };

class SubscriptionConfirmationPage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      ytid: '-it-OH7pxK4',
      step: 2
    }
  }

  async timer (id) {
    // Math.floor((Date.now()/1000 - res.json()[0]['created']/1000)/84600)
    // const res = await fetch(`http://mohub-api.herokuapp.com/leads/${id}`)
    // const lead = await res.json()
    const day = 1000 * 60 * 60 * 24
    const today = new Date()
    // const createdDay = new Date(lead.createdAt)
    const createdDay = new Date()
    const result = Math.round(today.getTime() - createdDay.getTime()) / (day)
    return result.toFixed(0)
  }

  async componentDidMount () {
    const id = window.location.search.slice(1).split('&')[0].split('=')[1]
    if (id == null) {
      // window.location = '/';
    } else {
      // Controle por dias, comparativo entre datas
      // const step = await this.timer(id);
      const step = 0
      this.setState({ step })
      if (step >= 7) {
        // Sales page
        window.location = '/sales'
      } else if (step >= 15) {
        // Blacklisted
        window.location = '/'
      }
    }
  }

  render () {
    const appId = '2267639403332673'
    const siteTitle = 'MoHub'
    // const title = "MoHub";
    // const summary = "Uma post teste para o Mohub";
    // const url = "https://www.facebook.com/somosmohub/videos/2562218477149895/";
    const url = 'http://www.mohub.com.br/?id=5d6d640ef5dd0c0004ee1267&utm_source=facebook&utm_medium=share&utm_campaign=cpl'
    const quote = 'Veja que negócio interessante'
    // const image = "https://efforia.ams3.digitaloceanspaces.com/fretefacil/5b75d00d5ab5c60da7116276_bg.png"
    /* &p[images][0]=${image}' */
    // let shareUrl = `http://www.facebook.com/sharer.php?s=100&p[title]=${title}&p[summary]=${summary}&p[url]=${url},'sharer','toolbar=0,status=0,width=580,height=325`;
    // shareUrl = `https://www.facebook.com/sharer.php?u=${url}`
    const shareDialog = `https://www.facebook.com/dialog/share?app_id=${appId}&display=popup&href=${url}&quote=${quote}`/* &redirect_uri=${url}` */
    return (
      <Layout>
        <Helmet title={siteTitle}>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
          <link href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" rel="stylesheet" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossOrigin="anonymous"/>
          <div id="fb-root"></div>
          <div id="fb-root"></div>
          <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v4.0&appId=153246718126522&autoLogAppEvents=1"></script>
          <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v3.3&appId=153246718126522&autoLogAppEvents=1"></script>
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
                    {/* <div className="description">Importante! Assista ao vídeo abaixo!</div> */}
                    <div className="flex">
                      <div className="flex-left">
                        {/* <img className="fluid" src={landing01} alt="video 1"/> */}
                        <iframe title="player" id="ytplayer" type="text/html" width="100%" height="400"
                          src={`http://www.youtube.com/embed/${this.state.ytid}/?autoplay=1`}
                          frameBorder="0"/>
                      </div>
                      <div className="flex-right">
                        <button className="block" onClick={() => this.setState({ ytid: 'IesIsKMjB4Y' })}>
                          <div className="video" style={{ backgroundImage: "url('https://img.youtube.com/vi/IesIsKMjB4Y/0.jpg')", backgroundSize: 'auto' }}>
                            <div className="overlay">
                              <div className="overlay-content">
                                <i className="fas fa-play"></i>
                                {/* <h1>07/05</h1> */}
                              </div>
                            </div>
                          </div>
                        </button>
                        <button className="block" onClick={() => this.setState({ ytid: '4dwjS_eI-lQ' })}>
                          <div className="video" style={{ backgroundImage: "url('https://img.youtube.com/vi/4dwjS_eI-lQ/0.jpg')", backgroundSize: 'auto' }}>
                            <div className={this.state.step > 1 ? 'overlay' : 'overlay green'}>
                              <div className="overlay-content">
                                {
                                  this.state.step > 2 ? (<i className="fas fa-play"></i>) : (
                                    <>
                                      <i className="fas fa-lock"></i>
                                      <h1>14/05</h1>
                                    </>
                                  )
                                }
                              </div>
                            </div>
                          </div>
                        </button>
                        <button className="block" onClick={() => this.setState({ ytid: 'RRuovINxpPc' })}>
                          <div className="video" style={{ backgroundImage: "url('https://img.youtube.com/vi/RRuovINxpPc/0.jpg')", backgroundSize: 'auto' }}>
                            <div className={this.state.step > 2 ? 'overlay' : 'overlay green'}>
                              <div className="overlay-content">
                                {
                                  this.state.step > 4 ? (<i className="fas fa-play"></i>) : (
                                    <>
                                      <i className="fas fa-lock"></i>
                                      <h1>21/05</h1>
                                    </>
                                  )
                                }
                              </div>
                            </div>
                          </div>
                        </button>
                        <button className="block last" onClick={() => this.setState({ ytid: 'YgVyPwhkoJs' })}>
                          <div className="video" style={{ backgroundImage: "url('https://img.youtube.com/vi/YgVyPwhkoJs/0.jpg')", backgroundSize: 'auto' }}>
                            <div className={this.state.step > 3 ? 'overlay' : 'overlay green'}>
                              <div className="overlay-content">
                                {
                                  this.state.step > 6 ? (<i className="fas fa-play"></i>) : (
                                    <>
                                      <i className="fas fa-lock"></i>
                                      <h1>28/05</h1>
                                    </>
                                  )
                                }
                              </div>
                            </div>
                          </div>
                        </button>
                        {/* <h5>  Tempo para acessar o restante das landings:</h5>
                                    <div style={{ 'display': 'none' }}><Countdown/></div> */}
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
                <div className="six columns center">
                  <button id="fb-share"
                    className="btn-facebook"
                    style={{ textDecoration: 'none' }}
                    type="icon_link"
                    onClick={() => window.open(shareDialog)}>
                    <i className="fab fa-facebook-square"></i>
                        &nbsp; Compartilhar
                  </button>
                  <p/>
                </div>
                <div className="six columns center">
                  <Link className="btn-share btn-whatsapp" to="#" >
                    <i className="fab fa-whatsapp"></i>
                    <p>&nbsp; Compartilhar</p>
                  </Link>
                </div>
                <div className="twelve columns center">
                  <div className="fb-page" data-href="https://www.facebook.com/somosmohub/" data-tabs="" data-width="500px" data-height="70px" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/somosmohub/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/somosmohub/">MoHub</a></blockquote></div>
                </div>
              </div>
              {/* <div className="row bottom">
                    <div className="twelve columns">
                      <img className="fluid" src={banner} alt="banner"/>
                    </div>
                  </div> */}
              <div className="row">
                <div className="nine columns">
                  <h3>Comente no Facebook</h3>
                  <div className="fb-comments" data-href="https://www.facebook.com/somosmohub" data-width="100%" data-numposts="5"></div>
                </div>
                <div className="three columns">
                  <h3>Depoimentos</h3>
                  <div className="row top">
                    <div className="twelve columns">
                      <iframe title="embed1" id="ytplayer" type="text/html" width="100%" height="100%"
                        src={`http://www.youtube.com/embed/${this.state.ytid}/?autoplay=1`}
                        frameBorder="0"/>
                      <p>O negócio é fantástico. Foi a primeira coisa que eu fiz quando
                            eu completei 18 anos. O Sperry ocupou o espaço que era do Érico Rocha.</p>
                      <p>Guilherme Petrickicz</p>
                    </div>
                  </div>
                  <div className="row top">
                    <div className="twelve columns">
                      <iframe title="embed2" id="ytplayer" type="text/html" width="100%" height="100%"
                        src={`http://www.youtube.com/embed/${this.state.ytid}/?autoplay=1`}
                        frameBorder="0"/>
                      <p>O negócio é fantástico. Foi a primeira coisa que eu fiz quando
                            eu completei 18 anos. O Sperry ocupou o espaço que era do Érico Rocha.</p>
                      <p>Guilherme Petrickicz</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div style={{ 'text-align': 'center', 'color': 'white', 'font-size': '1em' }}>
                    <h3> Tempo para acessar o restante das landings:</h3>
                    <Countdown/>
                  </div> */}
          <Footer/>
        </div>
      </Layout>
    )
  }
}

export default SubscriptionConfirmationPage
