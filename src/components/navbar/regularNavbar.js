import React, { Component } from 'react';
import "./regularNavbar.css"
class RegularNavbar extends Component {


    render() {
        const user =()=>{
            switch(localStorage.getItem("account")){
                case "none": 
                    return <div className="header-right">
                                <a className="active" href="/">Home</a>
                                <a href="/Signup">SIGNUP</a>
                                <a href="/Contact">Contact</a>
                            </div>
                break;
                case "client": 
                    return <div className="header-right">
                                <a className="active" href="/">Home</a>
                                <a href="/Messages">MESSAGES</a>
                                <a href="/" onClick={()=>{localStorage.setItem("account", "none");}}>LOGUE OUT</a>
                            </div>
                break;
                case "web master": 
                    return <div className="header-right">
                                <a className="active" href="/">Home</a>
                                <a href="/ClientTable">CLIENT TABLE</a>
                                <a href="/CompanyTable">COMPANY TABLE</a>
                                <a href="/CreateCompany">CREATE COMPANY</a>
                                <a href="/" onClick={()=>{localStorage.setItem("account", "none");}}>LOGUE OUT</a>
                            </div>
                break;
                case "company": 
                    return <div className="header-right">
                                <a className="active" href="/">Home</a>
                                <a href="/MessageCompany">MESSAGE</a>
                                <a href="/CreateProduct">CREATE PRODUCT</a>
                                <a href="/" onClick={()=>{localStorage.setItem("account", "none");}}>LOGUE OUT</a>
                            </div>
                break;
            }
        }
        return (
            <div className="header">
                <a href="#default" className="logo">SAV SERVICES</a>
                {user()}
                
            </div>
        );
    }
}

export default RegularNavbar