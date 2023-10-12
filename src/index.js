import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from './login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './register';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import Book from './Book';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
   <Nav/>
    <Routes>
      <Route path='/' element={<Login/>} />
      <Route path='register' element={<Register/>} />
      <Route path='login' element={<Login/>} />
      <Route path='book' element={<Book/>} />
    </Routes>
   </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

