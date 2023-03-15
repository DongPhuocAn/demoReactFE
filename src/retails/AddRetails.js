import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from '../Home';
import { Container, Row } from 'react-bootstrap';
import { Form, Button, Col } from 'react-bootstrap';
import axios from 'axios';

class AddRetails extends Component {
    constructor(props) {
        super(props);
        this.changeName = this.changeName.bind(this);
        this.changeCode = this.changeCode.bind(this);
        this.changeQuantity = this.changeQuantity.bind(this);
        this.changePrice = this.changePrice.bind(this);
        this.addNewItems = this.addNewItems.bind(this);
        this.resetForm = this.resetForm.bind(this);
        this.state = {
            name: '',
            code: '',
            quantity: '',
            price: 0,

        }
    }
    changeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    changeCode = (event) => {
        this.setState({
            code: event.target.value
        })
    }
    changeQuantity = (event) => {
        this.setState({
            quantity: event.target.value
        })
    }
    changePrice = (event) => {
        this.setState({
            price: event.target.value
        })
    }
    resetForm = (event) => {
        this.setState({
            name: '',
            code: '',
            quantity: '',
            price: 0,
        });
    }
    addNewItems = (event) => {
        event.preventDefault();
        //var axios = require('axios');
        axios.post('http://localhost:8090/goods/add',
            {
                name: this.state.name,
                code: this.state.code,
                quantity: this.state.quantity,
                price: this.state.price
            })
            .then((response) => {

                if (response.status === 200) {
                    this.resetForm();
                    alert(" You have successfully added new !");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <>
                <Home />
                <Container >
                    <div className="panel panel-success">
                        <Row>
                            <div className="panel-heading" style={{ fontSize: 20, color: "#9932CC", backgroundColor: "#F8F8FF", marginTop: 5, marginBottom: 15 }}>Enter commodity information</div>
                        </Row>
                        <Row>
                            <div className="panel-body">
                                <Form>
                                    <Row>
                                        <Col xs="6">
                                            <Form.Group controlId="formBasicName">
                                                <Form.Label>Item name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter name" onChange={this.changeName} required value={this.state.name} />
                                            </Form.Group>
                                        </Col>
                                        <Col xs="6">
                                            <Form.Group controlId="formBasicCode">
                                                <Form.Label>Code</Form.Label>
                                                <Form.Control type="text" placeholder="Enter code" onChange={this.changeCode} required value={this.state.code} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs="6">
                                            <Form.Group controlId="formBasicQuantity">
                                                <Form.Label>Amount </Form.Label>
                                                <Form.Control type="number" placeholder="Enter quantity" onChange={this.changeQuantity} required value={this.state.quantity} />
                                            </Form.Group>
                                        </Col>
                                        <Col xs="6">
                                            <Form.Group controlId="formBasicPrice">
                                                <Form.Label>Price </Form.Label>
                                                <Form.Control type="text" placeholder="Enter price code" onChange={this.changePrice} required value={this.state.price} />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row style={{ marginTop: 10, marginBottom: 10 }}>
                                        <Col xs="4">
                                            <Button variant="outline-primary" type="submit" onClick={this.addNewItems}>
                                                Add
                                            </Button>
                                        </Col>
                                        <Col xs="4">
                                            <Button variant="outline-info" type="reset" onClick={this.resetForm}>
                                                Reset
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </Row>
                    </div>
                </Container>
            </>
        )
    }
}
export default AddRetails;
