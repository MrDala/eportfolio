import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/organisms/Header';

import "./style/Style.css";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Header 
      titre1='E&#8209;Portfolio' 
      titre2='Alexis&#160;LEON' 
      icon1={{
        className: 'xs',
        name: 'list',
        openOverlay: true,
      }}
      icon2={{
        name: 'cv',
        openInNewTab: true,
        link: './ressources/pdf/CV_LEON_Alexis.pdf',
      }}
      icon3={{
        name: 'linkedin',
        openInNewTab: true,
        link: 'https://www.linkedin.com/in/alexis-leon1/',
      }}
    />
  </React.StrictMode>
);
