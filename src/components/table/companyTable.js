import React, { Component } from 'react';
import axios from 'axios';

class CompanyTable extends Component {
    state = {
        data: []
    }
    componentWillMount() {
        axios.get(`http://localhost/gl/crud/company/read.php`)
            .then(res => {
                this.setState({ data: res.data.data })
            }
            )
    }
    render() {
        const deleteCompany = (id) => {
            axios.post(`http://localhost/gl/crud/company/delete.php`, JSON.stringify({ id }))
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
                            <th>company_name</th>
                            <th>company_logo</th>
                            <th>phone</th>
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
                                    <td>{el.company_name}</td>
                                    <td>{el.company_logo}</td>
                                    <td>{el.phone}</td>
                                    <td onClick={()=>{deleteCompany(el.id)}} className="text-center"><a href="#" className="btn btn-danger btn-xs"><span className="glyphicon glyphicon-remove" /> Del</a></td>
                                </tr>
                            })
                        }


                    </tbody></table>
            </div>
        );
    }
}

export default CompanyTable