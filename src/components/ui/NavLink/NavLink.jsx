import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import constants from '../../shared/constants';


const LinkButton = styled(Link)`
    border-radius: 270px;
    padding: 2px 6px;
    
    &:hover {
        background-color: ${constants.hoverColor};
        i, span {
            color: ${constants.alternateColor};
        }
    }
`;

const SelectedLinkButton = styled(LinkButton)`
    background-color: ${constants.hoverColor};
    i, span {
        color: ${constants.alternateColor};
    }
    pointer-events: none;
`;

const Span = styled.span`
    color: ${constants.navFontColor};
`;

const NavLink = ({
  path, label, icon, isSelected,
}) => {
  const ButtonType = isSelected ? SelectedLinkButton : LinkButton;

  return (
    <ButtonType to={path} className="waves-effect">
      <Span>{label}</Span>
      <i className="material-icons left">{icon}</i>
    </ButtonType>
  );
};

NavLink.defaultProps = {
  isSelected: false,
};

NavLink.propTypes = {
  path: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  icon: propTypes.string.isRequired,
  isSelected: propTypes.bool,
};

export default NavLink;
