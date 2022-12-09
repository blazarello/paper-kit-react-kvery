import React from "react";
import { Col, Card, CardFooter, CardBody, CardTitle, Form, Button } from "reactstrap";
import configData from "./ConfigData.json"

class DynamicAboutUs extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }

        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    async callAPI() {

        const response = await fetch(`https://app.kvery.io/query/api/117eb160de1/team-members`);
        const json = await response.json();
        this.setState({ list: json.response });
    }

    render() {
        return (
            this.state.list.map((item, index) => {
                <tr key={item.id}>
                    <td>{item.artist_name}</td>
                    <td>{item.qualification}</td>
                    <td>{item.description}</td>
                    <td>{item.profile_image_url}</td>
                </tr>
                return (
                    <Col md="4">
                    <Card className="card-profile card-plain">
                      <div className="card-avatar">
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <img src={configData.SERVER_URL + item.profile_image_url} />
                        </a>
                      </div>
                      <CardBody>
                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                          <div className="author">
                            <CardTitle tag="h4">{item.artist_name}</CardTitle>
                            <h6 className="card-category">{item.qualification}</h6>
                          </div>
                        </a>
                        <p className="card-description text-center">
                            {item.description}
                        </p>
                      </CardBody>
                      <CardFooter className="text-center">
                        <Button
                          className="btn-just-icon btn-neutral"
                          color="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-twitter" />
                        </Button>
                        <Button
                          className="btn-just-icon btn-neutral ml-1"
                          color="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-google-plus" />
                        </Button>
                        <Button
                          className="btn-just-icon btn-neutral ml-1"
                          color="link"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          <i className="fa fa-linkedin" />
                        </Button>
                      </CardFooter>
                    </Card>
                  </Col>
                )
            })
        )
    }
}

export default DynamicAboutUs;