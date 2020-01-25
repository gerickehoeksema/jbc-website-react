import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';


import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-lg navbar-toggleable-lg ng-white border-bottom box-shadow" light>
          <Container>
            <NavbarBrand tag={Link} to="/">Jbay Baptist Church</NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
            <Collapse className="d-lg-inline-flex flex-lg-row-reverse" isOpen={!this.state.collapsed} navbar>
              <ul className="nav navbar-nav pull-right">
                <NavItem>
                  <NavLink tag={Link} className="page-scroll" to="#home">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="page-scroll" to="#about">About</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="page-scroll" to="#vision">Vision</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="page-scroll" to="#leaders">Leaders</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="page-scroll" to="#small">Small Groups</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="page-scroll" to="#giving">Giving</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="page-scroll" to="#projetcs">Projects</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} className="page-scroll" to="#contact">Contact</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
