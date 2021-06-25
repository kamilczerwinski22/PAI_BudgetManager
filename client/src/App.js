import React, {Component} from 'react';
import {BrowserRouter as Router, NavLink} from 'react-router-dom';
import routes from './routes';
import './App.css';
import {NavBar} from "./Components/NavBar";


class App extends Component{
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <div>
                        <Router>
                            <NavBar/>
                            <React.Fragment>
                                <div className="app">{routes}</div>
                            </React.Fragment>
                        </Router>
                    </div>
                </header>
            </div>
        )
    }
}

export default App;