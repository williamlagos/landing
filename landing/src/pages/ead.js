import React from "react"
import Helmet from "react-helmet"
// import { Link } from "gatsby"

import '@ionic/core/css/core.css'
import '@ionic/core/css/ionic.bundle.css'
import {
  IonButton,
  IonSplitPane,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonNav,
  IonList,
  IonItem
} from '@ionic/react'

import Layout from '../components/layout'
import Background from "../assets/img/landing-02.jpg"

class EadPage extends React.Component {
  render() {
    const siteTitle = "MoHub";
    return (
      <Layout>
        <Helmet title={siteTitle}/>
        <IonSplitPane>
          {/*--  our side menu  --*/}
          <IonMenu>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Menu</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <IonList>
                <IonItem>Aula 1</IonItem>
                <IonItem>Aula 2</IonItem>
                <IonItem>Aula 3</IonItem>
                <IonItem>Aula 4</IonItem>
                <IonItem>Aula 5</IonItem>
              </IonList>
            </IonContent>
          </IonMenu>

          {/*-- the main content --*/}
          <IonNav main>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Conteúdo</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent>
              <img alt="Hero" className="hero-img" src={Background} />
              <h2>Ficou interessado? Então corre e vem saber como!</h2>
              <h3>Faça como esta legião de brasileiros e venha crescer você também!</h3>
              <p>Descrição do conteúdo 1 para ser exibido.</p>
              <IonButton color="primary">Quero crescer!</IonButton>
            </IonContent>
          </IonNav>
        </IonSplitPane>
      </Layout>
    );
  }
}

export default EadPage;
