import React from "react";
import { Col, Card, CardBody, CardTitle, Form, Button } from "reactstrap";
import configData from "./ConfigData.json"
class DynamicPress extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list: []
        }

        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    async callAPI() {

        const response = await fetch(`https://app.kvery.io/query/api/117eb160de1/articles`);
        const json = await response.json();
        this.setState({ list: json.response });
    }

    render() {
        return (
            this.state.list.map((item, index) => {
                <tr key={item.id}>
                    <td>{item.author}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                    <td>{item.link}</td>
                    <td>{item.article_image_url}</td>
                </tr>
                return (
                    <Col className="ml-auto mr-auto" md="4"  >
                        <Card className="card-plain ml-auto mr-auto" >
                            <div className="card-avatar">
                                <a href="http://localhost:3000/landing-page" onClick={(e) => e.preventDefault()}>
                                    <img
                                        alt="..."
                                        src={item.article_image_url}
                                    />
                                </a>
                            </div>
                            <CardBody>
                                <div className="author">
                                    <CardTitle tag="h4">{item.author}</CardTitle>
                                </div>
                                <h4 className="title mx-auto"> {item.title}</h4>
                                <Form className="content">
                                    <div>
                                        <Button className="btn-round" color="danger" href={item.link}
                                            target="_blank">
                                            Read More
                                        </Button>
                                    </div>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                )
            })
        )
    }
}

export default DynamicPress;