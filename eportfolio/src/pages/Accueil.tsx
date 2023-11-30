import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { CV, Contact, Diplome, ExpPro, Footer, Header, Presentation, Projet } from "../components/Types";

import VoletMenu from "../components/molecules/VoletMenu";
import CardExpPro from "../components/molecules/CardExpPro";
import CardProjet from "../components/molecules/CardProjet";
import RawDiplome from "../components/molecules/RawDiplome";

import BlocHeader from "../components/organisms/BlocHeader";
import BlocTextImage from "../components/organisms/BlocTextImage";
import BlocExpPro from "../components/organisms/BlocExpPro";
import BlocDiplomes from "../components/organisms/BlocTable";
import BlocProjet from "../components/organisms/BlocProjet";
import Bloc from "../components/organisms/Bloc";
import BlocCV from "../components/organisms/BlocCV";
import BlocContact from "../components/organisms/BlocContacts";
import BlocFooter from "../components/organisms/BlocFooter";

import i18n, { defaultLangue, langues } from "../tools/i18n";
import { openLink } from "../tools/function";

const Accueil = () => {
  const [isVoletMenuOpen, setIsVoletMenuOpen] = useState(false);
  const [langue, setLangue] = useState<string>(defaultLangue);
  const { t } = useTranslation();

  const toggleVoletMenu = () => {
    setIsVoletMenuOpen(!isVoletMenuOpen);
  };
  
  /* Gestion de la langue */
  const changeLangue = (keyLangue: string) => {
    setLangue(keyLangue);
  }

  useEffect(() => {
    i18n.changeLanguage(langue);
  }, [langue]);

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
      onClick: () => openLink('./')
    },
    icon3: {
      name: 'linkedin',
      onClick: () => openLink('https://www.linkedin.com/')
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
        langues={{
          languesDispos: langues,
          onChange: changeLangue,
          defaultLangue: defaultLangue,
        }}
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
