import React from "react";
// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoFooter from "components/Footers/DemoFooter.js";
import IndexNavbar from "components/Navbars/IndexNavbar";
import { Suspense } from "react";
//const DynamicComponent = React.lazy(() => import("components/Displays/DynamicComponent"));
import DynamicPress from "components/Displays/DynamicPress";
function PressPage() {
  document.documentElement.classList.remove("nav-open");
  const [loadDynamicComp, setLoadDynamicComp] = React.useState(0);
  
  return (
    <>
      <IndexNavbar />
      <div className="main">
        <div className="section section-dark text-center"
        >
          <Container>
            <h1 className="title">WAVY PRESS</h1>
            <Row>
            <DynamicPress/>
            </Row>
          </Container>
        </div>
      </div>
      <DemoFooter />
    </>
  );
}

export default PressPage;
