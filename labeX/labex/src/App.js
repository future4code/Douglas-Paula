import React from 'react';
import {BrowserRouter , Switch, Route } from 'react-router-dom';
import './App.css';

import AdmHome from './Pages/AdminHomePage';
import HomePage from './Pages/HomePage';
import ListTrips from './Pages/ListTripsPage';
import AppForm from './Pages/ApplicationFormPage';
import Login from './Pages/LoginPage';
import CreateTrip from './Pages/CreateTripPage';
import TripDetails from './Pages/TripDetailsPage';

function App() {


  return (
    <BrowserRouter>
      <Switch>

        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/trips/list"}>
          <ListTrips />
        </Route>

        <Route exact path={"/trips/application"}>
          <AppForm />
        </Route>

        <Route exact path={"/login"}>
          <Login />
        </Route>

        <Route exact path={"/admin/trips/list"}>
          <AdmHome />
        </Route>

        <Route exact path={"/admin/trips/create"}>
          <CreateTrip />
        </Route>

        <Route exact path={"/admin/trips/:id"}>
          <TripDetails/>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}

export default App;
