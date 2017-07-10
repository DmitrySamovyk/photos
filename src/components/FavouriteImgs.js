import React, { Component } from 'react'
import { connect } from 'react-redux';

import Img from './Img'

class FavouriteImgs extends Component {
  render() {
    const { dispatch, images } = this.props;
    return (
      <div className="images-wrap">
        {images.filter(img =>img.isFavourite).map((img) =>
          <Img
            key={img.index}
            img={img}
          />
        )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps, null)(FavouriteImgs)