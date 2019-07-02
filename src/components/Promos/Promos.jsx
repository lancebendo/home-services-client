import React from 'react';

import Collection from '../Shared/Collection';
import PromosMenu from './PromosMenu';

class Promos extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <React.Fragment>
        <PromosMenu />

        <main>
          <div className="section">
            <h5>Manage Promos</h5>
            <Collection />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Promos;
