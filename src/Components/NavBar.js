import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import history from '../history';
import {
  Button,
  Container,
  Header,
  Image,
  Menu,
} from "semantic-ui-react";

const NavBar = (props) => (
  <div>
      <Menu fixed="top" inverted width="100wv">
        <Container>
          <Menu.Item header>
          <Image src="https://www.logodesignlove.com/images/simple-logos/modern-logo.jpg"
            width="112" height="35" />
          </Menu.Item>
            <Menu.Item position="right">
                <Link to={'/'}>
                  <Button style={{marginRight: '8em'}} primary>List View</Button>
                </Link>
                <Link to="/map-view">
                <Button>Map View</Button>
              </Link>
            </Menu.Item>
        </Container>
      </Menu>
    </div>
)

export default NavBar;


//   <Navbar inverse collapseOnSelect>
//   <Navbar.Header>
//     <Navbar.Brand>
//       <a href="#brand">React-Bootstrap</a>
//     </Navbar.Brand>
//     <Navbar.Toggle />
//   </Navbar.Header>

//     <Nav pullRight>
//       <NavItem eventKey={1} onClick={this.onListClick}>
//         Link Right
//       </NavItem>
//       <NavItem eventKey={2}>
//         Link Right
//       </NavItem>
//     </Nav>
// </Navbar>

// <nav className="navbar" role="navigation" aria-label="main navigation">
//     <div className="navbar-brand">
//       <a className="navbar-item">
//         <img src="https://www.logodesignlove.com/images/simple-logos/modern-logo.jpg"
//           width="112" height="35" />
//       </a>
//     </div>
//     <div className="navbar-menu">
//     <div className="navbar-start">
        
//       </div>
//       <div className="navbar-end" position="right">
//         <Link to="/">
//           <div className="navbar-item">List View</div>
//         </Link>
//       </div>
//     </div>
//   </nav>