import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { openLink } from "../tools/function";

import VoletMenu from "../components/molecules/VoletMenu";
import Header from "../components/organisms/Header";
import BlocTextImage from "../components/organisms/BlocTextImage";
import BlocExpPro from "../components/organisms/BlocExpPro";
import CardExpPro from "../components/molecules/CardExpPro";
import BlocDiplomes from "../components/organisms/BlocTable";
import RawDiplome from "../components/molecules/RawDiplome";
import Projet from "../components/molecules/Projet";
import BlocProjet from "../components/organisms/BlocProjet";
import Bloc from "../components/organisms/Bloc";
import BlocCV from "../components/organisms/BlocCV";
import BlocContact from "../components/organisms/BlocContacts";
import Footer from "../components/organisms/Footer";

import i18n from "../tools/i18n";

type Props = {
  lang: 'en' | 'fr';
}

const Accueil = ({ lang }: Props) => {
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
  const expPros = [
    {
      picture: "bg",
      poste: t("expPro.0.poste"),
      entreprise: t("expPro.0.entreprise"),
      adresse: t("expPro.0.adresse"),
      date: t("expPro.0.date"),
      volet: t("expPro.0.volet")
    }
  ];

  const diplomes = [
    {
      nom: t("diplome.raw.0.nom"),
      date: t("diplome.raw.0.date"),
      img: {
        src: "UniversiteParisCite",
        texte: t("diplome.raw.0.img")
      },
      lien: "./"
    }
  ];

  const projets = [
    {
      name: t("projet.0.nom"),
      date: t("projet.0.date"),
      description: t("projet.0.description"),
      urlGit: {
        bouton: t("projet.0.git"),
        url: 'https://github.com/projet1',
      },
      urlProjet: {
        bouton: t("projet.0.web"),
        url: 'https://projet1.com',
      },
      logos: ["JavaScript", 'PHP'],
    }
  ];

  const contacts = [
    { icon: "mail", lien: "mailto:alexis.leon@etu.u-paris.fr", lienAffiche: "alexis.leon@etu.u-paris.fr" },
    { icon: "linkedin", lien: "https://www.linkedin.com/in/alexis-leon1/", lienAffiche: "alexis-leon1" },
    { icon: "discord", lien: "https://discord.com/users/219016239442427905", lienAffiche: "mrdala" }
  ]

  return (
    <>
      <VoletMenu
        toggleVoletMenu={toggleVoletMenu}
        isOpen={isVoletMenuOpen}
        titles={t("volet", { returnObjects: true })}
      />

      <>
        <Header
          titre1={t("header.titre1")}
          titre2={t("header.titre2")}
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

        <Bloc name={t("volet.0")}>
          <BlocTextImage
            name={t("volet.0")}
            picture="bg"
            text={t("presentation.texte")}
          />
        </Bloc>

        <Bloc name={t("volet.1")} color={true}>
          <BlocExpPro name={t("volet.1")}>
            {expPros.map((expPro, index) => (
              <CardExpPro
                key={index}
                picture={expPro.picture}
                poste={expPro.poste}
                entreprise={expPro.entreprise}
                adresse={expPro.adresse}
                date={expPro.date}
              >
                <div dangerouslySetInnerHTML={{ __html: expPro.volet }}/>
              </CardExpPro>
            ))}
          </BlocExpPro>
        </Bloc>

        <Bloc name={t("volet.2")}>
          <BlocDiplomes name={t("volet.2")} heads={t("diplome.col", { returnObjects: true })}>
            {diplomes.map((diplome, index) => (
              <RawDiplome key={index} {...diplome} />
            ))}
          </BlocDiplomes>
        </Bloc>

        <Bloc name={t("volet.3")} color={true}>
          <BlocProjet name={t("volet.3")}>
            {projets.map((projet, index) => (
              <Projet key={index} {...projet} />
            ))}
          </BlocProjet>
        </Bloc>

        <Bloc name={t("volet.4")}>
          <BlocCV
            name={"Curriculum vitæ"}
            cv="CV_LEON_Alexis"
            telecharger={t("cv.telecharger")}
            web={t("cv.web")}
          />
        </Bloc>

        <Bloc name={t("volet.5")}>
          <BlocContact
            name={t("volet.5")}
            contacts={contacts} />
        </Bloc>

        <Footer text="2023 - Alexis LEON" />
      </>
    </>
  );
}

export default Accueil; 
