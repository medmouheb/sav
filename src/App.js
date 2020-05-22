import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route

} from "react-router-dom";
import RegularNavbar from "./components/navbar/regularNavbar"
import BackgroundOnScroll from "./components/welcome/BackgroundOnScroll"
import Brands from "./components/welcome/brands"
import Signup from "./components/signup/signup"
import CreateCompany from "./components/createCompany/createCompany"
import ClientTable from "./components/table/clientTable"
import CompanyTable from "./components/table/companyTable"
import CreateProduct from "./components/createProduct/createProduct"
import Products from "./components/products/products"
import Product from "./components/products/product"
import Message from "./components/message/message"
import MessageCompany from "./components/message/messageCompany"
import UpdateProduct from "./components/products/update"
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route path="/">
            <RegularNavbar />
          </Route>
          <Route exact path="/">
            <BackgroundOnScroll />
          </Route>
          <Route exact path="/">
            <Brands />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          <Route path="/UpdateProduct:id" component={UpdateProduct}/>
          
          <Route path="/CreateCompany">
            <CreateCompany />
          </Route>
          <Route path="/CreateProduct">
            <CreateProduct />
          </Route>
          <Route path="/Message">
            <Message />
          </Route>
          <Route path="/ClientTable">
            <ClientTable />
          </Route>
          <Route path="/CompanyTable">
            <CompanyTable />
          </Route>
          
          <Route path="/brand:id" component={Products}/>
          <Route path="/product:id" component={Product}/>
          <Route path="/Messages">
            <Message />
          </Route>
          <Route path="/MessageCompany">
            <MessageCompany />
          </Route>
        </div>
      </Router>
    )
  }
}

export default App;
