import React, { Component } from 'react';
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
    dispatch
  }
}

export default connect(null, mapDispatchToProps)(Img)