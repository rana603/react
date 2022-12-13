import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import Header from './header';
import List from './list/list';
import Todo from './todo/todo';
import User from './user/user';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    
    {/* <App/> */}
    {/* <Header item1="html"/> */}
    {/* <Header item1="css"/> */}
    
     <List/>
    <Todo/>
    <User/>
    
  </div>
);


