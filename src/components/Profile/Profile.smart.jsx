import React from 'react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import UserProfileFlatCard from './UserProfileFlatCard.smart';
import AddressTileList from './AddressTileList.smart';

import { getUser, getAddresses } from '../../redux/actions';

class Profile extends React.Component {
  componentWillMount() {
    const { loadData } = this.props;
    loadData();
  }

  render() {
    const { user, addresses } = this.props;
    return (
      <main>
        <UserProfileFlatCard className="row" user={user} />
        <AddressTileList className="row" addresses={addresses} />
      </main>
    );
  }
}

Profile.propTypes = {
  loadData: propTypes.func.isRequired,
  user: propTypes.shape({
    firstname: propTypes.string.isRequired,
    lastname: propTypes.string.isRequired,
    birthday: propTypes.string.isRequired,
  }).isRequired,
  addresses: propTypes.arrayOf(propTypes.shape({
    houseNumber: propTypes.string.isRequired,
    street: propTypes.string.isRequired,
    subdivision: propTypes.string.isRequired,
    city: propTypes.string.isRequired,
    province: propTypes.string.isRequired,
  })).isRequired,
};

const mapStateToProps = state => ({
  user: state.user,
  addresses: state.address.collection,
});

const mapDispatchToProps = dispatch => ({
  loadData: () => {
    dispatch(getUser(''));
    dispatch(getAddresses(''));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
