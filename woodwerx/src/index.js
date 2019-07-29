import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import WoodWerx from './WoodWerx';


ReactDOM.render(
    <Router>
        <WoodWerx />
    </Router>
    , document.getElementById('root'));

