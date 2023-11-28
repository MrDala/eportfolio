import { RefObject } from "react";

export function openLink(link : string) : void {
  if (link) {
    window.open(link, '_blank');
  }
}

export function toggleVolet (isOpen: boolean, toggleVoletDiv: Function, divRef: RefObject<HTMLDivElement> ) : Function {
  const handleClickOutside = (event: MouseEvent) => {
    if (isOpen && divRef.current && !divRef.current.contains(event.target as Node)) {
      toggleVoletDiv();
    }
  };

  document.addEventListener('mousedown', handleClickOutside);

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
};
  
export function applyLastRow(HTML_div: HTMLElement, HTML_ElementName: string, elementsPerRawDiplome: number) : void {
  if (!HTML_div) {
    return;
  }

  const HTML_Elements = HTML_div.querySelectorAll(HTML_ElementName);

  if (!HTML_Elements || HTML_Elements.length === 0) {
    return;
  }
  
  HTML_Elements.forEach((element) => {
    if (element.classList) {
      element.classList.remove('last-row');
    }
  });
  
  // Calcule le nombre d'éléments dans la dernière ligne
  const elementsInLastRow = HTML_Elements.length % elementsPerRawDiplome || elementsPerRawDiplome;

  // Retire la bordure basse pour les éléments de la dernière ligne
  for (let i = 1; i <= elementsInLastRow; i++) {
    const lastRowElement = HTML_Elements[HTML_Elements.length - i];
    if (lastRowElement && lastRowElement.classList) {
      lastRowElement.classList.add('last-row');
    }
  }
}

export function downloadFile(src: string, nomFichier: string): void {
  if (!src) {
    console.error('Le chemin du fichier est vide.');
    return;
  }

  const link = document.createElement('a');
  link.download = nomFichier;
  link.href = src;
  link.target="_blank";
  link.rel="noreferrer";
  link.click();
}