import React from 'react';

function SimpleFunctionalComponent(props2)
{
    return <div>
         <h1>This is a Simple Functional Component created with js syntax</h1>
         <br></br>
         {props2.name}
         </div>
}

const SimpleFunctionalComponent=()=>
{
     return <h1>This is a Simple Functional Component</h1>;
 }

export default SimpleFunctionalComponent;