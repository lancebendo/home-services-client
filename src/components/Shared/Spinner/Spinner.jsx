import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const SpinnerWrapper = styled.div`
.small {
    width: 19px;
    height: 19px;
}

.medium {
    width: 36px;
    height: 36px;
}

.big {
    width: 52px;
    height: 52px;
}

`;


const Spinner = (props) => {
  const { size } = props;
  return (
    <SpinnerWrapper {...props}>

      <div className={`preloader-wrapper active ${size}`}>
        <div className="spinner-layer">
          <div className="circle-clipper left">
            <div className="circle" />
          </div>
          <div className="gap-patch">
            <div className="circle" />
          </div>
          <div className="circle-clipper right">
            <div className="circle" />
          </div>
        </div>
      </div>
    </SpinnerWrapper>
  );
};

Spinner.propTypes = {
  size: propTypes.string.isRequired,
};

export default Spinner;
