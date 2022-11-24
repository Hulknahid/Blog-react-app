import React, { useEffect, useState } from "react";
import { Link as ReactLink, useNavigate } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { doLogout, getCurrentUserDetails, isLogged } from "../../../Auth";
const CustomNavbar = (args) => {
  const navigator = useNavigate();
  //toggle and function
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  //login logic implement
  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    setLogin(isLogged());
    setUser(getCurrentUserDetails());
  }, [login]);
  // console.log(login);
  // console.log(user);
  const userLogout = () => {
    doLogout(() => {
      setLogin(false);
      navigator("/");
    });
  };
  return (
    <div>
      <Navbar {...args} className="navbar-expand-lg navbar-dark bg-dark px-5">
        <NavbarBrand tag={ReactLink} to="/">
          Blog-App
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink tag={ReactLink} to="/">
                Feedback
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/services">
                Services
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactLink} to="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
          <Nav navbar style={{ cursor: "pointer" }}>
            {login && (
              <>
                <NavItem>
                  <NavLink tag={ReactLink} to={"/user/profile-info"}>
                    Profile-info
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/user/dashboard">
                    {user.email}
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink onClick={userLogout}>Logout</NavLink>
                </NavItem>
              </>
            )}
            {!login && (
              <>
                <NavItem>
                  <NavLink tag={ReactLink} to="/login">
                    Login
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={ReactLink} to="/signup">
                    Sign Up
                  </NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
