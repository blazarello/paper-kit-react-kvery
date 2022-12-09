import React from "react";
import { Col, Card, CardFooter, CardBody, CardTitle, Form, Button } from "reactstrap";
import configData from "./ConfigData.json"

class DynamicGallery extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }

        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    async callAPI() {

        const response = await fetch(`https://app.kvery.io/query/api/117eb160de1/gallery`);
        const json = await response.json();
        this.setState({ list: json.response });
    }

    render() {
        return (
            this.state.list.map((item, index) => {
                <tr key={item.id}>
                    <td>{item.image_url}</td>
                </tr>
                return (
                    <Col className="ml-auto mr-auto" md="4">
                <Card className="card-plain ml-auto mr-auto">
                  <div className="card-avatar">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img src={configData.SERVER_URL + item.image_url} />
                    </a>
                  </div>
                </Card>
              </Col>
                )
            })
        )
    }
}

export default DynamicGallery;