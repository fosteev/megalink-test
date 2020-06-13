import React from 'react';
import {AppBar} from "./components";
import {
    BrowserRouter,
    Route,
    Redirect,
    Switch,
    Link
} from 'react-router-dom';

export default function Main() {
    return (
        <BrowserRouter>
            <AppBar />
            Main
        </BrowserRouter>
    )
}
