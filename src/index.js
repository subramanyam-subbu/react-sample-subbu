import React from 'react';
import ReactDOM from 'react-dom/client';

//import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import ClassComponentLifeCycle from './ClassComponentLifeCycle';
import SimpleFunctionalComponent from './SimpleFunctionalComponent';
//import ComponentWithStyles from './ComponentWithStyles';
//import Home from './ConditionalRendering/Home';
//import UsingMapFunction from './UsingMapFunction';
//import { BrowserRouter } from 'react-router-dom';
//import RoutingMain from './Routing/RoutingMain';
//import Menu from './Routing/Menu';
import Read from './CRUD/read';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    
    {/* <Home role="admin"></Home> */}

    {/* { <SimpleFunctionalComponent name="Benz" model="111"></SimpleFunctionalComponent> } */}

    {/* {<ClassComponentLifeCycle ></ClassComponentLifeCycle> } */}

    {/*<ClassComponentLifeCycle name="Arun" model="Samsung A7" ></ClassComponentLifeCycle> */}
    
    {/* <App /> */}

    {/* <UsingMapFunction></UsingMapFunction> */}

    {/* <ComponentWithStyles></ComponentWithStyles> */}
    
    {/* {<BrowserRouter>}
    
      <Menu></Menu>
      <RoutingMain></RoutingMain>
      
    </BrowserRouter> */}

    <Read/>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
