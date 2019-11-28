import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import constants from '../../ReactConstants';

const Li = styled.li`
    &:hover {
        cursor: pointer;
        background: ${constants.alternateHoverColor};
    }
`;

const PrimaryContentP = styled.p`
    font-size: ${constants.primaryDescFontSize};
    color: ${constants.descriptionFontColor};
`;

const SecondaryContentP = styled.p`
    font-size: ${constants.secondaryDescFontSize};
    color: ${constants.descriptionFontColor};
`;

const CollectionItem = (props) => {
  const {
    isModalTrigger,
    dataTarget,
    title,
    primaryContent,
    secondaryContent,
    primaryIcon,
    primaryIconBackground,
    secondaryIcon,
    onClick,
  } = props;

  const isClickable = onClick || isModalTrigger;

  let classes = 'collection-item avatar';
  classes = isClickable ? `${classes} ${isModalTrigger ? 'modal-trigger' : ''} waves-effect waves-block` : classes;

  const FinalLi = isClickable ? Li : styled.li``;
  const PrimaryI = primaryIconBackground
    ? styled.i`background-color: ${primaryIconBackground} !important;`
    : styled.i``;

  return (
    <FinalLi className={classes} onClick={onClick || null} data-target={dataTarget}>
      <PrimaryI className="material-icons circle">{primaryIcon}</PrimaryI>
      <span className="title">{title}</span>
      { primaryContent ? <PrimaryContentP>{primaryContent}</PrimaryContentP> : null }
      { secondaryContent ? <SecondaryContentP>{secondaryContent}</SecondaryContentP> : null }
      { secondaryIcon ? (
        <span className="secondary-content noselect">
          <i className="material-icons">{secondaryIcon}</i>
        </span>
      ) : null
    }
    </FinalLi>
  );
};

CollectionItem.defaultProps = {
  isModalTrigger: false,
  dataTarget: '',
  primaryContent: null,
  secondaryContent: null,
  primaryIconBackground: null,
  secondaryIcon: null,
  onClick: null,
};

CollectionItem.propTypes = {
  isModalTrigger: propTypes.bool,
  dataTarget: propTypes.string,
  title: propTypes.string.isRequired,
  primaryContent: propTypes.string,
  secondaryContent: propTypes.string,
  primaryIcon: propTypes.string.isRequired,
  primaryIconBackground: propTypes.string,
  secondaryIcon: propTypes.string,
  onClick: propTypes.func,
};

export default CollectionItem;
