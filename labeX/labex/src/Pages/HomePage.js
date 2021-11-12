import React from 'react';
import {BrowserRouter , Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../App.css';

function HomePage() {
    return(
        <div>
            <h1>Home Page</h1>
            <Link to={"/ListTripsPage"}>
                <button>
                    Ver Viagens
                </button>
            </Link>
            <Link>
                <button to={"/LoginPage"}>
                    Area ADM
                </button>
            </Link>
        </div>
    )
}

export default HomePage;