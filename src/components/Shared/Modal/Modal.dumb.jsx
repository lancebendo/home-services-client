import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import propTypes from 'prop-types';

import constants from '../../constants';

ReactModal.setAppElement('#root');

const ModalHeader = styled.span`
  font-size: ${constants.primaryHeaderFontSize};
`;

const ModalBody = styled.div`
  position: absolute;
  height: calc(100% - 56px);
  max-height: 100%;
  width: 100%;
  overflow-y: auto;
  padding: 12px;
`;

const ModalContent = styled.div`
  margin: 3px 10px 3px;
`;


const Modal = (props) => {
  const {
    closingHandler, isOpen, title, hasTitleDivider, children, footer: Footer,
  } = props;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closingHandler}
      {...props}
    >
      <ModalBody>
        <ModalHeader>{title}</ModalHeader>
        {hasTitleDivider ? (<div className="divider" />) : ''}
        <ModalContent>
          {children}
        </ModalContent>
      </ModalBody>

      <Footer {...props} />
    </ReactModal>
  );
};

Modal.defaultProps = {
  isOpen: false,
  hasTitleDivider: false,
  footer: () => (<div />),
};

Modal.propTypes = {
  isOpen: propTypes.bool,
  closingHandler: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
  title: propTypes.string.isRequired,
  hasTitleDivider: propTypes.bool,
  footer: propTypes.elementType,
};

export default Modal;
