import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import moment from 'moment';

import FlatCard, { FlatCardContent } from '../Shared/FlatCard';

import constants from '../constants';

const Title = styled.span`
  font-size: ${constants.primaryHeaderFontSize};
`;

const Description = styled.span`
  color: ${constants.descriptionFontColor};
  font-size: ${constants.parimaryDescFontSize};
`;


const Dashboard = ({ user, address }) => {
  const {
    houseNumber, street, subdivision, city, province,
  } = address || '';

  const completeAddress = `${houseNumber} 
  ${street}, 
  ${subdivision}, 
  ${city}, 
  ${province}`;

  return (
    <main>
      <div className="row">
        <div className="center-align">

          <Title className="header-1">Welcome to my React - Redux Demo App</Title>
          <br />
          <Description className="description-1">
            {`Your name is ${user.firstname} ${user.lastname}.
              Your birthday was ${moment(user.birthday).format(constants.dateFormat)}. You currently 
              lived at ${completeAddress}. If you wish to change this, 
              Navigate to Profile page and change the information that 
              you want to change. (Note: If you refresh the browser, the 
              changes will be reverted to it's default value because the 
              data is not persisted. This is for demo only.)`}
          </Description>
        </div>
      </div>
      <FlatCard>
        <FlatCardContent>

          <p>
      This is for my mahal na laging nanjan para saken. Thank you
      for inspiring me to learn all this, you gave me a reason to be
      a better person. And I will keep on improving, just like you!
      Thank you mahal ko I love you so much! Ora et Labora. Pray, Hope,
      Do not worry. Have faith! Maaabot din natin ang mga pangarap natin.
          </p>

        </FlatCardContent>
      </FlatCard>
    </main>
  );
};

Dashboard.propTypes = {
  user: propTypes.shape(constants.userShape).isRequired,
  address: propTypes.shape(constants.addressShape).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  address: state.address.collection.find(ad => ad.isDefault) || '',
});

export default connect(mapStateToProps)(Dashboard);
