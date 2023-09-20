import { Container, Nav, Navbar, Button } from "react-bootstrap/";
import { NavLink } from "react-router-dom";
import routes from "./../../routes/routes.json";
import { useSelector } from "react-redux";
import logo from "/logo.png"

const Header = () => {
  const thali = useSelector((state) => state.order.thali);

  const handleLinkClick = () => {
    const productSection = document.getElementById("product-section");
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              alt="Make Your Thali Logo"
              height="60px"
              width="150px"
              className="d-inline-block align-top"
            /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink href="#home" to={routes.HOME} style={{textDecoration:"none", color:"rgba(230,148,0,255)", fontWeight:"bold"}}>Home</NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink to={routes.HOME} style={{textDecoration:"none", color:"rgba(230,148,0,255)" , fontWeight:"bold"}} onClick={handleLinkClick}>Menu</NavLink>
              </Nav.Link>
            </Nav>
            <Nav>
            <Nav.Link>
                <NavLink to={routes.CHECKOUT}>
                  <Button variant="warning"><i className="bi bi-cart-plus-fill"></i> 
                    <span style={{marginLeft: "5px"}}>{thali.length} Items Checkout</span></Button>
                </NavLink>
              </Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
