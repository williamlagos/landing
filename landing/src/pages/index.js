import React from "react";
import Helmet from "react-helmet";
import { Link } from "gatsby"

import Footer from "../components/Footer";
import Layout from '../components/layout';
import Modal from '../components/Modal';
import Background from "../assets/img/backgrounds/bg.png";
import MohubLogo from "../assets/img/mohub.png";
const parallaxBackground = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover'
};

class HomePage extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        toggledModal: false
      }
    }

    toggleModal(event) {
      event.preventDefault()
      this.setState({ toggledModal: true })
    }

    dismissModal() {
      this.setState({ toggledModal: false })
    }

    render() {
        const siteTitle = "MoHub";
        return (
            <Layout style={parallaxBackground}>
                <Helmet title={siteTitle}>
                  <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
                </Helmet>
                {/*<Header></Header>*/}
                <div className="page">
                  <div className="container">
                        <div className="row">
                            <div className="six columns">
                              <br/>
                              <img alt="MoHub Logo" className="mohub-logo" src={MohubLogo}/>
                              <h3 style={{ "margin": "50px 0px", "font-weight": "bolder" }}> Saiba o que mais de
                              <div style={{ "color": "#0385e3", "text-transform": "uppercase" }}> 5.000 brasileiros </div> comuns estão fazendo para prosperar em 2019 </h3>
                              <Link className="btn" to="home/" >
                                  Quero saber
                               </Link>
                            </div>
                        </div>
                    </div>
                    <button style={{ 'border-radius': 0, 'border': 0, 'margin-bottom': 0 }} className="btn" onClick={e => this.toggleModal(e)}>Cadastrar e-mail</button>

                    <Footer/>
                </div>
                {this.state.toggledModal && <Modal onDismiss={() => this.dismissModal()}/>}

            </Layout>
        );
    }
}

export default HomePage;
