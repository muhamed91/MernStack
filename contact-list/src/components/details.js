import React, { Component } from 'react';
import { Button } from 'reactstrap';


export default class infoTable extends Component {
    render() {
        return(

            <React.Fragment>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Firstname</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                    </thead>
                    <tbody>
                         {
                            this.props.getData.length > 0 ? (

                                this.props.getData.map(e => 
                                    
                                    <tr key={e._id }>
                                        <td>{e.Name}</td>
                                        <td>{e.Age}</td>
                                        <td>{e.City}</td>
                                        <td><Button className="btn bt-primary"
                                           onClick={event => {
                                               this.props.setData(e)
                                           }} 
                                        >Edit</Button></td>
                                        <td><Button className="btn bt-primary"
                                            onClick={event => {
                                               this.props.delData(e)
                                           }} 
                                        >Delete</Button></td>
                                    </tr>
                                
                                )

                            )
                            :

                            (
                                <tr>
                                    <td>No Data</td>
                                </tr>
                            )

                           
                         }
                    </tbody>
                </table>
            </React.Fragment>
        );
    }
}