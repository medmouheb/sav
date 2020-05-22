import React, { Component } from "react"
class Card extends Component {

    render() {
        return (
            <a className="product" href={`/product:${this.props.el.id}`}>
                <div>
                    <h2>{this.props.el.name}</h2>
                    <img src={this.props.el.photo} />
                </div>
                <p>{this.props.el.description}</p>
            </a>
        )
    }
}
export default Card;