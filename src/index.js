import * as React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home'
import About from './About'


export default function Start() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="About" element={<About />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

const rootElement = document.getElementById("root");
render(<Start />, rootElement);
