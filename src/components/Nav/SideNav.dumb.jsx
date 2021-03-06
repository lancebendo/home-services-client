import React, { useEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const Ul = styled.ul`
  margin-top: 108px;
  width: 270px;
  z-index: 1;
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
    window.M.Sidenav.init(elem);
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
