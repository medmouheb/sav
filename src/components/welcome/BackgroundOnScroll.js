import React, { Component } from 'react';
import "./BackgroundOnScroll.css"
import axios from 'axios';

class BackgroundOnScroll extends Component {
    state = { 
        email:"",
        password:"",
        account:"client"
     }
     

    render() {
        const login = (e) => {
            switch(this.state.account){
                case "client":
                    axios.post(`http://localhost/gl/crud/client/login.php`,  JSON.stringify(this.state) )
                    .then(res => {
                        localStorage.setItem("email", res.data.data.email);
                        localStorage.setItem("id", res.data.data.id);
                        localStorage.setItem("first_name", res.data.data.first_name);
                        localStorage.setItem("last_name", res.data.data.last_name);
                        localStorage.setItem("photo", res.data.data.photo);
                        localStorage.setItem("phone", res.data.data.phone);
                        localStorage.setItem("account", "client");

                    })
                break;

                case "company":
                    axios.post(`http://localhost/gl/crud/company/login.php`,  JSON.stringify(this.state) )
                    .then(res => {
                        localStorage.setItem("email", res.data.data.email);
                        localStorage.setItem("id", res.data.data.id);
                        localStorage.setItem("company_name", res.data.data.company_name);
                        localStorage.setItem("company_logo", res.data.data.company_logo);
                        localStorage.setItem("phone", res.data.data.phone);
                        localStorage.setItem("account", "company");

                    })
                break;

                case "web master":
                    axios.post(`http://localhost/gl/crud/web master/login.php`,  JSON.stringify(this.state) )
                    .then(res => {
                        localStorage.setItem("email", res.data.data.email);
                        localStorage.setItem("id", res.data.data.id);
                        localStorage.setItem("first_name", res.data.data.first_name);
                        localStorage.setItem("last_name", res.data.data.last_name);
                        localStorage.setItem("photo", res.data.data.photo);
                        localStorage.setItem("phone", res.data.data.phone);
                        localStorage.setItem("account", "web master");
                    })
                break;
            }
            
        };
        return (
            <div className="BackgroundOnScroll" style={{display:localStorage.getItem("account")=="none"?"":"none"}}>
                <div className="container" id="container">
                    
                    <div className="form-container sign-in-container">
                        <form action="#">
                            <h1>LOGIN</h1>
                            {/* <div className="social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f" /></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g" /></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in" /></a>
                            </div> */}
                            <span> use your account</span>
                            <input  type="email" onChange={(e)=>{this.setState({email:e.target.value})}} placeholder="Email" />
                            <input type="password" onChange={(e)=>{this.setState({password:e.target.value})}} placeholder="Password" />
                            <label>
                             client   <input name="account" type="radio" onClick={()=>{this.setState({account:"client"})}} />
                            </label>
                            <label>
                             web master   <input name="account" type="radio" onClick={()=>{this.setState({account:"web master"})}} />
                            </label>
                            <label>
                             company   <input name="account" type="radio" onClick={()=>{this.setState({account:"company"})}} />
                            </label>
                            <a href="/"><input type="button" value="login" onClick={login} /></a>
                        </form>
                    </div>
                    <div className="overlay-container">
                        <div className="overlay">
                            <div className="overlay-panel overlay-left">
                                <h1>Welcome Back!</h1>
                                <p>To keep connected with us please login with your personal info</p>
                                <button className="ghost" id="signIn">Sign In</button>
                            </div>
                            <div className="overlay-panel overlay-right">
                                <h1>Hello, Friend!</h1>
                                <p>Enter your personal details and start journey with us</p>
                                <a href="Signup"><button className="ghost" id="signUp">Sign Up</button></a>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default BackgroundOnScroll