import React from 'react';
import ReactDOM from 'react-dom';

import { BackButton } from '../Shared/Button';

const ExtendedHeaderRoot = document.getElementById('nav-extended-content-root');

class ServiceMenu extends React.Component {
  constructor(props) {
    super(props);
    this.element = document.createElement('div');
  }

    componentDidMount = () => ExtendedHeaderRoot.appendChild(this.element);

    componentWillUnmount = () => ExtendedHeaderRoot.removeChild(this.element);

    render() {
      return ReactDOM.createPortal(
        (
          <BackButton link="/management/" />
        ),
        this.element,
      );
    }
}

export default ServiceMenu;
