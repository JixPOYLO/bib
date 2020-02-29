
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import styles from './mystyle.module.css'; 

ReactDOM.render(<p className={styles.bigblue}> the Project by JixPOYLO </p>, document.getElementById('sandy'));
ReactDOM.render(<App />, document.getElementById('root'));

console.log("jix");
