import React from 'react';

import ServiceMenu from './ServicesMenu';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <React.Fragment>
        <ServiceMenu />

        <main>
          <h1>Services</h1>
          <button type="button" href="/" className="btn-floating waves-effect"><i className="material-icons">add</i></button>
        </main>
      </React.Fragment>
    );
  }
}

export default Services;
