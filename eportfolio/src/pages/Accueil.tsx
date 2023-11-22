import { useState } from "react";

import { openLink } from "../tools/function";

import SideBar from "../components/organisms/SideBar";
import Header from "../components/organisms/Header";
import BlocTextImage from "../components/organisms/BlocTextImage";
import BlocExpPro from "../components/organisms/BlocExpPro";
import CardExpPro from "../components/molecules/CardExpPro";

function Accueil() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const closeSideBar = () => {
    if (isSideBarOpen) {
      setIsSideBarOpen(false);
    }
  };

  return (
    <>
      <div>
        <SideBar toggleSideBar={toggleSideBar} isOpen={isSideBarOpen} >
          <h2>
            <a href={'#Présentation'} onClick={closeSideBar}>Présentation</a>
          </h2>
          <h2>
            <a href={'#Expériences professionnelles'} onClick={closeSideBar}>Expériences professionnelles</a>
          </h2>
          <h2>
            <a href={'#Diplômes et formations'} onClick={closeSideBar}>Diplômes et formations</a>
          </h2>
          <h2>
            <a href={'#Projets'} onClick={closeSideBar}>Projets</a>
          </h2>
          <h2>
            <a href={'#CV'} onClick={closeSideBar}>CV</a>
          </h2>
          <h2>
            <a href={'#Contact'} onClick={closeSideBar}>Contact</a>
          </h2>
        </SideBar>
      </div>

      <div onClick={() => closeSideBar()}>
        <Header
          titre1='E&#8209;Portfolio'
          titre2='Alexis&#160;LEON'
          icon1={{
            className: 'xs',
            name: 'list',
            onClick: () => toggleSideBar()
          }}
          icon2={{
            name: 'cv',
            onClick: () => openLink('./ressources/pdf/CV_LEON_Alexis.pdf')
          }}
          icon3={{
            name: 'linkedin',
            onClick: () => openLink('https://www.linkedin.com/in/alexis-leon1/')
          }}
        />
        <BlocTextImage name="Présentation" picture="bg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </BlocTextImage>
        <BlocExpPro name="Expériences professionnelles">
          <CardExpPro picture="bg" poste="Nom du poste" entreprise="Nom de l'entreprise" date="Date du contrat"/>
          <CardExpPro picture="bg" poste="Nom du poste" entreprise="Nom de l'entreprise" date="Date du contrat"/>
          <CardExpPro picture="bg" poste="Nom du poste" entreprise="Nom de l'entreprise" date="Date du contrat"/>
          <CardExpPro picture="bg" poste="Nom du poste" entreprise="Nom de l'entreprise" date="Date du contrat"/>
          <CardExpPro picture="bg" poste="Nom du poste" entreprise="Nom de l'entreprise" date="Date du contrat"/>
          <CardExpPro picture="bg" poste="Nom du poste" entreprise="Nom de l'entreprise" date="Date du contrat"/>
          <CardExpPro picture="bg" poste="Nom du poste" entreprise="Nom de l'entreprise" date="Date du contrat"/>
          <CardExpPro picture="bg" poste="Nom du poste" entreprise="Nom de l'entreprise" date="Date du contrat"/>
          <CardExpPro picture="bg" poste="Nom du poste" entreprise="Nom de l'entreprise" date="Date du contrat"/>
        </BlocExpPro>
      </div>
    </>
  );
}

export default Accueil; 