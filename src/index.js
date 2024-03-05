import React from "react";
import ReactDOM from "react-dom/client";
// import {BrowserRouter,Routes,Route} from 'react-router-dom';
import App from "./App";
// import { BrowserRouter } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';
// import About from './Page/About';
// import Home from './Page/Home';
// import Contact from './Page/Contact';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <h1>React router</h1> */}
    {/* <BrowserRouter>
<Routes>
<Route element={<Home />} path='/Home' />
<Route element={<About />} path='/About' />
<Route element={<Contact />} path='/Contact' />
</Routes>
</BrowserRouter> */}
    {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}

    <App />
  </>
);
