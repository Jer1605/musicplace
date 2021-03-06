import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './scss/main.scss';

import Header from './components/layout/Header';
import Home from "./components/pages/Home";
import Musicians from "./components/pages/musicians/Musicians";
import MusicianPost from "./components/pages/musicians/MusicianPost";
import Footer from "./components/layout/Footer";
import Offers from "./components/pages/offers/Offers";
import Classes from "./components/pages/classes/Classes";
import Shows from "./components/pages/shows/Shows";
import Login from "./components/pages/login/Login";
import Musician from "./components/pages/musicians/Musician";
import Class from "./components/pages/classes/Class";
import Show from "./components/pages/shows/Show";
import Offer from "./components/pages/offers/Offer";
import Dashboard from "./components/pages/dashboard/Dashboard";
import PrivateRoute from "./components/common/ProtectedRoute";
import DashboardMusicians from "./components/pages/dashboard/DashboardMusicians";
import DashboardMusician from "./components/pages/dashboard/DashboardMusician";
import ShowPost from "./components/pages/shows/ShowPost";

function App() {
  return (
    <div className="colibri">
        <Router>
            <Header />
            <div className={'main'}>
                <Switch>
                    <Route exact path='/'><Home /></Route>
                    <Route exact path='/musicos'><Musicians /></Route>
                    <Route exact path='/musicos/new'><MusicianPost /></Route>
                    <Route exact path='/musicos/:id'><Musician /></Route>
                    <Route exact path='/ofertas'><Offers /></Route>
                    <Route exact path='/ofertas/:id'><Offer /></Route>
                    <Route exact path='/cursos'><Classes /></Route>
                    <Route exact path='/cursos/:id'><Class /></Route>
                    <Route exact path='/conciertos'><Shows /></Route>
                    <Route exact path='/conciertos/new'><PrivateRoute component={ShowPost} /></Route>
                    <Route exact path='/jamsession/new'><PrivateRoute component={ShowPost} jamSession={true} /></Route>
                    <Route exact path='/conciertos/:id'><Show /></Route>
                    <Route exact path='/login'><Login /></Route>
                    <Route exact path='/micuenta'><PrivateRoute component={Dashboard} /></Route>
                    <Route exact path='/micuenta/musicos'><PrivateRoute component={DashboardMusicians} /></Route>
                    <Route exact path='/micuenta/musicos/:id'><PrivateRoute component={DashboardMusician} /></Route>
                </Switch>
            </div>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
