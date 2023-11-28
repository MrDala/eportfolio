export type IconButtonProps = {
  name: string;
  className?: string;
  onClick?: Function;
};

export type Header = {
  icon1: IconButtonProps,
  icon2: IconButtonProps,
  icon3: IconButtonProps,

  titre1: string,
  titre2: string,
};

export type Presentation = {
  img: string
  texte: string
};

export type Diplome = {
  nom: string,
  date: string,
  img: {
    src: string,
    texte: string
  },
  lien: string
};

export type Projet = {
  name: string,
  date: string,
  description: string,
  urlGit?: {
    bouton: string,
    url: string
  },
  urlProjet?: {
    bouton: string,
    url: string
  },
  logos?: string[]
}

export type ExpPro = {
  img: string,
  poste: string,
  entreprise: string,
  adresse?: string,
  date: string,
  volet?: string;
}

export type CV = {
  fichier: {
    nom: string,
    src: string
  }
  bouton:  {
    telecharger: string,
    web: string
  }
}

export type Contact = {
  icon: string,
  lien: string
  lienAffiche: string
}

export type Footer = {
  texte: string
}