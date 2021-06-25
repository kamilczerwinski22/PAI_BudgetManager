import React from 'react';
import { Route } from 'react-router-dom';
import {Home} from "./Components/Home";
import {Contact} from "./Components/Contact";
import {Manager} from "./Components/Manager";


export default (
    <React.Fragment>
        <Route exact path="/" component={Home} name={"Homepage"}/>
        <Route exact path="/Contact" component={Contact} name="Contact" />
        <Route exact path="/Manager" component={Manager} name="Manager" />
    </React.Fragment>
);