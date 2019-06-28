import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { Box, Button, Image, Heading, Layer, Form, FormField } from 'grommet'

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

  render() {
    const siteTitle = "MoHub"
    return (
      <Layout style={parallaxBackground}>
        <Helmet title={siteTitle}>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
        </Helmet>
        <Box justify="between" background={`url(${Background})`} fill="true">
          <Container>
            <Box className="six columns" pad="medium">
              <br/>
              <Image className="mohub-logo" alignSelf="start" fallback="MoHub Logo" fit="contain" src={MohubLogo}/>
              <Heading level="2" style={{ "margin": "50px 0px", "font-weight": "bolder" }}> Saiba o que mais de
              <div style={{ "color": "#0385e3", "text-transform": "uppercase" }}> 5.000 brasileiros </div> comuns estão fazendo para prosperar em 2019 </Heading>
              <Button><Link className="btn" to="home/">Quero saber</Link></Button>
            </Box>
          </Container>
          {this.state.toggledModal && (
            <Layer
              onEsc={(e) => this.dismissModal(e)}
              onClickOutside={(e) => this.dismissModal(e)}
            >
              <Box pad="medium">
                <Form>
                  <Heading level="2">Cadastre o seu e-mail agora!</Heading>
                  <FormField name="email" label="E-mail" />
                  <Button style={{ width: '100%' }} plain type="submit" label="Cadastrar" onClick={(e) => this.dismissModal(e)} className="btn"/>
                </Form>
              </Box>
            </Layer>
          )}
          <Box>
            <Button
              plain
              className="btn"
              style={{ 'border-radius': 0, 'border': 0, 'margin-bottom': 0 }}
              onClick={e => this.toggleModal(e)}
              label="Cadastrar e-mail"/>
            <Footer/>
          </Box>
        </Box>
      </Layout>
    );
  }
}

export default HomePage;
