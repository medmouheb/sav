import React, { Component } from 'react';
import axios from 'axios';

class CreateCompany extends Component {
state={
    email:"",
    password:"",
    company_name:"",
    company_logo:"",
    phone:""
}

    render() {
        const handleCreate=(e)=>{
            axios.post(`http://localhost/gl/crud/company/create.php`,  JSON.stringify(this.state) )
                    .then(res => {
                        console.log(res);
                        

                    })
                    e.preventDefault()
        }
        return (
            <form style={{ border: '1px solid #ccc' }}>
                <div className="container">
                    <h1>Create Company</h1>
                    <p>Please fill in this form to create an account.</p>
                    <hr />
                    <label htmlFor="company "><b>company name </b></label>
                    <input onChange={(e)=>{this.setState({company_name:e.target.value})}} type="text" placeholder="Enter company " name="company " required />
                    <label htmlFor="email"><b>email</b></label>
                    <input onChange={(e)=>{this.setState({email:e.target.value})}} type="text" placeholder="Enter email" name="email" required />
                    <label htmlFor="password"><b>password</b></label>
                    <input onChange={(e)=>{this.setState({password:e.target.value})}} type="password" placeholder="Enter password" name="password" required />
                    <label htmlFor="phone"><b>phone</b></label>
                    <input onChange={(e)=>{this.setState({phone:e.target.value})}} type="number" placeholder="Enter phone" name="phone" required />
                    <label htmlFor="photo url"><b>photo url</b></label>
                    <input onChange={(e)=>{this.setState({company_logo:e.target.value})}} type="text" placeholder="photo url" name="photo url" required />
                    
                    <div className="clearfix">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <button onClick={(e)=>{handleCreate(e)}} type="submit" className="signupbtn">Create</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default CreateCompany