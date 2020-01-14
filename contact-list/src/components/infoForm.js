import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class InfoForm extends Component {

    state = {
        _id: '',
        Name: '',
        Age: '',
        City: '',
        isEdit: false

    }


    infoChange = (e) => {

        const {name, value} = e.target;

        this.setState({
            [name] : value

        });
    }

    infoSubmit = event => {

        event.preventDefault();
        

        if(!this.state.isEdit) {

            let data = {
                isEdit: this.state.isEdit,
                Name: this.state.Name,
                Age: this.state.Age,
                City: this.state.City,
            }
            this.props.myData(data);
        }

        else {

            let data = {
                isEdit: this.state.isEdit,
                _id: this.state._id,
                Name: this.state.Name,
                Age: this.state.Age,
                City: this.state.City,
            }
            this.props.myData(data);

        }



    }

    infoChange = event => {
        const {name, value} = event.target;

        this.setState({
            [name] : value
        })


    }

    


    componentWillReceiveProps(props) {


        if(props.setForm._id != null) {
           
            this.setState({

                isEdit:true,
                _id:props.setForm._id,
                Name:props.setForm.Name,
                Age:props.setForm.Age,
                City:props.setForm.City,

            })
        }

    }



    render() {

        return(
            <React.Fragment>
                 <Form onSubmit={this.infoSubmit} autoComplete="off">
                    <FormGroup>
                        <div className="form-group">
                            <Label for="name">Name:</Label>
                            <Input type="text" className="form-control"  placeholder="Enter Name" 
                                onChange = {this.infoChange}
                                name= "Name"
                                value={this.state.Name}
                            />
                        </div>
                    </FormGroup>
                    <FormGroup>
                    <div className="form-group">
                        <Label for="age">Age:</Label>
                        <Input type="text" className="form-control"  placeholder="Enter Age"
                                onChange = {this.infoChange}
                                name= "Age"
                                value={this.state.Age}
                        />
                    </div>
                    </FormGroup>
                    <FormGroup>
                    <div className="form-group">
                        <Label for="city">City:</Label>
                        <Input type="text" className="form-control"  placeholder="Enter City"
                                onChange = {this.infoChange}
                                name= "City"
                                value={this.state.City}
                        />
                    </div>
                    </FormGroup>
                   <FormGroup>
                   </FormGroup>
                    <Button color="primray" className="btn btn-primary" type="submit">{this.state.isEdit ? 'Update' : 'Create'}</Button>
                </Form>
            </React.Fragment>

        );
    }
}



