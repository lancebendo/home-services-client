import React from 'react';
import ReactDOM from 'react-dom';

const ExtendedHeaderRoot = document.getElementById('nav-extended-content-root');

class DashboardFilter extends React.Component {
  constructor(props) {
    super(props);
    this.element = document.createElement('div');
  }

    componentDidMount = () => ExtendedHeaderRoot.appendChild(this.element);

    componentWillUnmount = () => ExtendedHeaderRoot.removeChild(this.element);

    render() {
      return ReactDOM.createPortal(
        (
          <span>Filter tools here</span>
        ),
        this.element,
      );
    }
}

export default DashboardFilter;
