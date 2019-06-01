import propTypes from 'prop-types';

class Constants {
  constructor() {
    // background colors
    this.flatCardBorderColor = '#e0e0e0';
    this.hoverColor = '#b3e5fc';
    this.alternateHoverColor = '#f5f5f5';
    this.primaryColor = '#03a9f4';
    this.alternateColor = '#0277bd';
    this.footerColor = '#fafafa';


    // font colors
    this.defaultFontColor = '#212121';
    this.descriptionFontColor = '#616161';
    this.navFontColor = '#424242';
    this.iconFontColor = '#424242';
    this.proceedFontColor = '#4d90fe'; // theme-attached color
    this.cancelFontColor = '#424242';


    // font sizes
    this.primaryHeaderFontSize = '1.9rem';
    this.secondaryHeaderFontSize = '1.4rem';
    this.parimaryDescFontSize = '1.15rem';
    this.secondaryDescFontSize = '0.9rem';
    this.navigationLabelFontSize = '1rem';
    this.linkLabelFontSize = '1rem';


    // etc
    this.borderRadius = '8px';
    this.minSectionHeight = '51px';


    // media query ranges
    this.smallScreen = '600px';
    this.mediumScreen = '992px';
    this.largeScreen = '1200px';


    // formats
    this.dateFormat = 'MMMM D, YYYY';

    // format or mappings for DataTables
    this.reservationTableMappings = [
      { header: 'Reservation Number', dataField: 'id' },
      { header: 'Reservation Date', dataField: 'reservationDate' },
      { header: 'Status', dataField: 'status' },
    ];


    // all the properties below should be in a separate project

    // prop type shapes
    this.userShape = {
      firstname: propTypes.string.isRequired,
      lastname: propTypes.string.isRequired,
      birthday: propTypes.instanceOf(Date).isRequired,
    };

    this.addressShape = {
      houseNumber: propTypes.string.isRequired,
      street: propTypes.string.isRequired,
      subdivision: propTypes.string.isRequired,
      city: propTypes.string.isRequired,
      province: propTypes.string.isRequired,
    };

    this.reservationShape = {
      user: propTypes.shape(this.userShape),
      address: propTypes.shape(this.addressShape),
      reservationDate: propTypes.instanceOf(Date),
      status: propTypes.number, // 0 for unconfirmed, 1 for confirmed, 2 for done,
    };


    // object factories
    this.newAddress = () => ({
      id: 0,
      houseNumber: '',
      street: '',
      subdivision: '',
      city: '',
      province: '',
    });

    this.newReservation = () => ({
      id: 0,
      user: null,
      address: null,
      reservationDate: null,
      status: 0,
    });
  }
}

export default new Constants();
