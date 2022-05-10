import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import App from "./App";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NavigationBar from "./NavigationBar";
import NoMatch from "../pages/NoMatch";

export default function Root() {
    const routes = [
        {path: '/', name: 'Home', Component: App, exact: true},
        {path: '/about', name: 'About', Component: About, exact: false},
        {path: '/contact', name: 'Contact', Component: Contact, exact: false},
        {path: '*', name: 'No Match', Component: NoMatch, exact: false},
    ];

    return (
        <Router>
            <div className="todo-app-container">
                <NavigationBar/>
                <div className="content">
                    <Routes>
                        {routes.map(({path, Component, exact}) => (
                            <Route key={path} path={path} exact={exact} element={<Component/>}/>
                        ))}
                    </Routes>
                </div>
            </div>
        </Router>
    );
}