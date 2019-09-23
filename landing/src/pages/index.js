import React from 'react'
import Helmet from 'react-helmet'
import { /*Link,*/ navigate } from 'gatsby'
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
      nameErrorMessage: '',
      emailErrorMessage: '',
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
    const rawResponse = await fetch('http://mohub-api.herokuapp.com/leads/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, name })
    });
    const content = await rawResponse.json()
    if (content._id === 0) {
      this.setState({ emailErrorMessage: 'E-mail inválido. Digite novamente' })
    } else {
      window.localStorage.setItem(content._id, content.createdAt);
      navigate(`/home?id=${content._id}`)
    }
  }

  render() {
    const siteTitle = "MoHub"
    return (
      <Layout style={parallaxBackground}>
        <Helmet title={siteTitle}>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
          <title>MoHub</title>
          <meta name="title" content="MoHub" />
          <meta name="description" content="Saiba o que brasileiros comuns estão fazendo para prosperar esse ano" />

          <meta property="og:type" content="website"/>
          <meta property="og:url" content="http://www.mohub.com.br/"/>
          <meta property="og:title" content="MoHub"/>
          <meta property="og:description" content="Saiba o que brasileiros comuns estão fazendo para prosperar esse ano"/>
          <meta property="og:image" content="https://ams3.digitaloceanspaces.com/efforia/mohub/sharing.jpg"/>

          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://www.mohub.com.br/"/>
          <meta property="twitter:title" content="MoHub"/>
          <meta property="twitter:description" content="Saiba o que brasileiros comuns estão fazendo para prosperar esse ano"/>
          <meta property="twitter:image" content="https://ams3.digitaloceanspaces.com/efforia/mohub/sharing.jpg"/>
        </Helmet>
        <Box id="index" justify="between" background={`url(${Background})`} fill={true}>
          <div className="container-fluid">
          <Container>
            <Box className="six columns" pad="medium">
              <br/>
              <Image className="mohub-logo" alignSelf="start" fallback="MoHub Logo" fit="contain" src={MohubLogo}/>
              <Heading level="2" style={{ "margin": "50px 0px", "fontWeight": "bolder" }}> Saiba o que mais de
              <div style={{ "color": "#0385e3", "textTransform": "uppercase" }}> 5.000 brasileiros </div> comuns estão fazendo para prosperar em 2019 </Heading>
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
                  <FormField name="name" error={this.state.nameErrorMessage} label="Nome" />
                  <FormField name="email" error={this.state.emailErrorMessage} label="E-mail" />
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
