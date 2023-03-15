import React from 'react'
import { Table, Container, Row, Col, Form, Button, Modal } from 'react-bootstrap';
import BillRows from './BillRows';
import axios from 'axios';
import Home from '../Home';

class AddBill extends React.Component {
    constructor(props) {
        super(props);
        this.changeName = this.changeName.bind(this);
        this.changeCustomer = this.changeCustomer.bind(this);
        this.changeAddress = this.changeAddress.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.addItemsToList = this.addItemsToList.bind(this);
        this.changeIName = this.changeIName.bind(this);
        this.iCode = this.changeICode.bind(this);
        this.changeIPrice = this.changeIPrice.bind(this);
        this.changeIQuantity = this.changeIQuantity.bind(this);
        this.saveData = this.saveData.bind(this);

        this.state = {
            // invoice name :
            name: '',
            // invoice name:
            customer: '',
            // customer address :
            address: '',
            // list purchased products :
            list: [],
            showItems: false,
            // show popup form:
            show: false,
            // input name
            iName: '',
            // input code :
            iCode: '',
            // input price
            iPrice: '',
            // input quanlity:
            iQuantity: '',

        }
    }
    changeIName = (event) => {
        this.setState({
            iName: event.target.value
        })
    }
    changeICode = (event) => {
        this.setState({
            iCode: event.target.value
        })
    }
    changeIPrice = (event) => {
        this.setState({
            iPrice: event.target.value
        })
    }
    changeIQuantity = (event) => {
        this.setState({
            iQuantity: event.target.value
        })
    }
    changeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    changeCustomer = (event) => {
        this.setState({
            customer: event.target.values
        })
    }
    changeAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }
    handleShow = () => {
        this.setState({
            show: true
        });
    };

    handleClose() {
        this.setState({ show: false });
    }
    addItemsToList = () => {
        var name = this.state.iName;
        var code = this.state.iCode;
        var price = this.state.iPrice;
        var quantity = this.state.iQuantity;
        var objects = { name, code, quantity, price, }
        var newList = this.state.list;
        newList.push(objects);
        this.setState({
            list: newList,
            showItems: true
        });
        this.setState({
            show: false
        })
    };

    saveData = () => {
        axios.post('http://localhost:8090/bills/add',
            {

                "title": this.state.name,
                "items": this.state.list,
                "consumer": {
                    "name": this.state.customer,
                    "address": this.state.address
                }
            })
            .then(function (response) {
                if (response.status === 200) {
                    alert(" Bạn đã thêm hóa đơn thành công ! ");
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
                <Container>
                    <div className="panel panel-default">
                        <Row>
                            <div className="panel-heading" style={{ fontSize: 20, color: "#9932CC", backgroundColor: "#F8F8FF", marginTop: 5, marginBottom: 15 }}>Enter invoice information </div>
                        </Row>

                        <div className="panel-body">
                            <Row>
                                <Col xs="12">
                                    <Form.Group controlId="formBasicNameBill">
                                        <Form.Label>Enter an invoice name </Form.Label>
                                        <Form.Control type="text" placeholder="Enter bill name" onChange={this.changeName} required value={this.state.name} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs="6">
                                    <Form.Group controlId="formBasicCode">
                                        <Form.Label>Enter the customer's name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter customer " onChange={this.changeCustomer} required value={this.state.customer} />
                                    </Form.Group>
                                </Col>
                                <Col xs="6">
                                    <Form.Group controlId="formBasicCode">
                                        <Form.Label>Customer address </Form.Label>
                                        <Form.Control type="text" placeholder="Enter customer " onChange={this.changeAddress} required value={this.state.address} />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row style={{ marginTop: 20, marginBottom: 10 }}>
                                {this.state.showItems &&
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Item code</th>
                                                <th>Item name</th>
                                                <th>Price</th>
                                                <th>Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.list.map((item, value) => {
                                                return (
                                                    <BillRows row={item} key={item.name} />
                                                )
                                            })}
                                        </tbody>
                                    </Table>
                                }
                            </Row>
                            <Row>
                                <Col xs="4">
                                    <Button variant="outline-secondary" onClick={this.handleShow}>
                                        Add items to an invoice
                                    </Button>
                                </Col>
                                <Col xs="4">
                                    <Button variant="outline-success" onClick={this.saveData} type="submit">
                                        Add
                                    </Button>
                                </Col>
                            </Row>

                            <Row>
                                <>
                                    <Modal show={this.state.show} onHide={this.handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title> Add items to an invoice </Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>
                                            <Form>
                                                <Row>
                                                    <Col xs="6">
                                                        <Form.Group controlId="iCode">
                                                            <Form.Label>Item code</Form.Label>
                                                            <Form.Control type="text" onChange={this.changeICode} value={this.state.iCode} />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs="6">
                                                        <Form.Group controlId="iName">
                                                            <Form.Label>Item name</Form.Label>
                                                            <Form.Control type="text" onChange={this.changeIName} value={this.state.iName} />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col xs="6">
                                                        <Form.Group controlId="iPrice">
                                                            <Form.Label>Price </Form.Label>
                                                            <Form.Control type="number" onChange={this.changeIPrice} value={this.state.iPrice} />
                                                        </Form.Group>
                                                    </Col>
                                                    <Col xs="6">
                                                        <Form.Group controlId="iQuantity">
                                                            <Form.Label>Amount</Form.Label>
                                                            <Form.Control type="text" onChange={this.changeIQuantity} value={this.state.iQuantity} />
                                                        </Form.Group>
                                                    </Col>
                                                </Row>
                                            </Form>
                                        </Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={this.handleClose}>
                                                Cancel
                                            </Button>
                                            <Button variant="primary" onClick={this.addItemsToList}>
                                                Add items
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </>
                            </Row>
                        </div>
                    </div>
                </Container>
            </>
        )
    }
}
export default AddBill;