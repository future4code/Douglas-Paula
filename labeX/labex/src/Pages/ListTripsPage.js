import React from "react"
import { useProtectedPage } from "./UseProtectedPage";
import '../App.css';
import PageTitle from "./PageTitle";

function ListTrips() {

    const trips = useTripsList();

    useProtectedPage();
  
    return(
        <div>
            <PageTitle title={"Lista de Viagens"}/>
            <h1>List Trips Page</h1>
        </div>
    )
}

export default ListTrips;