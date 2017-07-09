import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

class Tabs extends Component {
  render() {
    return (
      <div>
        <NavLink to="/" >All</NavLink>
        <NavLink to="/favourites">Favourites</NavLink>
      </div>
    )

  }
}

export default (withRouter(Tabs))