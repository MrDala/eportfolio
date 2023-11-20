import React from 'react';
import ReactDOM from 'react-dom/client';

import H1 from './components/atoms/H1';
import H2 from './components/atoms/H2';
import H3 from './components/atoms/H3';
import H4 from './components/atoms/H4';
import P from './components/atoms/P';
import Button from './components/atoms/Button';
import IconButton from './components/atoms/IconButton';
import A from './components/atoms/A';
import Picture from './components/atoms/Picture';
import Line from './components/atoms/Line';

import "./style/Style.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <H1>H1 - Titre 1 - version 1</H1>
    <H1 className='secondaire'>H1 - Titre 1 - version 2</H1>
    <H2>H2 - Titre 2 version 1</H2>
    <H2 className='secondaire'>H2 - Titre 2 version 2</H2>
    <H3>H3 - Titre 3</H3>
    <H4>H4 - Titre 4</H4>
    <P>p - Texte</P>
    <Button>Bouton</Button><br/><br/>
    <Button className='secondaire'>Bouton</Button><br/><br/>
    <Button className='plein'>Bouton</Button><br/><br/>
    <Button className='plein xl'>Bouton</Button><br/><br/>
    <IconButton name='mail'/>
    <IconButton name='close'/>
    <IconButton name='cv'/>
    <IconButton name='discord'/>
    <IconButton name='web'/><br></br>
    <IconButton className='xl' name='mail'/>
    <IconButton className='xl' name='close'/>
    <IconButton className='xl' name='cv'/>
    <IconButton className='xl' name='discord'/>
    <IconButton className='xl' name='web'/><br></br>
    <IconButton className='xxl' name='mail'/>
    <IconButton className='xxl' name='close'/>
    <IconButton className='xxl' name='cv'/>
    <IconButton className='xxl' name='discord'/>
    <IconButton className='xxl' name='web'/><br></br>
    <H2><A href='./'>Test</A></H2>
    <Picture name='bg' className='xs'/> <br/>
    <Picture name='bg'/><br/>
    <Picture name='bg' className='xl'/><br/>
    <Line/>
    <Line className='color'/>
    <Line className='dotted'/>
  </React.StrictMode>
);
