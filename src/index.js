import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Redux from './redux';
import registerServiceWorker from './registerServiceWorker';
import FirstComponent from './FirstComponent'
import FirstExample from './FirstExample';
import FirstState from './FirstState';
import FirstProps from './FirstProps';
import FirstSetState from './FirstSetState';
import SecondProps from './SecondProps';

ReactDOM.render(<Redux />, document.getElementById('root'));
//ReactDOM.render(<App/>,document.getElementById('root'));
//ReactDOM.render(<SecondProps />, document.getElementById('root'));
//ReactDOM.render(<FirstComponent />, document.getElementById('root'));
//ReactDOM.render(<FirstSetState />, document.getElementById('root'));
//ReactDOM.render(<FirstProps header="try" />, document.getElementById('root'));
//ReactDOM.render(<FirstState />, document.getElementById('root'));
//ReactDOM.render(<FirstExample />, document.getElementById('root'));
registerServiceWorker();
