import React, { Component } from 'react';
import "./signup.css"
import axios from 'axios';

class Signup extends Component {
    state = { 
        email:"",
        password:"",
        first_name:"",
        last_name:"",
        phone:"",
        photo:""
        
     }


    render() {
        const handleSingup=(e)=>{
            axios.post(`http://localhost/gl/crud/client/signup.php`,  JSON.stringify(this.state) )
                    .then(res => {
                        console.log(res);
                        

                    })
            e.preventDefault()
        }
        return (
            <form action="action_page.php" style={{ border: '1px solid #ccc' }}>
                <div className="container">
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />
                    <label htmlFor="firt name "><b>firt name </b></label>
                    <input onChange={(e)=>{this.setState({first_name:e.target.value})}} type="text" placeholder="Enter firt name " name="firt name " required />
                    <label htmlFor="last name"><b>last name</b></label>
                    <input onChange={(e)=>{this.setState({last_name:e.target.value})}} type="text" placeholder="Enter last name" name="last name" required />
                    <label htmlFor="email"><b>Email</b></label>
                    <input onChange={(e)=>{this.setState({email:e.target.value})}} type="text" placeholder="Enter Email" name="email" required />
                    <label htmlFor="psw"><b>Password</b></label>
                    <input onChange={(e)=>{this.setState({password:e.target.value})}} type="password" placeholder="Enter Password" name="psw" required />
                    <label htmlFor="phone "><b>phone </b></label>
                    <input onChange={(e)=>{this.setState({phone:e.target.value})}} type="text" placeholder="Enter phone " name="phone " required />
                    <label htmlFor="photo "><b>photo </b></label>
                    <input onChange={(e)=>{this.setState({photo:e.target.value})}} type="text" placeholder="Enter photo " name="photo " required />
                    
                   
                    <p>By creating an account you agree to our <a href="#" style={{ color: 'dodgerblue' }}>Terms &amp; Privacy</a>.</p>
                    <div className="clearfix">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <button onClick={(e)=>{handleSingup(e)}} type="submit" className="signupbtn">Sign Up</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default Signup