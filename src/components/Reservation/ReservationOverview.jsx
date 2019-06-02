import React from 'react';
import propTypes from 'prop-types';

import Input from '../Shared/Input';

import constants from '../constants';

class ReservationSummary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reservation: props.reservation,
      isInEdit: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onOpenStart = this.onOpenStart.bind(this);
  }

  // this is temporary
  componentDidMount() {
    window.M.updateTextFields();
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    this.setState(prevState => ({
      reservation: { ...prevState.reservation, [name]: value },
    }));
  }

  onOpenStart = () => {
    const { reservation } = this.props;
    this.setState({
      reservation,
    });
  }


  render() {
    const { reservation, isInEdit } = this.state;
    return (
      <React.Fragment>


        <Input
          type="text"
          disabled={!isInEdit}
          className="validate"
          onChange={this.handleInputChange}
          value={reservation.reservationDate}
          field="reservationDate"
          label="Date of Reservation"
        />

        <Input
          type="text"
          disabled
          className="validate"
          onChange={this.handleInputChange}
          value={reservation.status}
          field="status"
          label="Reservation Status"
        />

        <Input
          type="text"
          disabled
          className="validate"
          onChange={this.handleInputChange}
          value={reservation.details}
          field="details"
          label="Name of Service"
        />

      </React.Fragment>
    );
  }
}

ReservationSummary.propTypes = {
  reservation: propTypes.shape(constants.reservationShape).isRequired,
};

export default ReservationSummary;
