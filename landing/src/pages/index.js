import React from 'react'
import Helmet from 'react-helmet'
import { Link, navigate } from 'gatsby'
import { Box, /*Button,*/ Image, Heading, Layer, Form, FormField } from 'grommet'

import Footer from "../components/Footer";
import Layout from '../components/layout';
import Container from '../components/Container';
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

  async getLead(event) {
    const { email, name } = event.value;
    const rawResponse = await fetch('http://localhost:5000/leads/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, name })
    });
    const content = await rawResponse.json()
    navigate(`/home?id=${content._id}`)
  }

  render() {
    const siteTitle = "MoHub"
    return (
      <Layout style={parallaxBackground}>
        <Helmet title={siteTitle}>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
        </Helmet>
        <Box id="index" justify="between" background={`url(${Background})`} fill="true">
          <div className="container-fluid">
          <Container>
            <Box className="six columns" pad="medium">
              <br/>
              <Image className="mohub-logo" alignSelf="start" fallback="MoHub Logo" fit="contain" src={MohubLogo}/>
              <Heading level="2" style={{ "margin": "50px 0px", "font-weight": "bolder" }}> Saiba o que mais de
              <div style={{ "color": "#0385e3", "text-transform": "uppercase" }}> 5.000 brasileiros </div> comuns estão fazendo para prosperar em 2019 </Heading>
              <button className="btn gradient" onClick={e => this.toggleModal(e)}>Quero saber</button>
              <br/>
            </Box>
          </Container>
          </div>
          {this.state.toggledModal && (
            <Layer
              onEsc={(e) => this.dismissModal(e)}
              onClickOutside={(e) => this.dismissModal(e)}
            >
              <Box pad="medium">
                <Form onSubmit={(e) => this.getLead(e)} id="email">
                  <Heading level="2">Cadastre o seu e-mail agora!</Heading>
                  <FormField name="name" label="Nome" />
                  <FormField name="email" label="E-mail" />
                  <button className="btn gradient" style={{ width: '100%' }}>
                  <input type="submit" style={{ textDecoration: 'none', color: 'white', background: 'none', border: 'none'}} value="Cadastrar" />
                  </button>
                </Form>
              </Box>
            </Layer>
          )}
          <Box>
            {/*<button
              className="btn gradient"
              style={{ 'border-radius': 0, 'border': 0, 'margin-bottom': 0 }}
              onClick={e => this.toggleModal(e)}>
              Cadastrar e-mail
            </button>*/}
            <Footer/>
          </Box>
        </Box>
      </Layout>
    );
  }
}

export default HomePage;
