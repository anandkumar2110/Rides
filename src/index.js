import React from "react";
import ReactDOM from 'react-dom' ;
import Navbar from './Navbar' ;
import App from "./App";
import {BrowserRouter, NavLink, Route} from 'react-router-dom' ;

ReactDOM.render(
<>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</>

,document.getElementById("root"));

