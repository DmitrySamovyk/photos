import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

class Img extends Component {
  render() {
    const { img } = this.props;
    return (
      <figure onClick={this.props.onClick}>
        <img src={img.image_url} alt="" id={img.id}/>
        <figcaption>{img.isFavourite ? 'Favourite' : ''}</figcaption>
      </figure>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    // toggleFavourite: bindActionCreators(toggleFavourite, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Img)