/*!

=========================================================
* Paper Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
// import "./Admin/assets/css/paper-dashboard.min.css";
// // import "./Ayenco/assets/css/paper-dashboard.min.css";
// import "perfect-scrollbar/css/perfect-scrollbar.css";
// import Byte from './Admin/views/login'
// import ByteRegister from './Admin/views/Register'
// import './App.css'
import 'antd/dist/antd.css'; 
import Eco from './Replica/routes'
// import Show from './Ayenco/routes'


const hist = createBrowserHistory();
ReactDOM.render(
  <Eco />
  ,
  document.getElementById("root")
)
