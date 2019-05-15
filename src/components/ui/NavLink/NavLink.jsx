import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import constants from '../../shared/constants';


const LinkButton = styled(Link)`
    border-radius: 270px;
    
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

const NavLink = (props) => {
  const {
    isSelected, path, label, icon, fabIcon, onClick: clickHandler,
  } = props;
  const ButtonType = isSelected ? SelectedLinkButton : LinkButton;

  return (
    <ButtonType to={path} onClick={e => clickHandler(e, props)} className="waves-effect">
      <Span>{label}</Span>
      <i className={`material-icons left ${fabIcon}`}>{icon}</i>
    </ButtonType>
  );
};

NavLink.defaultProps = {
  isSelected: false,
  icon: '',
  fabIcon: '',
};

NavLink.propTypes = {
  path: propTypes.string.isRequired,
  label: propTypes.string.isRequired,
  icon: propTypes.string,
  fabIcon: propTypes.string,
  isSelected: propTypes.bool,
  onClick: propTypes.func.isRequired,
};

export default NavLink;
