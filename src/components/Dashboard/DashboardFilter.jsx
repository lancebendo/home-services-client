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
          <ul className="tabs tabs-transparent">
            <li className="tab"><a href="#test1">Test 1</a></li>
            <li className="tab"><a className="active" href="#test2">Test 2</a></li>
            <li className="tab disabled"><a href="#test3">Disabled Tab</a></li>
            <li className="tab"><a href="#test4">Test 4</a></li>
          </ul>
        ),
        this.element,
      );
    }
}

export default DashboardFilter;
