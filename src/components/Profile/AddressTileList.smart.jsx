import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import FlatCard, { FlatCardContent, FlatCardSection } from '../Shared/FlatCard';
import TileList, {
  Tile, TileLink, TileContent, TileFooter,
} from '../Shared/TileList';
import AddressFormModal from './AddressFormModal2';

import constants from '../constants';


const DefaultLabel = styled.span`
  font-size: ${constants.secondaryDescFontSize};
  color: ${constants.descriptionFontColor};
`;


class AddressTileList extends React.Component {
  constructor(props) {
    super(props);

    this.getNewAddress = this.getNewAddress.bind(this);
  }

  getNewAddress = () => ({
    id: 0,
    houseNumber: '',
    street: '',
    subdivision: '',
    city: '',
    province: '',
  });

  render() {
    const { addresses } = this.props;

    return (
      <React.Fragment>
        <FlatCard {...this.props} headerIcon="location_on" header="Addresses">
          <FlatCardSection>
            <FlatCardContent>
              <TileList>

                <TileLink
                  name="NewAddressLink"
                  label="+ Add new address"
                  modalTrigger
                  data-target={`ADDRESS_${this.getNewAddress().id}`}
                />
                <AddressFormModal address={this.getNewAddress()} />

                {addresses.map((address, index) => (
                  <React.Fragment key={`ADDRESS_${address.id}`}>

                    <AddressFormModal address={address} />
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
                          type="button"
                          className="btn-flat waves-effect waves-light modal-trigger"
                          data-target={`ADDRESS_${address.id}`}
                        >
                      Edit
                        </button>
                        <button
                          tabIndex={index}
                          type="button"
                          className="btn-flat waves-effect waves-light"
                        >
                      Delete
                        </button>
                      </TileFooter>
                    </Tile>
                  </React.Fragment>
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
};


export default AddressTileList;
