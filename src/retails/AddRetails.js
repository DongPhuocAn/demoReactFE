import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

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


    }
    render() {
        return (
            // <Container>
            //     <div className="panel panel-success">
            //         <Row>
            //             <div className="panel-heading" style={{ fontSize: 20, color: "#9932CC", backgroundColor: "#F8F8FF", marginBottom: 15 }}>Nhập Thông Tin Hàng Hóa </div>
            //         </Row>
            //         <Row>
            //             <div className="panel-body">
            //                 <Form>
            //                     <Row>
            //                         <Col xs="6">
            //                             <Form.Group controlId="formBasicName">
            //                                 <Form.Label>Tên Hàng</Form.Label>
            //                                 <Form.Control type="text" placeholder="Enter name" onChange={this.changeName} required value={this.state.name} />
            //                             </Form.Group>
            //                         </Col>
            //                         <Col xs="6">
            //                             <Form.Group controlId="formBasicCode">
            //                                 <Form.Label>Code</Form.Label>
            //                                 <Form.Control type="text" placeholder="Enter code" onChange={this.changeCode} required value={this.state.code} />
            //                             </Form.Group>
            //                         </Col>
            //                     </Row>
            //                     <Row>
            //                         <Col xs="6">
            //                             <Form.Group controlId="formBasicQuantity">
            //                                 <Form.Label>Số Lượng </Form.Label>
            //                                 <Form.Control type="number" placeholder="Enter quantity" onChange={this.changeQuantity} required value={this.state.quantity} />
            //                             </Form.Group>
            //                         </Col>
            //                         <Col xs="6">
            //                             <Form.Group controlId="formBasicPrice">
            //                                 <Form.Label>Giá </Form.Label>
            //                                 <Form.Control type="text" placeholder="Enter price code" onChange={this.changePrice} required value={this.state.price} />
            //                             </Form.Group>
            //                         </Col>
            //                     </Row>
            //                     <Row style={{ marginTop: 10, marginBottom: 10 }}>
            //                         <Col xs="4">
            //                             <Button variant="outline-primary" type="submit" onClick={this.addNewItems}>
            //                                 Thêm
            //                             </Button>
            //                         </Col>
            //                         <Col xs="4">
            //                             <Button variant="outline-info" type="reset">
            //                                 Reset
            //                             </Button>
            //                         </Col>
            //                     </Row>
            //                 </Form>
            //             </div>
            //         </Row>
            //     </div>
            // </Container>

            <form class="form-inline">
                <div class="form-group mb-2">
                    <label for="staticEmail2" class="sr-only">Email</label>
                    <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com" />
                </div>
                <div class="form-group mx-sm-3 mb-2">
                    <label for="inputPassword2" class="sr-only">Password</label>
                    <input type="password" class="form-control" id="inputPassword2" placeholder="Password" />
                </div>
                <button type="submit" class="btn btn-primary mb-2">Confirm identity</button>
            </form>
        )
    }
}
export default AddRetails;
