import propTypes from 'prop-types';

class ReactConstants {
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
      { header: 'Name of Service', dataField: 'details' },
    ];

    this.getElementId = (dataType, id, dataField) => `${dataType}_${id}_${dataField}`;

    // all the properties below should be in a separate project

    // prop type shapes
    this.userShape = {
      id: propTypes.number.isRequired,
      firstname: propTypes.string.isRequired,
      lastname: propTypes.string.isRequired,
      birthday: propTypes.oneOfType([propTypes.instanceOf(Date), propTypes.string]).isRequired,
    };

    this.addressShape = {
      id: propTypes.number.isRequired,
      addressLine1: propTypes.string.isRequired,
      addressLine2: propTypes.string.isRequired,
      city: propTypes.string.isRequired,
      state: propTypes.string.isRequired,
    };

    this.reservationShape = {
      id: propTypes.number.isRequired,
      additionalDetails: propTypes.string.isRequired,
      adminNotes: propTypes.string.isRequired,
      date: propTypes.oneOfType([propTypes.instanceOf(Date), propTypes.string]),
      status: propTypes.number, // 0 for unconfirmed, 1 for confirmed, 2 for done,
    };

    this.serviceShape = {
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      description: propTypes.string.isRequired,
      rate: propTypes.number.isRequired,
    };


    // object factories

    this.newCustomer = () => ({
      id: 0,
      firstname: '',
      lastname: '',
      birthday: new Date(),
    });

    this.newAddress = () => ({
      id: 0,
      addressLine1: '',
      addressLine2: '',
      city: '',
      state: '',
    });

    this.newReservation = () => ({
      id: 0,
      address: { id: 0, customer: { id: 0 } },
      date: new Date(),
      status: 0,
      additionalDetails: '',
      adminNotes: '',
      reservationServices: [{ serviceId: 0 }],
    });

    this.newService = () => ({
      id: 0,
      name: '',
      description: '',
      rate: 0.00,
    });
  }
}

export default new ReactConstants();
