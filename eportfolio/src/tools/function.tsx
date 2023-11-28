export function openLink(link : string) : void {
  if (link) {
    window.open(link, '_blank');
  }
}
  
export function applyLastRow(HTML_div: HTMLElement, HTML_ElementName: string, elementsPerRawDiplome: number) : void {
  const HTML_Elements = HTML_div.querySelectorAll(HTML_ElementName);
  HTML_Elements.forEach((element) => {
    element.classList.remove('last-row');
  });
  
  // Calcule le nombre d'éléments dans la dernière ligne
  const elementsInLastRow = HTML_Elements.length % elementsPerRawDiplome || elementsPerRawDiplome;

  // Retire la bordure basse pour les éléments de la dernière ligne
  for (let i = 1; i <= elementsInLastRow; i++) {
    HTML_Elements[HTML_Elements.length - i].classList.add('last-row');
  }
}

export function downloadFile(src: string): void {
  if (!src) {
    console.error('Le chemin du fichier est vide.');
    return;
  }

  const link = document.createElement('a');
  link.download = 'CV_Alexis_LEON';
  link.href = src;
  link.target="_blank";
  link.rel="noreferrer";
  link.click();
}