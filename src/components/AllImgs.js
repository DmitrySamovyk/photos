import React, { Component } from 'react';
import { connect } from 'react-redux';

import Img from './Img'

class AllImgs extends Component {
  render() {
    const { dispatch, images } = this.props;
    return (
      <div>
        {images.map((img) =>
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

export default connect(mapStateToProps, null)(AllImgs)