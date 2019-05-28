import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';

import FlatCard, { FlatCardContent, FlatCardSection } from '../Shared/FlatCard';
import TileList, {
  Tile, TileLink, TileContent, TileFooter, TileActionButton,
} from '../Shared/TileList';
import AddressFormModal from './AddressFormModal';

import { deleteAddress } from '../../redux/actions';

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
    uid: 0,
    houseNumber: '',
    street: '',
    subdivision: '',
    city: '',
    province: '',
  });

  openModal = (e, props, params) => {
    e.preventDefault();

    this.setState({ selectedAddress: params },
      this.setState({ isModalOpen: true }));
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
    const { addresses, deleteHandler } = this.props;

    return (
      <React.Fragment>

        <AddressFormModal
          isOpen={isModalOpen}
          address={selectedAddress}
          closingHandler={this.closeModal}
        />

        <FlatCard {...this.props} headerIcon="location_on" header="Addresses">
          <FlatCardSection>
            <FlatCardContent>
              <TileList>

                <TileLink
                  name="NewAddressLink"
                  label="+ Add new address"
                  onClick={e => this.openModal(e, this.props, this.getNewAddress())}
                />

                {addresses.map((address, index) => (
                  <Tile key={address.uid}>
                    <TileContent>
                      <span>{`${address.houseNumber} ${address.street}`}</span>
                      <br />
                      <span>{address.subdivision}</span>
                      <br />
                      <span>{`${address.city}, ${address.province}`}</span>
                    </TileContent>
                    <TileFooter>
                      <TileActionButton
                        tabIndex={index}
                        onClick={e => this.openModal(e, this.props, address)}
                        onKeyPress={e => this.openModal(e, this.props, address)}
                        type="button"
                        className="btn-flat waves-effect waves-light"
                      >
                      Set as default
                      </TileActionButton>
                      <TileActionButton
                        tabIndex={index}
                        onClick={e => this.openModal(e, this.props, address)}
                        onKeyPress={e => this.openModal(e, this.props, address)}
                        type="button"
                        className="btn-flat waves-effect waves-light"
                      >
                      Edit
                      </TileActionButton>
                      <TileActionButton
                        tabIndex={index}
                        onClick={() => deleteHandler(address.uid)}
                        onKeyPress={() => deleteHandler(address.uid)}
                        type="button"
                        className="btn-flat waves-effect waves-light"
                      >
                      Delete
                      </TileActionButton>
                    </TileFooter>
                  </Tile>
                ))}

              </TileList>

            </FlatCardContent>

          </FlatCardSection>
        </FlatCard>
      </React.Fragment>

    );
  }
}

AddressTileList.propTypes = {
  addresses: propTypes.arrayOf(propTypes.object).isRequired,
  deleteHandler: propTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  deleteHandler: addressId => dispatch(deleteAddress(addressId)),
});

export default connect(null, mapDispatchToProps)(AddressTileList);