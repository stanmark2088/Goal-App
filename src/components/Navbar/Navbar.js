import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
import { func, string } from "prop-types";
import styled from "styled-components";
const Button = styled.button`
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 30px;
  cursor: pointer;
  font-size: 0.8rem;
  padding: 0.6rem;
`;


const Navbar = ({ theme, toggleTheme }) => {
  return (
    <div>
      <ReactBootStrap.Navbar bg="dark" variant="dark">
        <Link to="/">
          <ReactBootStrap.Navbar.Brand>Goal</ReactBootStrap.Navbar.Brand>
        </Link>
        <Link to="/about">
          <ReactBootStrap.Navbar.Brand>About</ReactBootStrap.Navbar.Brand>
        </Link>
        <ReactBootStrap.Form inline className="nav navbar-nav ml-auto">
          <ReactBootStrap.FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2 "
          />
          <ReactBootStrap.Button variant="outline-primary">
            Search
            </ReactBootStrap.Button>
        </ReactBootStrap.Form>
        <ReactBootStrap.Button onClick={toggleTheme} style={{marginLeft: '5px'}}>Switch Theme</ReactBootStrap.Button>
        </ReactBootStrap.Navbar>
    </div>
  );
}; 

Navbar.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
};


export default Navbar;