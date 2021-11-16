import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import AdminHome from "./Pages/AdminHome";
import ApplicationForm from "./Pages/ApplicationForm";
import CreateTrip from "./Pages/CreateTrip";
import Home from "./Pages/Home";
import ListTrips from "./Pages/ListTrips";
import Login from "./Pages/Login";
import TripDetails from "./Pages/TripDetails/index";

import styled, { createGlobalStyle } from "styled-components";
import { useCallback, useState } from "react";
import axios from "axios";

function App() {
  const [trips, setTrips] = useState([]);

  const createTrip = () => {
    const token = localStorage.getItem("token");

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-rodrigues-banu/trips",
        {
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        }
      )
      .then(() => {});
  };

  const deleteTrip = (id) => {
    const token = localStorage.getItem("token");

    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-rodrigues-banu/trips/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            auth: token,
          },
        }
      )
      .then(() => {
        setTrips(trips.filter((trip) => id !== trip.id));
        alert("Viagem deletada com sucesso");
      })
      .catch(() => alert("Erro ao deletar..."));
  };

  const getTrips = useCallback(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/douglas-rodrigues-banu/trips",
        {
          header: {
            aluno: "douglas",
          },
        }
      )
      .then((response) => {
        console.log("foi", response.data);
        setTrips(response.data.trips);
      })
      .catch((error) => {
        console.log("não foi", error.response);
      });
  }, []);

  return (
    <Router>
      <GlobalStyle />

      <Main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route
            path="/admin/trips"
            exact
            render={() => (
              <AdminHome
                trips={trips}
                getTrips={getTrips}
                deleteTrip={deleteTrip}
              />
            )}
            trips={trips}
          />
          <Route
            path="/admin/trips/:id"
            exact
            render={() => <TripDetails trips={trips} />}
          />
          <Route
            path="/trips"
            exact
            render={() => <ListTrips trips={trips} getTrips={getTrips} />}
          />
          <Route
            path="/trips/:id/application"
            exact
            render={() => <ApplicationForm trips={trips} />}
          />
          <Route
            path="/createtrip"
            exact
            render={() => <CreateTrip createTrip={createTrip} />}
          />
        </Switch>
      </Main>
    </Router>
  );
}

export default App;

const GlobalStyle = createGlobalStyle`
 * {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: 'Heebo', sans-serif;
 }
 #root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
 }
`;

export const Main = styled.div`
  background-color: #f1faee;
  display: flex;
  flex: 1;
`;