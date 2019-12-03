import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import FlatCard, { FlatCardContent, FlatCardSection } from '../../Shared/FlatCard';
import TileList, {
  Tile, TileLink, TileContent, TileFooter,
} from '../../Shared/TileList';
import Button from '../../Shared/Button';
import AddressFormModal from './AddressFormModal';
import YesNoModal from '../../Shared/Prompts';

import constants from '../../ReactConstants';


const DefaultLabel = styled.span`
  font-size: ${constants.secondaryDescFontSize};
  color: ${constants.descriptionFontColor};
`;


const AddressTileList = (props) => {
  const {
    addresses, createHandler, updateHandler, deleteHandler,
  } = props;

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

            <AddressFormModal
              data={constants.newAddress()}
              createHandler={createHandler}
              updateHandler={updateHandler}
            />

            {addresses.map((address, index) => (
              <React.Fragment key={`ADDRESS_${address.id}`}>

                <AddressFormModal
                  data={address}
                  createHandler={createHandler}
                  updateHandler={updateHandler}
                />

                <YesNoModal
                  title="Delete Address"
                  description="Are you sure you want to proceed?"
                  id={`ADDRESS_DELETE_${address.id}`}
                  onClickYes={() => deleteHandler(address.id)}
                />

                <Tile key={address.id}>
                  <TileContent>
                    <span>{`${address.addressLine1} ${address.addressLine2}`}</span>
                    <br />
                    <span>{`${address.city}, ${address.state}`}</span>
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
  addresses: propTypes.arrayOf(propTypes.shape(constants.addressShape)).isRequired,
  createHandler: propTypes.func.isRequired,
  updateHandler: propTypes.func.isRequired,
  deleteHandler: propTypes.func.isRequired,
};

export default AddressTileList;
