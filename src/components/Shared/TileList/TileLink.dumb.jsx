import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import constants from '../../ReactConstants';
import TileDiv from './tileStyle';

const TileLinkDiv = styled(TileDiv)`
    border-width: 2px;
    border-style: dashed;
    text-align: center;
    padding-bottom: 0 !important;
    display: flex !important;
    &:hover{
        background-color: ${constants.alternateHoverColor};
        cursor: pointer;
    }
`;

const TileLinkSpan = styled.span`
    color: ${constants.proceedFontColor};
    font-size: ${constants.linkLabelFontSize};
    font-weight: 500;
    vertical-align: middle;
    width: 20px;

    i {
      vertical-align: middle;
    }
`;

const TileLink = (props) => {
  const {
    label, labelIcon, onClick: clickHandler, className,
  } = props;

  return (
    <TileLinkDiv
      {...props}
      onClick={e => clickHandler(e, props)}
      className={`${className} row valign-wrapper waves-effect`}
    >
      <div className="col s6 offset-s3">
        <div className="row center-align no-margin-bottom">
          <TileLinkSpan>
            <i className="material-icons">{labelIcon}</i>
            {label}
          </TileLinkSpan>
        </div>
      </div>
    </TileLinkDiv>
  );
};

TileLink.defaultProps = {
  labelIcon: null,
  onClick: () => {},
  className: '',
};

TileLink.propTypes = {
  label: propTypes.string.isRequired,
  labelIcon: propTypes.string,
  onClick: propTypes.func,
  className: propTypes.string,
};

export default TileLink;
