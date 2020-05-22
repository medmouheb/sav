import React, { Component } from "react"
import "./products.css"
import axios from "axios"
import Card from "./card"
class Products extends Component {
    state = {
        data: []
    }
    componentWillMount() {
        console.log("yawwww", this.props.match.params.id.replace(":", ""))
        axios.post(`http://localhost/gl/crud/product/read.php`, JSON.stringify({ idCompany: this.props.match.params.id.replace(":", "") }))
            .then(res => {
                this.setState({ data: res.data.data })
            })
    }
    render() {
        return (
            <div className="products">
                {this.state.data.map(element=>{return <Card el={element}/>})}
            </div>)
    }
}
export default Products;