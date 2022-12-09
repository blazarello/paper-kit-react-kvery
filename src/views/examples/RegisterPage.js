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
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";

class RegisterPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mail: null,
      password: null,
      username: null,
      user_image_url: null
    }
  }

  emailChange(mail) {
    console.log(mail)
    this.setState({ mail: mail })
  }

  passwordChange(password) {
    console.log(password)
    this.setState({ password: password })
  }

  onUpload = () => {

    const url = 'https://app.kvery.io/query/api/117eb160de1/1670337433zcA1VG5TRLAVTSW5I4OE3B'
    this.setState({ user_image_url: 'https://test.kzsdev.hu/wavy-uploads/antoine-barres.jpg' })
    this.setState({ username: "unnamed" })

    // post body data
    const data = {
      mail: this.state.mail,
      password: this.state.password,
      username: this.state.username,
      user_image_url: this.state.user_image_url
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
      .then(res => console.log(res))
  };


  render() {
    return (
      <>
        <IndexNavbar />
        <div
          className="page-header"
          style={{
            backgroundImage: "url(" + require("assets/img/gang-pic.jpg") + ")"
          }}
        >
          <div className="filter" />
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" lg="4">
                <Card className="card-register ml-auto mr-auto">
                  <h3 className="title mx-auto">Welcome</h3>
                  <label>Email</label>
                  <Input name="email" placeholder="Email" type="text" onChange={event => this.emailChange(event.target.value)} />
                  <label>Password</label>
                  <Input name="password" placeholder="Password" type="text" onChange={event => this.passwordChange(event.target.value)} />
                  <Row>
                      <Button
                        block className="btn-round" color="danger"
                        onClick={this.onUpload} >
                        Register
                      </Button>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
          <div className="footer register-footer text-center">
            <h6>
              © {new Date().getFullYear()}, made by Blaize
            </h6>
          </div>
        </div>
      </>
    );
  }
}

export default RegisterPage;