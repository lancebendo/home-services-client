import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
// import M from 'materialize-css';

const Ul = styled.ul`
  margin-top: 98px;
  width: 270px;
`;

const Li = styled.li`
  padding: 2px 6px;
`;

const CollapsibleSideNav = children => (
  <ul className="sidenav" id="Sidenav">
    {children.map(child => <Li key={children.indexOf(child)}>{child}</Li>)}
  </ul>
);

const SideNav = ({ children, collapsible }) => (
  <React.Fragment>
    {collapsible ? CollapsibleSideNav(children) : ''}
    <Ul className="sidenav sidenav-fixed z-depth-0">
      {children.map(child => <Li key={children.indexOf(child)}>{child}</Li>)}
    </Ul>
  </React.Fragment>
);
SideNav.defaultProps = {
  collapsible: false,
};

SideNav.propTypes = {
  children: propTypes.arrayOf(propTypes.element).isRequired,
  collapsible: propTypes.bool,
};

export default SideNav;
