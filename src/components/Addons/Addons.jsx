import React from 'react';

import Collection from '../Shared/Collection';
import AddonsMenu from './AddonsMenu';

class Addons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    return (
      <React.Fragment>
        <AddonsMenu />

        <main>
          <div className="section">
            <h5>Manage Addons</h5>
            <Collection />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Addons;
