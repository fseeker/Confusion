import { Navbar, NavbarBrand, NavItem, Collapse, Nav, NavLink,UncontrolledDropdown, DropdownItem, DropdownMenu, NavbarText, NavbarToggler, DropdownToggle } from 'reactstrap';
import React from 'react';

export function Navigation(){
    return(
        <Navbar
            color="success"
            dark
            expand="md"
            fixed="top"
            full="true"
          >
            <NavbarBrand href="/">
              Ristorante Con Fusion
            </NavbarBrand>
            <NavbarToggler onClick={function noRefCheck() { }} />
            <Collapse navbar>
              <Nav
                className="me-auto"
                navbar
              >
                <NavItem>
                  <NavLink href="/components/">
                    Components
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    GitHub
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown
                  inNavbar
                  nav
                >
                  <DropdownToggle
                    caret
                    nav
                  >
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      Reset
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
              <NavbarText>
                Powered by Seeker
              </NavbarText>
            </Collapse>
          </Navbar>
    );

}