import React from 'react';
import propTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import SideNav from '../../ui/SideNav';
import NavButton from '../../ui/NavButton';
import NavLink from '../../ui/NavLink';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    const { location } = this.props;
    this.state = { currentPath: location.pathname };

    this.isSelected = this.isSelected.bind(this);
    this.onBook = this.onBook.bind(this);
    this.onNavChange = this.onNavChange.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }


  isSelected = (path) => {
    const { currentPath } = this.state;
    return currentPath === path;
  }


  onBook = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-console
    console.log('Book!');

    // create an action to create a modal or portal
  }


  onNavChange = (e, sender) => this.setState({ currentPath: sender.path });


  onChatUs = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-console
    console.log('Chat with us!');

    // I'm pretty sure this is where you will create logout action
  }


  onLogout = (e) => {
    e.preventDefault();

    // eslint-disable-next-line no-console
    console.log('logout!');

    // I'm pretty sure this is where you will create logout action
  }


  render() {
    const { currentPath } = this.state;

    return (
      <SideNav collapsible>
        <NavButton label="Book now" onClick={this.onBook} icon="event" />
        <div className="divider" />
        <NavLink path="/" label="Dashboard" onClick={this.onNavChange} icon="home" isSelected={this.isSelected('/')} />
        <NavLink path="/profile" label="Profile" onClick={this.onNavChange} icon="person" isSelected={this.isSelected('/profile')} />
        <NavLink path="/history" label="History" onClick={this.onNavChange} icon="history" isSelected={this.isSelected('/history')} />
        <NavLink path={currentPath} label="Chat with us" onClick={this.onChatUs} fabIcon="fab fa-facebook-messenger" />
        <div className="divider" />
        <NavLink path={currentPath} label="Log-out" onClick={this.onLogout} icon="exit_to_app" />
      </SideNav>
    );
  }
}

Nav.propTypes = {
  location: propTypes.objectOf(propTypes.string).isRequired,
};

export default withRouter(Nav);
