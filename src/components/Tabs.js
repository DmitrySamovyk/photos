import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Tabs extends Component {
  render() {
    return (
      <nav>
        <NavLink exact to="/">All</NavLink>
        <NavLink to="/favourites">Favourites</NavLink>
      </nav>
    )

  }
}

export default (withRouter(Tabs))