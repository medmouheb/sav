import React, { Component } from 'react';
import axios from 'axios';

class CreateProduct extends Component {
state={
    name:"",
    description:"",
    idCompany:localStorage.getItem("id"),
    photo:""
}

    render() {
        const handleCreate=(e)=>{
            axios.post(`http://localhost/gl/crud/product/create.php`,  JSON.stringify(this.state) )
                    .then(res => {
                        console.log(res);
                        

                    })
                    e.preventDefault()
        }
        return (
            <form style={{ border: '1px solid #ccc' }}>
                <div className="container">
                    <h1>Create Product</h1>
                    <p>Please fill in this form to create an Product.</p>
                    <hr />
                    <label htmlFor="product name "><b>product name </b></label>
                    <input onChange={(e)=>{this.setState({name:e.target.value})}} type="text" placeholder="product name" name="product name " required />
                    <label htmlFor="description"><b>description</b></label>
                    <input onChange={(e)=>{this.setState({description:e.target.value})}} type="text" placeholder="Enter description" name="description" required />
                    <label htmlFor="photo url"><b>photo url</b></label>
                    <input onChange={(e)=>{this.setState({photo:e.target.value})}} type="text" placeholder="photo url" name="photo url" required />
                    
                    <div className="clearfix">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <button onClick={(e)=>{handleCreate(e)}} type="submit" className="signupbtn">Create</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default CreateProduct