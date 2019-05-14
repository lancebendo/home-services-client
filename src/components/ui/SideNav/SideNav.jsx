import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Ul = styled.ul`
    margin-top: 98px;
    width: 270px;
`;

const SideNav = ({ children }) => (
  <Ul className="sidenav sidenav-fixed z-depth-0">
    {children.map(child => <li>{child}</li>)}
  </Ul>
);

SideNav.propTypes = {
  children: propTypes.arrayOf(propTypes.element).isRequired,
};

export default SideNav;
