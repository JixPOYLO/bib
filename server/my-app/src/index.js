
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';
import styles from './components/mystyle.module.css'; 

ReactDOM.render(<h1 className={styles.bigblue}> Project by JixPOYLO </h1>, document.getElementById('sandy'));

console.log("jix")
ReactDOM.render(<App />, document.getElementById('root'));
