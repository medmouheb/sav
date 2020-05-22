import React, { Component } from 'react';
import "./message.css"
import axios from "axios"
class MessageCompany extends Component {
    state = {
        messages: [],
        ids: [],
        idClient:0,
        message:""
        }
    componentWillMount() {
            axios.post(`http://localhost/gl/crud/messages/readCompany.php`, JSON.stringify({ idCompany: localStorage.getItem("id") }))
                .then(res => {
                    this.setState({ messages: res.data.data })
                })
            setTimeout(() => {
                this.state.messages.forEach(element => {
                    if (!this.state.ids.includes(element.idClient)) {
                        this.state.ids.push(element.idClient)
                        this.setState({ ...this.state })
                    }
                });
            }, 500);

        //  if (localStorage.getItem("account") == "company") {
        //     axios.post(`http://localhost/gl/crud/messages/readCompany.php`, JSON.stringify({ idClient: localStorage.getItem("id") }))
        //         .then(res => {
        //             this.setState({ messages: res.data.data })
        //         })
        //     setTimeout(() => {
        //         this.state.messages.forEach(element => {
        //             if (!this.state.ids.includes(element.idClient)) {
        //                 this.state.ids.push(element.idClient)
        //                 this.setState({ ...this.state })
        //             }
        //         });
        //     }, 500);
        // }
    }

    render() {
        const message=()=>{
            
            axios.post(`http://localhost/gl/crud/messages/sendMessage.php`, JSON.stringify({idCompany:localStorage.getItem("id") ,idClient:this.state.idClient,type:"company",content:this.state.message}))
            .then(res => {
                console.log({ res })
            })
        }
        const sendfixed=()=>{
            axios.post(`http://localhost/gl/crud/messages/sendFixed.php`, JSON.stringify({idCompany:localStorage.getItem("id") ,idClient:this.state.idClient}))
            .then(res => {
                console.log("hhhhh",res)
            })
        }
        const sendratting=()=>{
            axios.post(`http://localhost/gl/crud/messages/sendRatting.php`, JSON.stringify({idCompany:localStorage.getItem("id") ,idClient:this.state.idClient}))
            .then(res => {
                console.log("hhhhh",res)
            })
        }
        return (
            <div className="container">
                <h3 className=" text-center">Messaging</h3>
                <div className="messaging">
                    <div className="inbox_msg">
                        <div className="inbox_people">
                            <div className="headind_srch">
                                <div className="recent_heading">
                                    <h4>Recent</h4>
                                </div>
                                <div className="srch_bar">
                                    <div className="stylish-input-group">
                                        <input type="text" className="search-bar" placeholder="Search" />
                                        <span className="input-group-addon">
                                            <button type="button"> <i className="fa fa-search" aria-hidden="true" /> </button>
                                        </span> </div>
                                </div>
                            </div>
                            <div className="inbox_chat">


                                {this.state.ids.map(el => {
                                    return (
                                        <div onClick={()=>{this.setState({idClient:el})}} className="chat_list">
                                            <div className="chat_people">
                                                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                                <div className="chat_ib">
                                                    <h5>Client id : {el} <span className="chat_date">Dec 25</span></h5>

                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}


                            </div>
                        </div>
                        <div className="mesgs">
                            <div className="msg_history">
                                {this.state.messages.map(el => {
                                    if (el.type == "company" && el.idClient==this.state.idClient) {

                                        return (
                                            <div className="outgoing_msg">
                                                <div className="sent_msg">
                                                    <p>{el.content}</p>
                                                    <span className="time_date"> 11:01 AM    |    June 9</span> </div>
                                            </div>
                                        )
                                    } else if (el.type == "fixed" && el.idClient==this.state.idClient) {
                                        return (
                                            <div className="outgoing_msg">
                                                <div className="sent_msg">
                                                <p>is your problem fixed?<input  type="button" value="yes" /></p>
                                                    <span className="time_date"> 11:01 AM    |    June 9</span> </div>
                                            </div>
                                            
                                        )
                                    } else if (el.type == "ratting" && el.idClient==this.state.idClient) {
                                        return (
                                            <div className="outgoing_msg">
                                                <div className="sent_msg">
                                                <p> rate our customer services
                                                            <span  class="fa fa-star checked" />
                                                            <span   class="fa fa-star checked" />
                                                            <span   class="fa fa-star checked" />
                                                            <span   class="fa fa-star checked" />
                                                            <span   class="fa fa-star checked" />
                                                        </p>                                                    <span className="time_date"> 11:01 AM    |    June 9</span> </div>
                                            </div>
                                            
                                        )
                                    } else if( el.idClient==this.state.idClient) {
                                        return (
                                            <div className="incoming_msg">
                                                <div className="incoming_msg_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil" /> </div>
                                                <div className="received_msg">
                                                    <div className="received_withd_msg">
                                                        <p>{el.content}</p>
                                                        <span className="time_date"> 11:01 AM    |    June 9</span></div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })}



                            </div>
                            <div className="type_msg">
                                <div className="input_msg_write">
                                    <input onChange={(e)=>{this.setState({message:e.target.value})}} type="text" className="write_msg" placeholder="Type a message" />
                                    <button onClick={sendratting} >ratting</button>
                                    <button onClick={sendfixed} >fixed</button>
                                    <button onClick={message} className="msg_send_btn" type="button"><i className="fa fa-paper-plane-o" aria-hidden="true" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-center top_spac"> Design by <a target="_blank" href="#">Sunil Rajput</a></p>
                </div></div>
        );
    }
}

export default MessageCompany