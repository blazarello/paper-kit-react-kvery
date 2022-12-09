/*!

=========================================================
* Paper Kit React - v1.3.1
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from 'react';

// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    iframe,
    Row,
    Col
} from "reactstrap";

// core components
import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";

class StatPage extends Component {

    constructor(props) {
        super(props);
        if (!localStorage.getItem('token')) {
            window.location.href = '/login-page';
        }
        this.onRender()
    }

    onRender = () => {

        const url = 'https://app.kvery.io/query/api/117eb160de1/userdata'

        // post body data
        const data = {
            token: localStorage.getItem('token')
        }

        // create request object
        const request = new Request(url, {
            method: 'POST',
            body: JSON.stringify(data),
            // headers: new Headers({
            //   'Content-Type': 'application/json'
            // })
        })

        // pass request object to `fetch()`
        fetch(request)
            .then(res => res.json())
            .then(res => {
                if (res.status == 1 && res.response[0].isAdmin == 1) {
                    res = res.response[0]
                    this.setState({ mail: res.email })
                    this.setState({ password: res.password })
                    this.setState({ username: res.username })
                    this.setState({ user_image_url: res.user_image_url })
                    this.setState({ user_image_url: res.isAdmin })
                }
                else {
                    alert("You are not an Admin!");
                    window.location.href = '/login-page';
                }
            })
    };
    render() {

        return (
            <>
                <IndexNavbar />
                <div className="main">
                    <div className="section section-dark text-center"
                    >
                        <h1 className="title">Statistics</h1>
                        <Container>
                        <Col className="ml-auto mr-auto" md="4"  >
                            <h4>Cikkek száma</h4> <br></br>
                            <iframe
                                src="https://app.kvery.io/query/execute/hash/117eb160de1/16699812582ZY2BYDz4GCgiPcbtUCuxY?iframe=1&sot=1">
                            </iframe>
                            <h4>Felhasználók száma</h4> <br></br>
                            <iframe
                                src="https://app.kvery.io/query/execute/hash/117eb160de1/userstat?iframe=1&sot=1">
                            </iframe>
                            <h4>Cikkek száma/szerző</h4> <br></br>
                            <iframe
                                src="https://app.kvery.io/query/execute/hash/117eb160de1/authorcount?iframe=1&sot=1">
                            </iframe>
                                </Col>
                            
                        </Container>
                    </div>
                </div>
                <DemoFooter />
            </>
        );
    }
}

export default StatPage;
