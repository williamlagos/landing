import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { Box, Image, Stack, Text, Heading, Collapsible, Button /*Layer, Form, FormField*/ } from 'grommet'

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
import gift from "../assets/img/gift.png"
import bag from "../assets/img/bag.png"
import champ from "../assets/img/champ.png"

import minus from "../assets/img/minus.png"
import plus from "../assets/img/plus.png"

import box1 from "../assets/img/box.png"

/*const parallaxBackground = {
  backgroundImage: `url(${Background})`,
  backgroundPosition: 'center',
  backgroundSize: 'cover'
};*/

class SalesPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggledModal: false,
      collapsed1: false,
      collapsed2: false,
      collapsed3: false,
      collapsed4: false,
      collapsed5: false,
      collapsed6: false
    }
  }

  toggleModal(event) {
    event.preventDefault()
    this.setState({ toggledModal: true })
  }

  dismissModal() {
    this.setState({ toggledModal: false })
  }

  switchCollapsible1() {
    this.setState({ collapsed1: this.state.collapsed1 ? false : true })
  }

  switchCollapsible2() {
    this.setState({ collapsed2: this.state.collapsed2 ? false : true })
  }

  switchCollapsible3() {
    this.setState({ collapsed3: this.state.collapsed3 ? false : true })
  }

  switchCollapsible4() {
    this.setState({ collapsed4: this.state.collapsed4 ? false : true })
  }

  switchCollapsible5() {
    this.setState({ collapsed5: this.state.collapsed5 ? false : true })
  }

  switchCollapsible6() {
    this.setState({ collapsed6: this.state.collapsed6 ? false : true })
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
                            <Link id="bigbutton" className="btn" to="/" >
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
                <a id="bigbutton" className="btn" href="#sales" >
                  &nbsp; Faça parte da MoHub
                </a>
              </Box>
              <Box id="sales" margin={{ "vertical": "medium" }}>
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
              <Box pad="medium" direction="row" background="#42434e" fill="horizontal">
                <Box className="right-gradient" alignSelf="center" pad="medium" basis="30%">
                  <Image margin="medium" fit="contain" src={gift}/>
                  <Heading textAlign="center">2 BÔNUS</Heading>
                  <Heading textAlign="center" className="risked" level={2}>
                    R$ 879,00
                  </Heading>
                </Box>
                <Box alignSelf="center" basis="70%">
                  <Box alignSelf="center" direction="row">
                    <Box alignSelf="center" pad="medium" basis="30%">
                      <Image margin="small" fit="contain" src={champ}/>
                      <Heading textAlign="center" level={2}>Bônus 1</Heading>
                    </Box>
                    <Box pad="medium" basis="70%">
                      <Heading level={2}>Como Sair das Dívidas</Heading>
                      <Text size="small">
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                        Vivamus suscipit tortor eget felis porttitor volutpat. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
                        quis lorem ut libero malesuada feugiat.
                      </Text>
                    </Box>
                  </Box>
                  <Box alignSelf="center" direction="row">
                    <Box alignSelf="center" pad="medium" basis="30%">
                      <Image margin="small" fit="contain" src={bag}/>
                      <Heading textAlign="center" level={2}>Bônus 2</Heading>
                    </Box>
                    <Box pad="medium" basis="70%">
                      <Heading level={2}>Dicas de Renda Extra</Heading>
                      <Text size="small">
                        Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                        Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
                        Vivamus suscipit tortor eget felis porttitor volutpat. Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        arcu erat, accumsan id imperdiet et, porttitor at sem. Nulla
                        quis lorem ut libero malesuada feugiat.
                      </Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box margin="medium"></Box>
            </Container>
            <Image margin={{ "vertical": "medium" }} src={box1}/>
            <Container>
              <Box margin="medium"></Box>
              <Box>
                <Heading>PERGUNTAS FREQUENTES</Heading>
                <Stack className="stack" anchor="right">
                  <Button fill={true} className="gray-button" plain={true} onClick={(e) => this.switchCollapsible1()} label='Será que isso funciona pra mim?'/>
                  <Image className="gray-symbol" pad="medium" size="contain" src={this.state.collapsed1 ? minus : plus}/>
                </Stack>
                <Collapsible direction="vertical" open={this.state.collapsed1}>
                  <Box pad="medium" background="#e1e1e7">
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum auctor magna eget volutpat.
                    Nam sagittis ex eget mollis vestibulum. Donec vestibulum ullamcorper nisi, ac lacinia arcu dictum
                    vitae. Nunc varius sed elit sit amet laoreet. Integer convallis sagittis semper. Proin libero leo,
                    vestibulum ac consectetur vel, fermentum consectetur magna. Nunc lacinia, lorem quis mattis placerat,
                    velit tellus luctus turpis, non gravida quam metus quis enim. Cras et ipsum libero. Praesent libero
                    libero, pretium vehicula orci non, feugiat elementum justo. Maecenas elit leo, vulputate id tortor
                    quis, convallis molestie tellus. Phasellus nec mi sit amet libero hendrerit bibendum nec id urna.
                    Praesent vel malesuada eros. Nulla eleifend purus id risus mollis congue eget et ex.
                    </Text>
                  </Box>
                </Collapsible>
                <Stack className="stack" anchor="right">
                  <Button fill={true} className="gray-button" plain={true} onClick={(e) => this.switchCollapsible2()} label='Como terei acesso aos Boxes?'/>
                  <Image className="gray-symbol" pad="medium" size="contain" src={this.state.collapsed2 ? minus : plus}/>
                </Stack>
                <Collapsible direction="vertical" open={this.state.collapsed2}>
                  <Box pad="medium" background="#e1e1e7">
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum auctor magna eget volutpat.
                    Nam sagittis ex eget mollis vestibulum. Donec vestibulum ullamcorper nisi, ac lacinia arcu dictum
                    vitae. Nunc varius sed elit sit amet laoreet. Integer convallis sagittis semper. Proin libero leo,
                    vestibulum ac consectetur vel, fermentum consectetur magna. Nunc lacinia, lorem quis mattis placerat,
                    velit tellus luctus turpis, non gravida quam metus quis enim. Cras et ipsum libero. Praesent libero
                    libero, pretium vehicula orci non, feugiat elementum justo. Maecenas elit leo, vulputate id tortor
                    quis, convallis molestie tellus. Phasellus nec mi sit amet libero hendrerit bibendum nec id urna.
                    Praesent vel malesuada eros. Nulla eleifend purus id risus mollis congue eget et ex.
                    </Text>
                  </Box>
                </Collapsible>
                <Stack className="stack" anchor="right">
                  <Button fill={true} className="gray-button" plain={true} onClick={(e) => this.switchCollapsible3()} label='Há algum custo de renovação ou pagamento mensal?'/>
                  <Image className="gray-symbol" pad="medium" size="contain" src={this.state.collapsed3 ? minus : plus}/>
                </Stack>
                <Collapsible direction="vertical" open={this.state.collapsed3}>
                  <Box pad="medium" background="#e1e1e7">
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum auctor magna eget volutpat.
                    Nam sagittis ex eget mollis vestibulum. Donec vestibulum ullamcorper nisi, ac lacinia arcu dictum
                    vitae. Nunc varius sed elit sit amet laoreet. Integer convallis sagittis semper. Proin libero leo,
                    vestibulum ac consectetur vel, fermentum consectetur magna. Nunc lacinia, lorem quis mattis placerat,
                    velit tellus luctus turpis, non gravida quam metus quis enim. Cras et ipsum libero. Praesent libero
                    libero, pretium vehicula orci non, feugiat elementum justo. Maecenas elit leo, vulputate id tortor
                    quis, convallis molestie tellus. Phasellus nec mi sit amet libero hendrerit bibendum nec id urna.
                    Praesent vel malesuada eros. Nulla eleifend purus id risus mollis congue eget et ex.
                    </Text>
                  </Box>
                </Collapsible>
                <Stack className="stack" anchor="right">
                  <Button fill={true} className="gray-button" plain={true} onClick={(e) => this.switchCollapsible4()} label='O conteúdo da Mohub é todo em vídeo?'/>
                  <Image className="gray-symbol" pad="medium" size="contain" src={this.state.collapsed4 ? minus : plus}/>
                </Stack>
                <Collapsible direction="vertical" open={this.state.collapsed4}>
                  <Box pad="medium" background="#e1e1e7">
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum auctor magna eget volutpat.
                    Nam sagittis ex eget mollis vestibulum. Donec vestibulum ullamcorper nisi, ac lacinia arcu dictum
                    vitae. Nunc varius sed elit sit amet laoreet. Integer convallis sagittis semper. Proin libero leo,
                    vestibulum ac consectetur vel, fermentum consectetur magna. Nunc lacinia, lorem quis mattis placerat,
                    velit tellus luctus turpis, non gravida quam metus quis enim. Cras et ipsum libero. Praesent libero
                    libero, pretium vehicula orci non, feugiat elementum justo. Maecenas elit leo, vulputate id tortor
                    quis, convallis molestie tellus. Phasellus nec mi sit amet libero hendrerit bibendum nec id urna.
                    Praesent vel malesuada eros. Nulla eleifend purus id risus mollis congue eget et ex.
                    </Text>
                  </Box>
                </Collapsible>
                <Stack className="stack" anchor="right">
                  <Button fill={true} className="gray-button" plain={true} onClick={(e) => this.switchCollapsible5()} label='Quando os boxes serão liberados?'/>
                  <Image className="gray-symbol" pad="medium" size="contain" src={this.state.collapsed5 ? minus : plus}/>
                </Stack>
                <Collapsible direction="vertical" open={this.state.collapsed5}>
                  <Box pad="medium" background="#e1e1e7">
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum auctor magna eget volutpat.
                    Nam sagittis ex eget mollis vestibulum. Donec vestibulum ullamcorper nisi, ac lacinia arcu dictum
                    vitae. Nunc varius sed elit sit amet laoreet. Integer convallis sagittis semper. Proin libero leo,
                    vestibulum ac consectetur vel, fermentum consectetur magna. Nunc lacinia, lorem quis mattis placerat,
                    velit tellus luctus turpis, non gravida quam metus quis enim. Cras et ipsum libero. Praesent libero
                    libero, pretium vehicula orci non, feugiat elementum justo. Maecenas elit leo, vulputate id tortor
                    quis, convallis molestie tellus. Phasellus nec mi sit amet libero hendrerit bibendum nec id urna.
                    Praesent vel malesuada eros. Nulla eleifend purus id risus mollis congue eget et ex.
                    </Text>
                  </Box>
                </Collapsible>
                <Stack className="stack" anchor="right">
                  <Button fill={true} className="gray-button" plain={true} onClick={(e) => this.switchCollapsible6()} label='Por que Mohub?'/>
                  <Image className="gray-symbol" pad="medium" size="contain" src={this.state.collapsed6 ? minus : plus}/>
                </Stack>
                <Collapsible direction="vertical" open={this.state.collapsed6}>
                  <Box pad="medium" background="#e1e1e7">
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut fermentum auctor magna eget volutpat.
                    Nam sagittis ex eget mollis vestibulum. Donec vestibulum ullamcorper nisi, ac lacinia arcu dictum
                    vitae. Nunc varius sed elit sit amet laoreet. Integer convallis sagittis semper. Proin libero leo,
                    vestibulum ac consectetur vel, fermentum consectetur magna. Nunc lacinia, lorem quis mattis placerat,
                    velit tellus luctus turpis, non gravida quam metus quis enim. Cras et ipsum libero. Praesent libero
                    libero, pretium vehicula orci non, feugiat elementum justo. Maecenas elit leo, vulputate id tortor
                    quis, convallis molestie tellus. Phasellus nec mi sit amet libero hendrerit bibendum nec id urna.
                    Praesent vel malesuada eros. Nulla eleifend purus id risus mollis congue eget et ex.
                    </Text>
                  </Box>
                </Collapsible>
              </Box>
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
                <a id="bigbutton" className="btn" href="#sales" >
                  &nbsp; Faça parte da MoHub
                </a>
              </Box>
            </Container>
            <Box><Footer/></Box>
          </Box>
      </Layout>
    );
  }
}

export default SalesPage;
