import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import FlatCard, { FlatCardContent, FlatCardSection } from '../Shared/FlatCard';
import TileList, {
  Tile, TileLink, TileContent, TileFooter,
} from '../Shared/TileList';
import Button from '../Shared/Button';
import AddressFormModal from './AddressFormModal';
import YesNoModal from '../Shared/Prompts';

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
      <FlatCard {...this.props} headerIcon="location_on" header="Addresses">
        <FlatCardSection>
          <FlatCardContent>
            <TileList>

              <TileLink
                label="+ Add new address"
                className="modal-trigger"
                data-target={`ADDRESS_FORM_${this.getNewAddress().id}`}
              />
              <AddressFormModal address={this.getNewAddress()} />

              {addresses.map((address, index) => (
                <React.Fragment key={`ADDRESS_${address.id}`}>

                  <AddressFormModal address={address} />

                  <YesNoModal
                    title="Delete Address"
                    description="Are you sure you want to proceed?"
                    id={`ADDRESS_DELETE_${address.id}`}
                    onClickYes={() => {}}
                  />

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
                      <Button
                        tabIndex={index}
                        className="modal-trigger"
                        data-target={`ADDRESS_FORM_${address.id}`}
                        label="Edit"
                      />
                      <Button
                        tabIndex={index}
                        className="modal-trigger"
                        data-target={`ADDRESS_DELETE_${address.id}`}
                        label="Delete"
                      />
                    </TileFooter>
                  </Tile>
                </React.Fragment>
              ))}

            </TileList>

          </FlatCardContent>
        </FlatCardSection>
      </FlatCard>
    );
  }
}

AddressTileList.propTypes = {
  addresses: propTypes.arrayOf(propTypes.object).isRequired,
};


export default AddressTileList;
