import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { Box, Image, Stack, Text, Heading,/*, Button, Layer, Form, FormField*/ } from 'grommet'

import Footer from "../components/Footer";
import Layout from '../components/layout';
import Container from '../components/Container';
import Background from "../assets/img/backgrounds/bg-01.png";
import MohubLogo from "../assets/img/mohub_white.png";
import landing01 from "../assets/img/video.png";
import testimonial from "../assets/img/testimonial.png"
import shield from "../assets/img/shield.png"
import bulb from "../assets/img/bulb.png"
import lock from "../assets/img/lock.png"
import full from "../assets/img/full.png"

/*const parallaxBackground = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover'
};*/

class SalesPage extends React.Component {
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
      <Layout>
          <Helmet title={siteTitle}>
            <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700" rel="stylesheet"/>
            <link href="https://use.fontawesome.com/releases/v5.8.2/css/all.css" rel="stylesheet" integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous"/>
          </Helmet>
          <Box id="cover2" justify="between" background={`url(${Background})`} fill="true">
            <Container>
                <div className="row">
                    <div className="offset-by-one ten columns">
                        <div className="center spacing">
                          <img src={MohubLogo} alt="mohub logo"/>
                        </div>
                        <div className="text white">
                          {/*<div className="red">Importante! Assista ao vídeo abaixo!</div>*/}
                          <img className="fluid" src={landing01} alt="video 1"/>
                          <Box align="center" pad="medium">
                            <br/>
                            <Link id="bigbutton" className="btn" to="videos/" >
                              &nbsp; Faça parte da MoHub
                            </Link>
                          </Box>
                          <div className="row top">
                            {/*<h1 className="two columns big">1</h1>*/}
                            <div className="twelve columns">
                              <h4 className="uppercase">Pessoas já impactadas</h4>
                              <Box margin={{ "vertical": "medium" }} direction="row" gap="medium">
                                <Image src={testimonial}/>
                                <Image src={testimonial}/>
                                <Image src={testimonial}/>
                              </Box>
                              <Box direction="row" gap="medium">
                                <Image src={testimonial}/>
                                <Image src={testimonial}/>
                                <Image src={testimonial}/>
                              </Box>
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
            </Container>
            <Image margin={{ "vertical": "medium" }} src={full} fill={true}/>
            <Container>
              <Box id="shadow" align="center" pad="large" margin={{ "vertical": "medium" }}>
                <Box direction="row" gap="medium">
                  <div style={{ textAlign: "center" }}>
                    <Image src={lock}/>
                    <h5>Acesso Imediato</h5>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Image src={bulb}/>
                    <h5>Mentoria Exclusiva</h5>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Image src={shield}/>
                    <h5>Investimento 100% seguro</h5>
                  </div>
                </Box>
                <br/>
                <Link id="bigbutton" className="btn" to="videos/" >
                  &nbsp; Faça parte da MoHub
                </Link>
              </Box>
              <Box margin={{ "vertical": "medium" }}>
                <Heading level={2} className="uppercase">O que você ganha ao entrar para a MoHub?</Heading>
                <div className="row">
                  <Stack className="six columns blue" anchor="top-left">
                    <Heading className="title" level={2}>O Seu Ponto de Partida</Heading>
                    <Box pad={{ "vertical": "36px" }} className="blue-gradient">
                      <Heading textAlign="center" level={3}>Box 1</Heading>
                    </Box>
                    <Box className="text">
                      <Text size="small">
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                        Vivamus suscipit tortor eget felis porttitor volutpat. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
                        quis lorem ut libero malesuada feugiat.
                      </Text>
                    </Box>
                    <Box margin={{"left": "220px", "top": "270px"}} anchor="center">
                      <Heading className="risked" level={1}>
                        R$ 879,00
                      </Heading>
                    </Box>
                  </Stack>
                  <Stack className="six columns blue" anchor="top-left">
                    <Heading className="title" level={2}>O seu destino</Heading>
                    <Box pad={{ "vertical": "36px" }} className="blue-gradient">
                      <Heading textAlign="center" level={3}>Box 2</Heading>
                    </Box>
                    <Box className="text">
                      <Text size="small">
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                        Vivamus suscipit tortor eget felis porttitor volutpat. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
                        quis lorem ut libero malesuada feugiat.
                      </Text>
                    </Box>
                    <Box margin={{"left": "220px", "top": "270px"}} anchor="center">
                      <Heading className="risked" level={1}>
                        R$ 879,00
                      </Heading>
                    </Box>
                  </Stack>
                </div>
                <div className="row" style={{ "margin-top": "40px" }}>
                  <Stack className="twelve columns blue" anchor="top-left">
                    <Box pad={{ "vertical": "36px" }} className="blue-gradient">
                      <Heading textAlign="center" level={3}>Box 3</Heading>
                    </Box>
                    <Box className="text" width="70%">
                      <Heading level={2}>De Onde Vem o Dinheiro</Heading>
                      <Text size="small">
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                        Vivamus suscipit tortor eget felis porttitor volutpat. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
                        quis lorem ut libero malesuada feugiat.
                      </Text>
                    </Box>
                    <Box margin={{"left": "720px", "top": "210px"}} anchor="center">
                      <Heading className="risked" level={1}>
                        R$ 879,00
                      </Heading>
                    </Box>
                  </Stack>
                </div>
                <div className="row" style={{ "margin": "20px 0px" }}>
                  <Stack className="four columns blue-high" anchor="top-left">
                    <Box pad={{ "vertical": "36px" }} className="blue-gradient">
                      <Heading textAlign="center" level={3}>Box 4</Heading>
                    </Box>
                    <Box className="title-under">
                      <Heading level={2}>Momentum Bot</Heading>
                      <Text size="small">
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                        Vivamus suscipit tortor eget felis porttitor volutpat. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
                        quis lorem ut libero malesuada feugiat.
                      </Text>
                    </Box>
                    <Box margin={{"left": "20px", "top": "430px"}} anchor="center">
                      <Heading className="risked" level={2}>
                        R$ 879,00
                      </Heading>
                    </Box>
                  </Stack>
                  <Stack className="four columns blue-high" anchor="top-left">
                    <Box pad={{ "vertical": "36px" }} className="blue-gradient">
                      <Heading textAlign="center" level={3}>Box 5</Heading>
                    </Box>
                    <Box className="title-under">
                      <Heading level={2}>Escola de Negócios</Heading>
                      <Text size="small">
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                        Vivamus suscipit tortor eget felis porttitor volutpat. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
                        quis lorem ut libero malesuada feugiat.
                      </Text>
                    </Box>
                    <Box margin={{"left": "20px", "top": "430px"}} anchor="center">
                      <Heading className="risked" level={2}>
                        R$ 879,00
                      </Heading>
                    </Box>
                  </Stack>
                  <Stack className="four columns blue-high" anchor="top-left">
                    <Box pad={{ "vertical": "36px" }} className="blue-gradient">
                      <Heading textAlign="center" level={3}>Box 6</Heading>
                    </Box>
                    <Box className="title-under">
                      <Heading level={2}>O Seu Próprio Negócio</Heading>
                      <Text size="small">
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                        Vivamus suscipit tortor eget felis porttitor volutpat. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
                        quis lorem ut libero malesuada feugiat.
                      </Text>
                    </Box>
                    <Box margin={{"left": "20px", "top": "430px"}} anchor="center">
                      <Heading className="risked" level={2}>
                        R$ 879,00
                      </Heading>
                    </Box>
                  </Stack>
                </div>
              </Box>
              <Box><Heading>PERGUNTAS FREQUENTES</Heading></Box>
              <Box id="shadow" align="center" pad="large" margin={{ "vertical": "medium" }}>
                <Box direction="row" gap="medium">
                  <div style={{ textAlign: "center" }}>
                    <Image src={lock}/>
                    <h5>Acesso Imediato</h5>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Image src={bulb}/>
                    <h5>Mentoria Exclusiva</h5>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Image src={shield}/>
                    <h5>Investimento 100% seguro</h5>
                  </div>
                </Box>
                <br/>
                <Link id="bigbutton" className="btn" to="videos/" >
                  &nbsp; Faça parte da MoHub
                </Link>
              </Box>
            </Container>
            <Box><Footer/></Box>
          </Box>
      </Layout>
    );
  }
}

export default SalesPage;
