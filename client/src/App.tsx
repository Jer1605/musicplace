import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './scss/main.scss';

import Header from './components/layout/Header';
import Home from "./components/pages/Home";
import Musicians from "./components/pages/musicians/Musicians";
import Footer from "./components/layout/Footer";
import Offers from "./components/pages/offers/Offers";
import Classes from "./components/pages/classes/Classes";
import Shows from "./components/pages/shows/Shows";
import Login from "./components/pages/login/Login";
import Musician from "./components/pages/musicians/Musician";

function App() {
  return (
    <div className="musicplace">
        <Router>
            <Header />
            <Switch>
                <Route exact path='/'><Home /></Route>
                <Route exact path='/musicos'><Musicians /></Route>
                <Route exact path='/musicos/:id'><Musician /></Route>
                <Route exact path='/ofertas'><Offers /></Route>
                <Route exact path='/cursos'><Classes /></Route>
                <Route exact path='/conciertos'><Shows /></Route>
                <Route exact path='/login'><Login /></Route>
            </Switch>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
