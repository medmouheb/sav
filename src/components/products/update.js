import React, { Component } from "react"
import axios from "axios"
import Card from "./card"
class UpdateProduct extends Component {
    state = {
        name: "",
        description:"",
        photo:""

    }
    componentWillMount() {
        axios.post(`http://localhost/gl/crud/product/readOne.php`, JSON.stringify({ id: this.props.match.params.id.replace(":", "") }))
        .then(res => {
            this.setState({ ...res.data.data })
        })

    }
    render() {
        const post = () => {
            axios.post(`http://localhost/gl/crud/product/update.php`, JSON.stringify({ id: this.props.match.params.id.replace(":", ""),name:this.state.name,description:this.state.description,photo:this.state.photo }))
            .then(res => {
                console.log(res)
            })

        }
        return (
            <div>
                <form>
                    <input onChange={(e)=>{this.setState({name: e.target.value})}} type="text" value={this.state.name} />
                    <input onChange={(e)=>{this.setState({description: e.target.value})}}  type="text" value={this.state.description} />
                    <input onChange={(e)=>{this.setState({photo: e.target.value})}}  type="text" value={this.state.photo} />
                    <input type="button" value="update" onClick={post} />
                </form>
            </div>
        )
    }
}
export default UpdateProduct;