import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';


class Home extends React.Component {


    render() {

        return (

            <Nav justify variant="tabs" defaultActiveKey="/home" style={{ fontSize: 20, color: "#9932CC", backgroundColor: "#E7DEC3", marginTop: 5, marginBottom: 15 }} >
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link eventKey="link-1" href="/retail/add" >Add Product</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2" href="/bills/add" >Add Retail</Nav.Link>
                </Nav.Item>
                <Nav.Item >
                    <Nav.Link eventKey="link-3" href="/retail/list" >
                        Search Retails
                    </Nav.Link>
                </Nav.Item>
            </Nav>

        )
    }

}
export default Home;