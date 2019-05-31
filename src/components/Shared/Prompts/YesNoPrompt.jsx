import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import Modal, { ModalContent, ModalFooter } from '../Modal';
import Button from '../Button';

import constants from '../../constants';

const Title = styled.span`
  font-size: ${constants.primaryHeaderFontSize};
`;


const YesNoPrompt = (props) => {
  const {
    onClickYes: yesClickHandler, onClickNo: noClickHandler, title, description, id,
  } = props;
  return (
    <Modal id={id} isFixedFooter>
      <ModalContent>
        <Title>{title}</Title>
        <p>{description}</p>
      </ModalContent>
      <ModalFooter>
        <Button label="Yes" onClick={yesClickHandler} className="modal-close" />
        <Button label="No" onClick={noClickHandler} className="modal-close" />
      </ModalFooter>
    </Modal>
  );
};

YesNoPrompt.defaultProps = {
  onClickYes: () => {},
  onClickNo: () => {},
};

YesNoPrompt.propTypes = {
  onClickYes: propTypes.func,
  onClickNo: propTypes.func,
  description: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default YesNoPrompt;
