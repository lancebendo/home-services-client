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


// overwrite overlay style to blend well with materialize
.ReactModal__Overlay {
    z-index: 999999999;
    background-color: rgba(0,0,0,0.5) !important;
}

// overwrites react modal to remove default padding. We DIY
.ReactModal__Content {
    padding: 0px !important;
}

`;

export default GlobalStyle;
