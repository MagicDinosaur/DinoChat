
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import {
    BrowserRouter as Router,
    Routes ,
    Route,
    Link
} from "react-router-dom";
import Welcome from "./pages/Welcome";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

        <Router>
            <Routes>
                <Route exact path="/" element={<App/>}>

                </Route>
            </Routes>
        </Router>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
