import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';

import FlatCard, { FlatCardContent } from '../Shared/FlatCard';

import constants from '../constants';

const Title = styled.span`
  font-size: ${constants.primaryHeaderFontSize};
`;

const Description = styled.span`
  color: ${constants.descriptionFontColor};
  font-size: ${constants.parimaryDescFontSize};
`;


const Dashboard = ({ user }) => (
  <main>
    <div className="row">
      <div className="center-align">

        <Title className="header-1">{`Welcome, ${user.firstname} ${user.lastname}`}</Title>
        <br />
        <Description className="description-1">
Lorem ipsum dolor adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

Dashboard.propTypes = {
  user: propTypes.shape(constants.userShape).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Dashboard);
