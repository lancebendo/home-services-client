import { createGlobalStyle } from 'styled-components';
import constants from '../constants';

const GlobalStyle = createGlobalStyle`
margin: 0;
padding: 0;
letter-spacing: .01438571em;
font-family: 'Open Sans', sans-serif;
font-family: 'Roboto', sans-serif;
font-size: 1.04em;
color: ${constants.defaultFontColor};

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}

.no-margin-bottom {
  margin-bottom: 0px !important;
}

.no-border-top {
  border-top: 0px !important;
}

.has-bottom-radius {
  border-radius: 0 0 ${constants.borderRadius} ${constants.borderRadius};
}

//overwrites materialize picker color
.datepicker-date-display, .datepicker-weekday-display, .datepicker-table td.is-selected{
  background-color: ${constants.primaryColor} !important;
}
.datepicker-cancel, .datepicker-clear, 
.datepicker-today, .datepicker-done {
  color: ${constants.primaryColor} !important;
}

@media only screen and (min-width: ${constants.mediumScreen}) {
    main {
      padding: 50px;
      padding-left: 310px;
    }

    .modal { width: 60% !important; }
  }
  
  @media only screen and (max-width: ${constants.mediumScreen}) {
    main {
      padding: 50px 15px 0;
    }

    .modal { width: 70% !important; }
  }

  @media only screen and (max-width: ${constants.smallScreen}) {
    .modal { width: 90% !important; }
  }

`;

export default GlobalStyle;
