import React from "react";
import { Col, Card, CardFooter, CardBody, CardTitle, Form, Button, Pagination, Input, Container, Row } from "reactstrap";
import configData from "./ConfigData.json"

class DynamicProfile extends React.Component {


  constructor(props) {
    super(props)
    if (!localStorage.getItem('token')) {
      window.location.href = '/login-page';
    }
    this.state = {
      mail: null,
      password: null,
      token: null,
      username: null,
      user_image_url: null,
      selectedFile: null
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
        if (res.status == 1) {
          res = res.response[0]
          this.setState({ mail: res.email })
          this.setState({ password: res.password })
          this.setState({ username: res.username })
          this.setState({ user_image_url: res.user_image_url })
        }
        else {
          alert(res.errorText);
        }
      })
  };

  logout = () => {
    localStorage.removeItem('token');
  };

  onupdate = () => {
    // Create an object of formData
    const formData = new FormData();
    
    formData.append("username", this.state.username)
    formData.append("email", this.state.mail)
    formData.append("password", this.state.password)
    formData.append("token", localStorage.getItem('token'))
    // Update the formData object
    formData.append(
      "file",
      this.state.selectedFile,
      this.state.selectedFile.name
    );

    // Details of the uploaded file
    console.log(this.state.selectedFile);

    // Request made to the backend api
    // Send formData object
    fetch(`https://app.kvery.io/query/api/117eb160de1/edit-profile-data`, {

      method: 'POST',
      body: formData

    });
  };

  onFileChange = event => {

    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  };

  fileData = () => {

    if (this.state.selectedFile) {

      return (
        <div>
          <h2>File Details:</h2>
          <p>File Name: {this.state.selectedFile.name}</p>

          <p>File Type: {this.state.selectedFile.type}</p>

          <p>
            Last Modified:{" "}
            {this.state.selectedFile.lastModifiedDate.toDateString()}
          </p>

        </div>
      );
    } else {
      return (
        <div>
          <br />
          <h4>Choose before Pressing the Upload button</h4>
        </div>
      );
    }
  };

  emailChange(mail) {
    console.log(mail)
    this.setState({ mail: mail })
  }

  passwordChange(password) {
    console.log(password)
    this.setState({ password: password })
  }
  usernameChange(username) {
    console.log(username)
    this.setState({ username: username })
  }


  render() {
    return (
      <Col className="ml-auto mr-auto">
        <Card className="card-profile card-plain">
          <div className="card-avatar">
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              <img src={this.state.user_image_url} />
            </a>
          </div>
          <CardBody>
            <a href="#pablo" onClick={(e) => e.preventDefault()}>
              <div className="author "  >
                <CardTitle tag="h2">Welcome {this.state.username} !</CardTitle>
                <label>Username</label>
                <Input name="username" value={this.state.username} type="text" onChange={event => this.usernameChange(event.target.value)} />
                <label>Email</label>
                <Input name="email" value={this.state.mail} type="text" onChange={event => this.emailChange(event.target.value)} />
                <label>Password</label>
                <Input name="password" placeholder="Password" type="text" onChange={event => this.passwordChange(event.target.value)} />
              </div>
            </a>
          </CardBody>
          <input className="btn btn-danger btn-round ml-auto mr-auto" type="file" onChange={this.onFileChange} /> {this.fileData()}
          <br />
          <Button className='btn btn-danger btn-round ml-auto mr-auto'
            onClick={this.onupdate}>
            Upload!
          </Button>
        </Card>
        <Button
          className="btn btn-round"
          onClick={this.logout}
          href="/landing-page">
          Logout
        </Button>
      </Col>

    )
  }


}

export default DynamicProfile;
