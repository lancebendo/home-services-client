import React from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import FlatCard, { FlatCardContent, FlatCardSection } from '../Shared/FlatCard';
import TileList, {
  Tile, TileLink, TileContent, TileFooter,
} from '../Shared/TileList';
import AddressFormModal from './AddressFormModal';

import { deleteAddress } from '../../redux/actions';

import constants from '../constants';


const DefaultLabel = styled.span`
  font-size: ${constants.secondaryDescFontSize};
  color: ${constants.descriptionFontColor};
`;


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
                  <Tile key={address.id}>
                    <TileContent>
                      <span>{`${address.houseNumber} ${address.street}`}</span>
                      <br />
                      <span>{address.subdivision}</span>
                      <br />
                      <span>{`${address.city}, ${address.province}`}</span>
                      <br />
                      <DefaultLabel>{address.isDefault ? '[Default Address]' : <br />}</DefaultLabel>
                    </TileContent>
                    <TileFooter>
                      <button
                        tabIndex={index}
                        onClick={e => this.openModal(e, this.props, address)}
                        onKeyPress={e => this.openModal(e, this.props, address)}
                        type="button"
                        className="btn-flat waves-effect waves-light"
                      >
                      Edit
                      </button>
                      <button
                        tabIndex={index}
                        onClick={() => deleteHandler(address.id)}
                        onKeyPress={() => deleteHandler(address.id)}
                        type="button"
                        className="btn-flat waves-effect waves-light"
                      >
                      Delete
                      </button>
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
