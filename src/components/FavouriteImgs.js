import React, { Component } from 'react'
import { connect } from 'react-redux';

import { toggleFavourite } from '../AC/Actions';

import Img from './Img'

class FavouriteImgs extends Component {
  render() {
    const { dispatch, images } = this.props;
    return (
      <div>
        {images.filter(img =>img.isFavourite).map((img, index) =>
          <Img
            key={index}
            img={img}
            onClick = {() => dispatch(toggleFavourite(index))}
            isFavourite = {img.isFavourite}
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