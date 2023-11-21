import { useState } from "react";
import A from "../components/atoms/A";
import H2 from "../components/atoms/H2";
import SideBar from "../components/molecules/SideBar";
import Header from "../components/organisms/Header";
import { openLink } from "../tools/function";

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
          <H2>
            <A href={'#Presentation'}>Présentation</A>
          </H2>
          <H2>
            <A href={'#ExpPro'}>Expériences professionnelles</A>
          </H2>
          <H2>
            <A href={'#Diplomes'}>Diplômes et formations</A>
          </H2>
          <H2>
            <A href={'#Projets'}>Projets</A>
          </H2>
          <H2>
            <A href={'#CV'}>CV</A>
          </H2>
          <H2>
            <A href={'#Contact'}>Contact</A>
          </H2>
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
      </div>
    </>
  );
}

export default Accueil; 