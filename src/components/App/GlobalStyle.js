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

@keyframes scale-in {
  from {
    transform: scale(0);
    opacity: 0;
    transform: translate(0,0);
  }

  to {
    transform: scale(1);
    opacity: 1; 
    transform: translate(-50%,-50%);
  }
}

@keyframes scale-out {
  from {
    transform: scale(1);
    opacity: 1;transform: 
    translate(-50%,-50%);
  }

  to {
    transform: scale(0);
    opacity: 0;
    transform: translate(0,0);
  }
}

@keyframes delay {
  from {opacity: 1;}
  to {opacity: 0;}
}

// overwrite overlay style to blend well with materialize
.ReactModal__Overlay {
    z-index: 999;
    background-color: rgba(0,0,0,0.5) !important;
    &--after-open {
      opacity: 1;
  }
  &--before-close {
      opacity: 0;
  }
}

// overwrites react modal to remove default padding. We DIY
.ReactModal__Content {
    padding: 0px !important;
}

.ReactModal__Content--after-open {
  animation-name: scale-in;
  animation-duration: .2s; 
  transform: translate(-50%,-50%);
}

.ReactModal__Overlay--before-close {
  animation-name: delay;
  animation-duration: .2s;
}

.ReactModal__Content--before-close {
  animation-name: scale-out;
  animation-duration: .2s;
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
  }
  
  @media only screen and (max-width: ${constants.mediumScreen}) {
    main {
      padding: 50px 15px 0;
    }
  }

`;

export default GlobalStyle;
