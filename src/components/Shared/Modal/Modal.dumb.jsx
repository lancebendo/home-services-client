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

const ModalFixedFooter = styled.div`
  position: absolute;
  bottom: 0;
  height: 52px;
  width: 100%;
  border-radius: 0 0 2px 2px;
  background-color: ${constants.footerColor};
  padding: 4px 6px;
  text-align: right;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const Modal = (props) => {
  const {
    closingHandler, isOpen, title, hasTitleDivider, children,
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
      <ModalFixedFooter>
        <button type="button" onClick={e => closingHandler(e, props)}>Close</button>
      </ModalFixedFooter>
    </ReactModal>
  );
};

Modal.defaultProps = {
  isOpen: false,
  hasTitleDivider: false,
};

Modal.propTypes = {
  isOpen: propTypes.bool,
  closingHandler: propTypes.func.isRequired,
  children: propTypes.node.isRequired,
  title: propTypes.string.isRequired,
  hasTitleDivider: propTypes.bool,
};

export default Modal;
