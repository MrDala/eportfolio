import { useState } from "react";

import { openLink } from "../tools/function";

import SideBar from "../components/organisms/SideBar";
import Header from "../components/organisms/Header";
import BlocTextImage from "../components/organisms/BlocTextImage";
import BlocExpPro from "../components/organisms/BlocExpPro";
import CardExpPro from "../components/molecules/CardExpPro";
import BlocDiplomes from "../components/organisms/BlocTable";
import Raw from "../components/molecules/Raw";
import Button from "../components/atoms/Button";
import ImageText from "../components/atoms/ImageText";

function Accueil() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [isVoletExpProOpen, setVoletExpProOpen] = useState(false);

  /* Volet experience pro */
  const toggleVoletExpPro = () => {
    setVoletExpProOpen(!isVoletExpProOpen);
  };

  /* Volet side bar */
  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <>
      <div>
        <SideBar toggleSideBar={toggleSideBar} isOpen={isSideBarOpen} >
          <h2>
            <a href={'#Présentation'} onClick={() => setIsSideBarOpen(false)}>Présentation</a>
          </h2>
          <h2>
            <a href={'#Expériences professionnelles'} onClick={() => setIsSideBarOpen(false)}>Expériences professionnelles</a>
          </h2>
          <h2>
            <a href={'#Diplômes et formations'} onClick={() => setIsSideBarOpen(false)}>Diplômes et formations</a>
          </h2>
          <h2>
            <a href={'#Projets'} onClick={() => setIsSideBarOpen(false)}>Projets</a>
          </h2>
          <h2>
            <a href={'#CV'} onClick={() => setIsSideBarOpen(false)}>CV</a>
          </h2>
          <h2>
            <a href={'#Contact'} onClick={() => setIsSideBarOpen(false)}>Contact</a>
          </h2>
        </SideBar>
      </div>

      <div>
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
          <CardExpPro picture="bg" poste="Nom du poste" entreprise="Nom de l'entreprise" adresse="adresse" isOpen={isVoletExpProOpen} toggleVoletExpPro={toggleVoletExpPro} date="Date du contrat">
            <h4>Sous-titre</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris. Laoreet sit amet cursus sit. Sem fringilla ut morbi tincidunt augue interdum velit. Facilisis leo vel fringilla est ullamcorper eget nulla. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Tellus integer feugiat scelerisque varius. Dictum varius duis at consectetur. Pellentesque habitant morbi tristique senectus et netus et. Libero id faucibus nisl tincidunt eget nullam. Id faucibus nisl tincidunt eget nullam. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Odio ut enim blandit volutpat maecenas volutpat. Tristique et egestas quis ipsum suspendisse. Sit amet consectetur adipiscing elit ut aliquam purus sit. Vel eros donec ac odio. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam.</p>
          </CardExpPro>
        </BlocExpPro>

        <BlocDiplomes name="Diplômes et formations" heads={["Diplôme", "Année", "Établissement", "Lien"]}>
          <Raw args={[
            <p className="big">Nom du diplôme</p>,
            <p className="big">2018</p>,
            <ImageText className="xs" nameImage="UniversiteParisCite" text="Université Paris Cité" />,
            <Button text="infos" />]}
          />
          <Raw args={[
            <p className="big">Nom du diplôme</p>,
            <p className="big">2018</p>,
            <ImageText className="xs" nameImage="UniversiteParisCite" text="Université Paris Cité" />,
            <Button text="infos" />]}
          />
        </BlocDiplomes>
      </div>
    </>
  );
}

export default Accueil; 
