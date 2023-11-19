import React from 'react';
import ReactDOM from 'react-dom/client';
import H1 from './components/atoms/H1';
import H2 from './components/atoms/H2';
import H3 from './components/atoms/H3';
import H4 from './components/atoms/H4';
import P from './components/atoms/P';
import Button from './components/atoms/Button';
import IconButton from './components/atoms/IconButton';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <H1>Titre H1</H1>
    <H1 className='secondaire'>Titre H1 secondaire</H1>
    <H2>Titre H2</H2>
    <H2 className='secondaire'>Titre H2 secondaire</H2>
    <H3>Titre H3</H3>
    <H4>Titre H4</H4>
    <P>Paragraphe</P>
    <Button>Bouton</Button><br/><br/>
    <Button className='secondaire'>Bouton</Button><br/><br/>
    <Button className='plein'>Bouton</Button><br/><br/>
    <Button className='plein big'>Bouton</Button><br/><br/>
    <IconButton name='mail'/>
  </React.StrictMode>
);
