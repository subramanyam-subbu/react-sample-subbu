import React from "react";
import { ReactDOM } from "react";
import './index.css';
import './App.css';
import style1 from './style/style1.module.css';
import style2 from './style/style2.module.css';

class ComponentWithStyles extends React.Component
{
    constructor()
    {
        super();       
        
        this.state = {myName:"Sri"}
    }

    render()
    {
        const nameStyle = {
            color:"blue",
            fontStyle:"italic"
        }

        return <div>
            <h1 style={{color:"red",fontStyle:"italic"}}>
                Heading with Inline Style
            </h1>    

            <br></br>

            <label style={nameStyle}>
                Text with internal css Style
            </label>

            <br></br>

            <label className="styleText1">
                Text with internal Style
            </label>

            <br></br>
      
            <label className={style1.styleText1}>
                Text with external css Style
            </label>
            <label className={style1.styleText2}>
                Text with external css Style
            </label>
            <br></br>
            <label className={style2.styleText1}>
                Text with external css Style
            </label>


            <br></br>
             
                            
        </div>
    }
}

export default ComponentWithStyles;