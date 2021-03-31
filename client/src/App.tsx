import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './scss/main.scss';

import Header from './components/layout/Header';
import Home from "./components/pages/Home";

function App() {
  return (
    <div className="musicplace">
        <Router>
            <Header />
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route exact path='/ofertas'>Ofertas</Route>
                <Route exact path='/cursos'>Cursos</Route>
                <Route exact path='/conciertos'>Conciertos</Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
