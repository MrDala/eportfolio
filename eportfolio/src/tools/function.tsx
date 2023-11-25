export function openLink(link : string) {
  if (link) {
    window.open(link, '_blank');
  }
}
  
export function applyLastRow(HTML_div: HTMLElement, HTML_ElementName: string, elementsPerRaw: number) {
  const HTML_Elements = HTML_div.querySelectorAll(HTML_ElementName);
  HTML_Elements.forEach((element) => {
    element.classList.remove('last-row');
  });
  
  // Calcule le nombre d'éléments dans la dernière ligne
  const elementsInLastRow = HTML_Elements.length % elementsPerRaw || elementsPerRaw;

  // Retire la bordure basse pour les éléments de la dernière ligne
  for (let i = 1; i <= elementsInLastRow; i++) {
    HTML_Elements[HTML_Elements.length - i].classList.add('last-row');
  }
}