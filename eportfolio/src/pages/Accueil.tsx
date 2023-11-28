import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { openLink } from "../tools/function";

import VoletMenu from "../components/molecules/VoletMenu";
import BlocHeader from "../components/organisms/BlocHeader";
import BlocTextImage from "../components/organisms/BlocTextImage";
import BlocExpPro from "../components/organisms/BlocExpPro";
import CardExpPro from "../components/molecules/CardExpPro";
import BlocDiplomes from "../components/organisms/BlocTable";
import RawDiplome from "../components/molecules/RawDiplome";
import CardProjet from "../components/molecules/CardProjet";
import BlocProjet from "../components/organisms/BlocProjet";
import Bloc from "../components/organisms/Bloc";
import BlocCV from "../components/organisms/BlocCV";
import BlocContact from "../components/organisms/BlocContacts";
import BlocFooter from "../components/organisms/BlocFooter";

import i18n from "../tools/i18n";
import { CV, Contact, Diplome, ExpPro, Footer, Header, Langue, Presentation, Projet } from "../components/Types";

const Accueil = ({ lang }: Langue) => {
  const [isVoletMenuOpen, setIsVoletMenuOpen] = useState(false);

  /* Volet side bar */
  const toggleVoletMenu = () => {
    setIsVoletMenuOpen(!isVoletMenuOpen);
  };

  const { t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  /* Contenu des blocs */
  const header = {
    titre1: t("header.titre1"),
    titre2: t("header.titre2"),
    icon1: {
      className: 'xs',
      name: 'list',
      onClick: () => toggleVoletMenu()
    },
    icon2: {
      name: 'cv',
      onClick: () => openLink('./ressources/pdf/CV_LEON_Alexis.pdf')
    },
    icon3: {
      name: 'linkedin',
      onClick: () => openLink('https://www.linkedin.com/in/alexis-leon1/')
    }
  } as Header;

  const presentation = t("presentation", { returnObjects: true }) as Presentation;
  const expPros = t("expPro", { returnObjects: true }) as ExpPro[];
  const diplomes = t("diplome.raw", { returnObjects: true }) as Diplome[];
  const projets = t("projet", { returnObjects: true }) as Projet[];
  const cv = t("cv", { returnObjects: true }) as CV;
  const contacts = t("contact", { returnObjects: true }) as Contact[];
  const footer = t("footer", { returnObjects: true }) as Footer;

  return (
    <>
      <VoletMenu
        toggleVoletMenu={toggleVoletMenu}
        isOpen={isVoletMenuOpen}
        titles={t("volet", { returnObjects: true })}
      />

      <>
        <BlocHeader
          {...header}
        />

        <Bloc name={t("volet.0")}>
          <BlocTextImage
            {...presentation}
          />
        </Bloc>

        <Bloc name={t("volet.1")} color={true}>
          <BlocExpPro name={t("volet.1")}>
            {(Array.isArray(expPros) ? expPros : []).map((expPro, index) => (
              <CardExpPro
                key={index}
                {...expPro}
              />
            ))}
          </BlocExpPro>
        </Bloc>

        <Bloc name={t("volet.2")}>
          <BlocDiplomes heads={t("diplome.col", { returnObjects: true })}>
            {(Array.isArray(diplomes) ? diplomes : []).map((diplome, index) => (
              <RawDiplome key={index} {...diplome} />
            ))}
          </BlocDiplomes>
        </Bloc>

        <Bloc name={t("volet.3")} color={true}>
          <BlocProjet>
            {(Array.isArray(projets) ? projets : []).map((projet, index) => (
              <CardProjet key={index} {...projet} />
            ))}
          </BlocProjet>
        </Bloc>

        <Bloc name={t("volet.4")}>
          <BlocCV
            {...cv}
          />
        </Bloc>

        <Bloc name={t("volet.5")}>
          <BlocContact
            contacts={contacts} 
          />
        </Bloc>

        <BlocFooter 
         {...footer}
        />
      </>
    </>
  );
}

export default Accueil; 
