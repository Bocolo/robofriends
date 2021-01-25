import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Containers/App';

import reportWebVitals from './reportWebVitals';
import 'tachyons';
//{} destructure when export is not default/ can have 
//multi exports... e.g tobots.js 
//if multi {robots, cats}
//import { robots } from './robots.js';

ReactDOM.render(
 <App />,
    document.getElementById('root')
    );

    // If you want to start measuring performance in your app, pass a function
    // to log results (for example: reportWebVitals(console.log))
    // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
    reportWebVitals();
