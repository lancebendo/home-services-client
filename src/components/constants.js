import propTypes from 'prop-types';

export default {
  // background colors
  flatCardBorderColor: '#e0e0e0',
  hoverColor: '#b3e5fc',
  alternateHoverColor: '#f5f5f5',
  primaryColor: '#03a9f4',
  alternateColor: '#0277bd',
  footerColor: '#fafafa',

  // font colors
  defaultFontColor: '#212121',
  descriptionFontColor: '#616161',
  navFontColor: '#424242',
  iconFontColor: '#424242',
  proceedFontColor: '#4d90fe', // theme-attached color
  cancelFontColor: '#424242',

  // font sizes
  primaryHeaderFontSize: '1.9rem',
  secondaryHeaderFontSize: '1.4rem',
  parimaryDescFontSize: '1.15rem',
  secondaryDescFontSize: '1.01rem',
  navigationLabelFontSize: '1rem',
  linkLabelFontSize: '1rem',

  borderRadius: '8px',
  minSectionHeight: '51px',

  // media query ranges
  smallScreen: '600px',
  mediumScreen: '992px',
  largeScreen: '1200px',

  // prop type shapes
  userShape: {
    firstname: propTypes.string.isRequired,
    lastname: propTypes.string.isRequired,
    birthday: propTypes.string.isRequired,
  },
  addressShape: {
    houseNumber: propTypes.string.isRequired,
    street: propTypes.string.isRequired,
    subdivision: propTypes.string.isRequired,
    city: propTypes.string.isRequired,
    province: propTypes.string.isRequired,
  },

};
