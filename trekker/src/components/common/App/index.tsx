import React from 'react';
import { Outlet } from "react-router";

import logo from './logo.svg';
import './styles.css';

/**
 * This will be the root element for our website.
 */
export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello Warudo
        </p>
      </header>
      <Outlet />
    </div>
  );
}