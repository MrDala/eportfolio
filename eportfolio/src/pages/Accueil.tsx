import { useState } from "react";

import { openLink } from "../tools/function";

import VoletMenu from "../components/molecules/VoletMenu";
import Header from "../components/organisms/Header";
import BlocTextImage from "../components/organisms/BlocTextImage";
import BlocExpPro from "../components/organisms/BlocExpPro";
import CardExpPro from "../components/molecules/CardExpPro";
import BlocDiplomes from "../components/organisms/BlocTable";
import Raw from "../components/molecules/Raw";
import Button from "../components/atoms/Button";
import ImageText from "../components/atoms/ImageText";
import Projet from "../components/molecules/Projet";
import BlocProjet from "../components/organisms/BlocProjet";
import Bloc from "../components/organisms/Bloc";
import BlocCV from "../components/organisms/BlocCV";

function Accueil() {
  const [isVoletMenuOpen, setIsVoletMenuOpen] = useState(false);

  /* Volet side bar */
  const toggleVoletMenu = () => {
    setIsVoletMenuOpen(!isVoletMenuOpen);
  };

  return (
    <>
      <div>
        <VoletMenu
          toggleVoletMenu={toggleVoletMenu}
          isOpen={isVoletMenuOpen}
          titles={["Présentation", "Expériences professionnelles", "Diplômes et formations", "Projets", "CV", "Contact"]}
        />
      </div>

      <div>
        <Header
          titre1='E&#8209;Portfolio'
          titre2='Alexis&#160;LEON'
          icon1={{
            className: 'xs',
            name: 'list',
            onClick: () => toggleVoletMenu()
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

        <Bloc name="Présentation">
          <BlocTextImage name="Présentation" picture="bg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </BlocTextImage>
        </Bloc>

        <Bloc name="Présentation" color={true}>
          <BlocExpPro name="Expériences professionnelles">
            <CardExpPro picture="bg" poste="Nom du poste" entreprise="Nom de l'entreprise" adresse="adresse" date="Date du contrat">
              <h4>Sous-titre</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris. Laoreet sit amet cursus sit. Sem fringilla ut morbi tincidunt augue interdum velit. Facilisis leo vel fringilla est ullamcorper eget nulla. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Tellus integer feugiat scelerisque varius. Dictum varius duis at consectetur. Pellentesque habitant morbi tristique senectus et netus et. Libero id faucibus nisl tincidunt eget nullam. Id faucibus nisl tincidunt eget nullam. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Odio ut enim blandit volutpat maecenas volutpat. Tristique et egestas quis ipsum suspendisse. Sit amet consectetur adipiscing elit ut aliquam purus sit. Vel eros donec ac odio. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam.</p>
            </CardExpPro>
            <CardExpPro picture="bg" poste="Nom du poste" entreprise="Nom de l'entreprise" adresse="adresse" date="Date du contrat">
              <h4>Sous-titre</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris. Laoreet sit amet cursus sit. Sem fringilla ut morbi tincidunt augue interdum velit. Facilisis leo vel fringilla est ullamcorper eget nulla. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Tellus integer feugiat scelerisque varius. Dictum varius duis at consectetur. Pellentesque habitant morbi tristique senectus et netus et. Libero id faucibus nisl tincidunt eget nullam. Id faucibus nisl tincidunt eget nullam. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Odio ut enim blandit volutpat maecenas volutpat. Tristique et egestas quis ipsum suspendisse. Sit amet consectetur adipiscing elit ut aliquam purus sit. Vel eros donec ac odio. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam.</p>
            </CardExpPro>
            <CardExpPro picture="bg" poste="Nom du poste" entreprise="Nom de l'entreprise" adresse="adresse" date="Date du contrat">
              <h4>Sous-titre</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris. Laoreet sit amet cursus sit. Sem fringilla ut morbi tincidunt augue interdum velit. Facilisis leo vel fringilla est ullamcorper eget nulla. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Tellus integer feugiat scelerisque varius. Dictum varius duis at consectetur. Pellentesque habitant morbi tristique senectus et netus et. Libero id faucibus nisl tincidunt eget nullam. Id faucibus nisl tincidunt eget nullam. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Odio ut enim blandit volutpat maecenas volutpat. Tristique et egestas quis ipsum suspendisse. Sit amet consectetur adipiscing elit ut aliquam purus sit. Vel eros donec ac odio. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam.</p>
            </CardExpPro>
            <CardExpPro picture="bg" poste="Nom du poste" entreprise="Nom de l'entreprise" adresse="adresse" date="Date du contrat">
              <h4>Sous-titre</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris. Laoreet sit amet cursus sit. Sem fringilla ut morbi tincidunt augue interdum velit. Facilisis leo vel fringilla est ullamcorper eget nulla. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Tellus integer feugiat scelerisque varius. Dictum varius duis at consectetur. Pellentesque habitant morbi tristique senectus et netus et. Libero id faucibus nisl tincidunt eget nullam. Id faucibus nisl tincidunt eget nullam. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Odio ut enim blandit volutpat maecenas volutpat. Tristique et egestas quis ipsum suspendisse. Sit amet consectetur adipiscing elit ut aliquam purus sit. Vel eros donec ac odio. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam.</p>
            </CardExpPro>
            <CardExpPro picture="bg" poste="Nom du poste" entreprise="Nom de l'entreprise" adresse="adresse" date="Date du contrat">
              <h4>Sous-titre</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris. Laoreet sit amet cursus sit. Sem fringilla ut morbi tincidunt augue interdum velit. Facilisis leo vel fringilla est ullamcorper eget nulla. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Tellus integer feugiat scelerisque varius. Dictum varius duis at consectetur. Pellentesque habitant morbi tristique senectus et netus et. Libero id faucibus nisl tincidunt eget nullam. Id faucibus nisl tincidunt eget nullam. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Odio ut enim blandit volutpat maecenas volutpat. Tristique et egestas quis ipsum suspendisse. Sit amet consectetur adipiscing elit ut aliquam purus sit. Vel eros donec ac odio. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam.</p>
            </CardExpPro>
            <CardExpPro picture="bg" poste="Nom du poste" entreprise="Nom de l'entreprise" adresse="adresse" date="Date du contrat">
              <h4>Sous-titre</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus eget nunc scelerisque viverra mauris. Laoreet sit amet cursus sit. Sem fringilla ut morbi tincidunt augue interdum velit. Facilisis leo vel fringilla est ullamcorper eget nulla. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Amet nulla facilisi morbi tempus iaculis urna id volutpat. Tellus integer feugiat scelerisque varius. Dictum varius duis at consectetur. Pellentesque habitant morbi tristique senectus et netus et. Libero id faucibus nisl tincidunt eget nullam. Id faucibus nisl tincidunt eget nullam. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Odio ut enim blandit volutpat maecenas volutpat. Tristique et egestas quis ipsum suspendisse. Sit amet consectetur adipiscing elit ut aliquam purus sit. Vel eros donec ac odio. Suspendisse interdum consectetur libero id faucibus nisl tincidunt eget nullam.</p>
            </CardExpPro>
          </BlocExpPro>
        </Bloc>

        <Bloc name="Diplômes et formations">
          <BlocDiplomes name="Diplômes et formations" heads={["Diplôme", "Année", "Établissement", "Lien"]}>
            <Raw args={[
              <p className="big">Nom du diplôme</p>,
              <p className="big">2018</p>,
              <ImageText className="xs" nameImage="UniversiteParisCite" text="Université Paris Cité" />,
              <Button text="infos" className="xs" />]}
            />
            <Raw args={[
              <p className="big">Nom du diplôme</p>,
              <p className="big">2018</p>,
              <ImageText className="xs" nameImage="UniversiteParisCite" text="Université Paris Cité" />,
              <Button text="infos" className="xs" />]}
            />
          </BlocDiplomes>
        </Bloc>

        <Bloc name="Projets" color={true}>
          <BlocProjet name="Projets">
            <Projet
              name="Nom du projet"
              date="2023"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              urlGit="./"
              urlProjet="./"
              logos={["JavaScript", "JavaScript", "JavaScript"]}
            />
            <Projet
              name="Nom du projet"
              date="2023"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              urlGit="./"
              urlProjet="./"
              logos={["JavaScript", "JavaScript", "JavaScript"]}
            />
            <Projet
              name="Nom du projet"
              date="2023"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              urlGit="./"
              urlProjet="./"
              logos={["JavaScript", "JavaScript", "JavaScript"]}
            />
            <Projet
              name="Nom du projet"
              date="2023"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              urlGit="./"
              urlProjet="./"
              logos={["JavaScript", "JavaScript", "JavaScript"]}
            />
            <Projet
              name="Nom du projet"
              date="2023"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              urlGit="./"
              urlProjet="./"
              logos={["JavaScript", "JavaScript", "JavaScript"]}
            />
            <Projet
              name="Nom du projet"
              date="2023"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
              urlGit="./"
              urlProjet="./"
              logos={["JavaScript", "JavaScript", "JavaScript"]}
            />
          </BlocProjet>
        </Bloc>

        <Bloc name="Curriculum vitæ">
          <BlocCV name="Curriculum vitæ" cv="CV_LEON_Alexis"/>
        </Bloc>
      </div>
    </>
  );
}

export default Accueil; 
