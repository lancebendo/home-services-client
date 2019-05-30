import React from 'react';
import propTypes from 'prop-types';

class Modal extends React.Component {
  componentDidMount() {
    const { id } = this.props;
    const element = document.getElementById(id);
    const container = document.getElementById('root');

    window.M.Modal.init(element, { ...this.props, container });
  }

  render() {
    const { id, children, isFixedFooter } = this.props;

    const className = `modal ${isFixedFooter ? 'modal-fixed-footer' : ''}`;

    return (
      <div id={id} className={className}>
        {children}
      </div>
    );
  }
}

Modal.defaultProps = {
  isFixedFooter: false,
};

Modal.propTypes = {
  id: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
  isFixedFooter: propTypes.bool,
};

export default Modal;
