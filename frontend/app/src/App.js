import React from "react";
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import  AddProduct from "./components/products/add-product.components"
import ProductList from "./components/products/product-list.components"
import Product from "./components/products/edit.component"
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core';
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    
    <Router>
      <div>
      
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          
          <Route path="/product/:param" component={Product} >
          </Route>
  
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Welcome</h2>
    </div>
  );
}
function Account() {
  return (
    <div>
      <h2>My Account</h2>
      
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <ProductList  ></ProductList>
      <AddProduct ></AddProduct>
      
    </div>
  );
}