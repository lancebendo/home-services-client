import React from 'react';
import propTypes from 'prop-types';

import FlatCard, { FlatCardContent, FlatCardSection } from '../Shared/FlatCard';
import TileList, {
  Tile, TileLink, TileContent, TileFooter,
} from '../Shared/TileList';
import AddressFormModal from './AddressFormModal';

class AddressTileList extends React.Component {
  constructor(props) {
    super(props);

    this.getNewAddress = this.getNewAddress.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      isModalOpen: false,
      selectedAddress: this.getNewAddress(),
    };
  }

  getNewAddress = () => ({
    houseNumber: '',
    street: '',
    subdivision: '',
    city: '',
    province: '',
  });

  openModal = (e, props, params) => {
    e.preventDefault();

    this.setState({
      selectedAddress: params,
      isModalOpen: true,
    });
  }

  closeModal = (e) => {
    e.preventDefault();
    this.setState({
      selectedAddress: this.getNewAddress(),
      isModalOpen: false,
    });
  }

  render() {
    const { isModalOpen, selectedAddress } = this.state;
    const { addresses } = this.props;

    return (
      <FlatCard {...this.props} header="Addresses">
        <FlatCardSection>
          <FlatCardContent>
            <TileList>

              <TileLink name="NewAddressLink" label="+ Add new Address" onClick={e => this.openModal(e, this.props, this.getNewAddress())} />
              <AddressFormModal
                isOpen={isModalOpen}
                address={selectedAddress}
                closingHandler={this.closeModal}
              />

              {addresses.map(address => (
                <Tile key={address.id}>
                  <TileContent>
                    <span>{`${address.houseNumber} ${address.street}`}</span>
                    <br />
                    <span>{address.subdivision}</span>
                    <br />
                    <span>{`${address.city}, ${address.province}`}</span>
                  </TileContent>
                  <TileFooter>
                    <button onClick={e => this.openModal(e, this.props, address)} type="button" className="noselect btn-flat waves-effect waves-light">
                      Edit
                    </button>
                  </TileFooter>
                </Tile>
              ))}

            </TileList>

          </FlatCardContent>

        </FlatCardSection>
      </FlatCard>
    );
  }
}

// const AddressTileList = (props) => {
//   const { addresses } = props;

//   return (
//     <FlatCard {...props}>
//       <FlatCardContent>
//         <TileList>

//           <TileLink label="+ Add new Address" />

//           {addresses.map(address => (
//             <Tile key={address.id}>
//               <span>{`${address.houseNumber} ${address.street}`}</span>
//               <br />
//               <span>{address.subdivision}</span>
//               <br />
//               <span>{`${address.city}, ${address.province}`}</span>
//             </Tile>
//           ))}

//         </TileList>
//       </FlatCardContent>
//     </FlatCard>
//   );
// };

AddressTileList.propTypes = {
  addresses: propTypes.arrayOf(propTypes.object).isRequired,
};

export default AddressTileList;
