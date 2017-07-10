import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import AllImgs from './AllImgs';
import FavouriteImgs from './FavouriteImgs';
import Tabs from './Tabs';
import * as getImagesAction from '../AC/Actions'

class App extends Component {
  render() {
    return (
      <div>
        <Tabs/>
        <Route exact path="/" component={AllImgs}/>
        <Route path="/favourites" component={FavouriteImgs}/>
      </div>
    );
  }

  componentWillMount() {
    if (this.props.startImages.images.length < 0) {
      this.props.actions.getImages()
    }
  }
}

function mapStateToProps(state) {
  return {
    startImages: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(getImagesAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App))