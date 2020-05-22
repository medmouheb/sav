import React, { Component } from "react"
import axios from "axios"
import Card from "./card"
class Product extends Component {
    state = {
        product: {},
        comments: [],
        comment: ""
    }
    componentWillMount() {
        axios.post(`http://localhost/gl/crud/product/readOne.php`, JSON.stringify({ id: this.props.match.params.id.replace(":", "") }))
            .then(res => {
                this.setState({ product: res.data.data })
            })
        axios.post(`http://localhost/gl/crud/review/read.php`, JSON.stringify({ idProduct: this.props.match.params.id.replace(":", "") }))
            .then(res => {
                this.setState({ comments: res.data.data })
            })
    }
    render() {
        const post=()=>{
            axios.post(`http://localhost/gl/crud/review/create.php`, JSON.stringify({ idProduct: this.props.match.params.id.replace(":", ""),text:this.state.comment,idClient:localStorage.getItem("id"),idCompany:this.state.product.idCompany }))
            .then(res => {
                console.log({ res })
            })
            axios.post(`http://localhost/gl/crud/messages/sendMessage.php`, JSON.stringify({idClient:localStorage.getItem("id") ,idCompany:this.state.product.idCompany,type:"client",content:this.state.comment}))
            .then(res => {
                console.log({ res })
            })
            window.location.reload();
        }
        const deleteProduct=()=>{
            axios.post(`http://localhost/gl/crud/product/delete.php`, JSON.stringify({ id: this.props.match.params.id.replace(":", "") }))
        .then(res => {
            this.setState(res)
        })
        }
        return (
            <div>
                <input type="button" value="delete" onClick={deleteProduct} />
                <a href={`/UpdateProduct:${this.props.match.params.id.replace(":", "")}`}>Update Product</a>
                <Card el={this.state.product}/>
                <span><input onChange={(e)=>{this.setState({comment:e.target.value})}}  style={{width:300}} type="text" placeholder="comment here" /></span>
                <span ><input onClick={post} style={{width:50}} type="button" value="=>" /></span>
        {this.state.comments.map(el => { return <p className="comment"><span className="idClient">idClient:{el.idClient}</span><span className="text"> {el.text} </span> <span className="fixed"> isfexed : {el.isfexed||"no"}</span> <span className="ratting"> costumer service:{el.ratting}</span></p> })}
            </div>
        )
    }
}
export default Product;