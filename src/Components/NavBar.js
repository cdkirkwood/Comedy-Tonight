import React from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Container,
  Image,
  Menu,
} from 'semantic-ui-react'
import '../App.css'

const NavBar = () => (
  <div>
    <Menu fixed="top" inverted width="100wv">
      <Container className="nav-container">
        <Menu.Item position="right">
          <Link to="/">
            <Button style={{ marginRight: '8em' }} primary>List View</Button>
          </Link>
          <Link to="/map-view">
            <Button>Map View</Button>
          </Link>
        </Menu.Item>
        <Menu.Item header>
          <Image
            src="https://www.logodesignlove.com/images/simple-logos/modern-logo.jpg"
            width="112" height="35" />
        </Menu.Item>
      </Container>
    </Menu>
  </div>
)

export default NavBar
