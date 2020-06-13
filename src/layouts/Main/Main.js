import React from 'react';
import {AppBar, Footer} from "./components";
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';

import './style.css';

import {Catalog} from "../../screens";

export default function Main() {
    return (
        <BrowserRouter>
            <AppBar />

            <main>
                <Switch>
                    <Route path={'/catalog'} component={Catalog}></Route>
                    <Redirect to={'/catalog'}></Redirect>
                </Switch>

                <Footer />
            </main>


        </BrowserRouter>
    )
}
