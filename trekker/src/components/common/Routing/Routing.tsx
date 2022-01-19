import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { App } from '../App';

function Routing() {
  return (
    <Routes>
      <Route path={"/"} element={<App />}>
        <Route index element={<>Home</>} />
        <Route path={"people"} element={<div>People</div>} />
        <Route path={"things"} element={<div>Things</div>} />
        <Route path={"meta"} element={<div>Meta</div>} />
      </Route>
    </Routes>
  );
}

export default Routing;
