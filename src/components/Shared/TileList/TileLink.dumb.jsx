import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import constants from '../../constants';
import TileDiv from './tileStyle';

const TileLinkDiv = styled(TileDiv)`
    border-width: 2px;
    border-style: dashed;
    text-align: center;
  
    &:hover{
        background-color: ${constants.alternateHoverColor};
        cursor: pointer;
    }
`;

const TileLinkSpan = styled.span`
    color: ${constants.proceedFontColor};
    font-size: ${constants.linkLabelFontSize};
    font-weight: 500;
`;

const TileLink = (props) => {
  const { label, onClick: clickHandler } = props;

  return (
    <TileLinkDiv onClick={e => clickHandler(e, props)} className=" row valign-wrapper">
      <div className="col s6 offset-s3">
        <div className="row center-align no-margin-bottom">
          <TileLinkSpan>{label}</TileLinkSpan>
        </div>
      </div>
    </TileLinkDiv>
  );
};

TileLink.propTypes = {
  label: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

export default TileLink;
