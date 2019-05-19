import React from 'react';
import styled from 'styled-components';
import ReactModal from 'react-modal';
import propTypes from 'prop-types';

import constants from '../../constants';

ReactModal.setAppElement('#root');

const ModalHeader = styled.span`
  font-size: ${constants.primaryHeaderFontSize};
`;

const ModalContent = styled.div`
  position: absolute;
  height: calc(100% - 56px);
  max-height: 100%;
  width: 100%;
  overflow-y: auto;
`;

const ModalFixedFooter = styled.div`
  position: absolute;
  bottom: 0;
  height: 56px;
  width: 100%;
  border-radius: 0 0 2px 2px;
  background-color: #fafafa;
  padding: 4px 6px;
  text-align: right;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { showModal } = this.state;
    const {
      children, style, title, hasTitleDivider,
    } = this.props;

    return (
      <div>
        <button type="button" onClick={this.handleOpenModal}>Trigger Modaldaldalita</button>
        <ReactModal
          isOpen={showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={this.handleCloseModal}
          style={style}
        >
          <ModalContent>
            <ModalHeader>{title}</ModalHeader>
            {hasTitleDivider ? (<div className="divider" />) : ''}
            {children}
          </ModalContent>
          <ModalFixedFooter>
            <button type="button" onClick={this.handleCloseModal}>Close</button>

          </ModalFixedFooter>
        </ReactModal>
      </div>
    );
  }
}

Modal.defaultProps = {
  hasTitleDivider: false,
};

Modal.propTypes = {
  children: propTypes.node.isRequired,
  style: propTypes.objectOf(propTypes.object).isRequired,
  title: propTypes.string.isRequired,
  hasTitleDivider: propTypes.bool,
};

export default Modal;
