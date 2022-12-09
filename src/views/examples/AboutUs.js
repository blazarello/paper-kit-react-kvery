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
import React from "react";
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
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import DynamicAboutUs from "components/Displays/DynamicAboutUs";

function AboutUsPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("about-us-page");
    return function cleanup() {
      document.body.classList.remove("about-us-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="main">
        <div className="section section-dark text-center"
        >
          <h1 className="title">ABOUT US</h1>

          <Container>
            <Row>
              <DynamicAboutUs />
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default AboutUsPage;
