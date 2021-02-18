import React, { Component } from 'react';
import  NavBar  from "./container/NavbarContainer/index.js";
import Dashboard from "./container/Dashboard/index.js";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
    constructor(){
        super()


    }

    render(){
        return(
            <div className="ui-content">
            <NavBar/>
            <Dashboard/>
            
            </div>

        )
    }
}
