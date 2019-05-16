import React, { useEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import M from 'materialize-css';

const Ul = styled.ul`
  margin-top: 98px;
  width: 270px;
`;

const Li = styled.li`
  padding: 2px 6px;
`;


const renderChild = (child, key) => {
  if (child instanceof Array) {
    return (
      <React.Fragment key={key * -1}>
        {child.map(c => renderChild(c, child.indexOf(c)))}
      </React.Fragment>
    );
  }
  return (<Li key={key}>{child}</Li>);
};

const CollapsibleSideNav = children => (
  <ul className="sidenav" id="Sidenav">
    {children.map(child => renderChild(child, children.indexOf(child)))}
  </ul>
);


const SideNav = ({ children, collapsible }) => {
  useEffect(() => {
    const elem = document.querySelector('.sidenav');
    M.Sidenav.init(elem);
  });

  return (
    <React.Fragment>
      {collapsible ? CollapsibleSideNav(children) : ''}
      <Ul className="sidenav sidenav-fixed z-depth-0">
        {children.map(child => renderChild(child, children.indexOf(child)))}
      </Ul>
    </React.Fragment>
  );
};

SideNav.defaultProps = {
  collapsible: false,
};

SideNav.propTypes = {
  children: propTypes.node.isRequired,
  collapsible: propTypes.bool,
};

export default SideNav;
