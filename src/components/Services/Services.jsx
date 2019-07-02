import React from 'react';

import Collection from '../Shared/Collection';
import ServicesMenu from './ServicesMenu';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <React.Fragment>
        <ServicesMenu />

        <main>
          <div className="section">
            <h5>Manage Services</h5>
            <Collection />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Services;
