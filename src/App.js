import './css/App.css';
import Header from './components/header';
import Card from './components/porfileCard';
import Capa from './components/capaCard'
import DevImage from './images/Dev.svg';
import ClassicReact from  './images/classicReact.svg'
import CImage from  './images/c.svg'
import  Python from './images/python.svg'
import CPP from './images/c++.svg'
import  Flutter from './images/flutter.svg'
import  NatReact from './images/reactNat.svg'
import  TekLogo from './images/tekLogo.svg'

const App = () => {
  return (
      <>
          <Header />
          <div className="Intro">
              <div className="Text">
                  <div className="Title">
                      <h1>Bonjour, tout le monde !</h1>
                  </div>
                  <p>Bienvenue sur mon CV en ligne. Vous allez pouvoir découvrir mon parcours jusqu'à aujourd'hui et aussi voir mes compétences.</p>
              </div>
                <div className="Container"/>
                <Card />
          </div>
          <img src={DevImage} alt={""} className="DevImage"/>
          <div className="CapacitiesTitle">
            <h1>Mes compétences de travail en développement</h1>
          </div>
          <div className="Capacities">
              <Capa color="#12b5e5" logo={NatReact} titles={"React Native"} content={"J'ai eu l'occasion de pratiquer du react native lor de ma piscine epitech 3emme anée qui c'est derouler sur plusieur semaine"}/>
              <Capa color="#fcba28" logo={ClassicReact} titles={"React"} content={"J'ai apris le react dans le cadre du hub epitech j'ai pue faire plusieur experiemantation et aussi des project comme ce site."}/>
              <Capa color="#7b5ea7" logo={Flutter} titles={"Flutter"} content={"J'ai decouvert le flutter lor de mon stage de premiere anée qui a durrée 6 mois sur le development d'une application mobile cross platform"}/>
              <Capa color="#ed203d" logo={CPP} titles={"C++"} content={"J'ai pue faire du cpp tout au long de ma 2emme année et j'en fait encore pendant ma 3emme année sur des projet longue durée"}/>
              <Capa color="#fc7428" logo={CImage} titles={"Language C"} content={"J'ai commancé a apprendre le developement informatique avec le c durant ma premeire année epitech"}/>
              <Capa color="#f9f4da" logo={Python} titles={"Python"} content={"J'ai fait du python en majoriter sur mes projet de maths depuis ma premiere année epitech"}/>
          </div>
          <div className={"Footer"}>
              <div className="FooterBoxTitle">
                <h3 className="FooterTitle">Me Contacter</h3>
              </div>
              <img src={TekLogo} alt={""} className="TekLogo"/>
          </div>
      </>
  );
}

export default App;
