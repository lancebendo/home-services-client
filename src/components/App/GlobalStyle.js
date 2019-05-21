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

// overwrite overlay style to blend well with materialize
.ReactModal__Overlay {
    z-index: 999999999;
    background-color: rgba(0,0,0,0.5) !important;
}

// overwrites react modal to remove default padding. We DIY
.ReactModal__Content {
    padding: 0px !important;
}

@media only screen and (min-width: ${constants.mediumScreen}) {
    main {
      padding: 50px;
      padding-left: 310px;
    }
  }
  
  @media only screen and (max-width: ${constants.mediumScreen}) {
    main {
      padding: 50px 15px 0;
    }
  }

`;

export default GlobalStyle;
