import React from 'react';
import React, { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';
import ClassComponentLifeCycle from './ClassComponentLifeCycle';
import SimpleFunctionalComponent from './SimpleFunctionalComponent';
import read from './CRUD/read';
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    {/* <App /> */}

    {/* {<ClassComponentLifeCycle />} */}

    {/* <SimpleFunctionalComponent name="Benz" model="111" /> */}

    <read/>




  </StrictMode>
);
