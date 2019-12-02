import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import styled from 'styled-components';

import constants from '../../ReactConstants';

import Icon from '../Icon';

const BackLink = styled(Link)`
  &:hover {
    background-color: ${constants.alternateColor};
  }
`;

const ExtendedHeaderRoot = document.getElementById('nav-extended-content-root');

class BackButton extends React.Component {
  constructor(props) {
    super(props);
    this.element = document.createElement('div');
  }

    componentDidMount = () => ExtendedHeaderRoot.appendChild(this.element);

    componentWillUnmount = () => ExtendedHeaderRoot.removeChild(this.element);

    render() {
      const { link } = this.props;

      return ReactDOM.createPortal(
        (
          <React.Fragment>
            <BackLink to={link} className="btn-floating btn-flat waves-effect">
              <Icon icon="arrow_back" />
            </BackLink>
          </React.Fragment>
        ),
        this.element,
      );
    }
}

BackButton.propTypes = {
  link: propTypes.string.isRequired,
};

export default BackButton;
