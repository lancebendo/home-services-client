import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import propTypes from 'prop-types';

import constants from '../../constants';

ReactModal.setAppElement('#root');

const ModalHeader = styled.span`
  font-size: ${constants.primaryHeaderFontSize};
  padding: 12px;
`;

const ModalBody = styled.div`
  // position: absolute;
  // height: calc(100% - 56px);
  // max-height: 100%;
  // width: 100%;
  // overflow-y: auto;
  padding-top: 12px;
`;

const ModalContent = styled.div`
  padding: 20px;
  margin: 3px 10px 3px;
  margin-bottom: 52px;
`;

const customStyles = {
  content: {
    border: '0',
    minHeight: '10rem',
    padding: '2rem',
    position: 'fixed',
    left: '50%',
    right: 'auto',
    top: '50%',
    bottom: 'auto',
    minWidth: '30rem',
    width: '50%',
    maxWidth: '50rem',
  },
};

const Modal = (props) => {
  const {
    closingHandler, isOpen, title, hasTitleDivider, children, footer: Footer,
  } = props;

  return (
    <ReactModal
      closeTimeoutMS={200}
      style={customStyles}
      isOpen={isOpen}
      shouldCloseOnEsc
      shouldCloseOnOverlayClick={false}
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
