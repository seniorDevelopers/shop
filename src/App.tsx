import React  from 'react';
import {BrowserRouter, Routes, Route } from "react-router-dom";
// import home from "./pages/Home/home"
import './App.css';
import routes from './routes';

function App() {
  return (
    <BrowserRouter>
    <Routes>
          {routes.map(({ path, element }) => (
            <Route path={path} element={element} key={path} />
          ))}
        </Routes>
        </BrowserRouter>
  );
}

export default App;
