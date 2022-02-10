import "./style.scss";
import logo from "./content/logo.png";
import React from "react";
import ReactDOM from 'react-dom';

const modo = process.env.modo;

const img = document.createElement("img")
img.src = logo;

document.getElementById("imgContainer").appendChild(img);

export default class HelloWorld extends React.Component{    
    render () {    
      return (    
        <h1>This is a React/TS template in {modo}</h1>    
      )    
    }    
  };    
      
  ReactDOM.render(    
    <HelloWorld/>,    
    document.getElementById('root')    
  );