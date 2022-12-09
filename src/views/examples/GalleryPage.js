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
import DynamicGallery from "components/Displays/DynamicGallery";
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
// reactstrap components

// core components
import IndexNavbar from "components/Navbars/IndexNavbar";
function GalleryPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("gallery-page");
    return function cleanup() {
      document.body.classList.remove("gallery-page");
    };
  });
  return (
    <>
      <IndexNavbar />
      <div className="section section-dark text-center"
      style={{
        backgroundImage: "url(" + require("assets/img/WAVY-Cover-C2.png") + ")"
      }}
        >
          <Container>
            <h1 className="title">GALLERY</h1>
            <Row>
              <DynamicGallery/>
            </Row>
          </Container>
        </div>
    </>
  );
}

export default GalleryPage;
