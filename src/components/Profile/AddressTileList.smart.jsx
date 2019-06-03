import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import FlatCard, { FlatCardContent, FlatCardSection } from '../Shared/FlatCard';
import TileList, {
  Tile, TileLink, TileContent, TileFooter,
} from '../Shared/TileList';
import Button from '../Shared/Button';
import AddressFormModal from './AddressFormModal';
import YesNoModal from '../Shared/Prompts';

import { deleteAddress } from '../../redux/actions';

import constants from '../constants';


const DefaultLabel = styled.span`
  font-size: ${constants.secondaryDescFontSize};
  color: ${constants.descriptionFontColor};
`;


const AddressTileList = (props) => {
  const { addresses, deleteData } = props;

  return (
    <FlatCard headerIcon="location_on" header="Addresses">
      <FlatCardSection>
        <FlatCardContent>
          <TileList>

            <TileLink
              label="+ Add new address"
              className="modal-trigger"
              data-target={`ADDRESS_FORM_${constants.newAddress().id}`}
            />

            <AddressFormModal data={constants.newAddress()} />

            {addresses.map((address, index) => (
              <React.Fragment key={`ADDRESS_${address.id}`}>

                <AddressFormModal data={address} />

                <YesNoModal
                  title="Delete Address"
                  description="Are you sure you want to proceed?"
                  id={`ADDRESS_DELETE_${address.id}`}
                  onClickYes={() => deleteData(address.id)}
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
};

AddressTileList.propTypes = {
  deleteData: propTypes.func.isRequired,
  addresses: propTypes.arrayOf(propTypes.shape(constants.addressShape)).isRequired,
};

const mapStateToProps = state => ({
  addresses: state.address.collection,
});

const mapDispatchToProps = dispatch => ({
  deleteData: addressId => dispatch(deleteAddress(addressId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddressTileList);
