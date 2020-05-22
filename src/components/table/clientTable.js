import React, { Component } from 'react';
import axios from 'axios';

class ClientTable extends Component {
    state = {
        data: []
    }
    componentWillMount() {
        axios.get(`http://localhost/gl/crud/client/read.php`)
            .then(res => {
                this.setState({ data: res.data.data })
            }
            )
    }
    render() {
        const deleteClient = (id) => {
            axios.post(`http://localhost/gl/crud/client/delete.php`, JSON.stringify({ id }))
                .then(res => {
                    console.log(res);
                })
        }
        return (
            <div>
                <table className="table table-striped custab">

                    <thead>
                        <tr>
                            <th>id</th>
                            <th>email</th>
                            <th>password</th>
                            <th>first_name</th>
                            <th>last_name</th>
                            <th>phone</th>
                            <th>photo</th>
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(el => {
                                return <tr>

                                    <td>{el.id}</td>
                                    <td>{el.email}</td>
                                    <td>{el.password}</td>
                                    <td>{el.first_name}</td>
                                    <td>{el.last_name}</td>
                                    <td>{el.phone}</td>
                                    <td>{el.photo}</td>
                                    <td onClick={() => { deleteClient(el.id) }} className="text-center"><a href="#" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove" /> Del</a></td>
                                </tr>
                            })
                        }


                    </tbody></table>
            </div>
        );
    }
}

export default ClientTable