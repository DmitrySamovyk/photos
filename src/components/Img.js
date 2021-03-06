import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

import { toggleFavourite } from '../AC/Actions';

class Img extends Component {
  render() {
    const { img } = this.props;
    return (
      <figure onClick={() => this.props.toggleFavourite(img.index)}>
        <img src={img.image_url} alt="" id={img.id}/>
        <figcaption>{img.isFavourite ? 'Favourite' : ''}</figcaption>
        <div className="tooltip">
          <p>
            {img.isFavourite ? 'Click to REMOVE from favourites' : 'Click to ADD to favourites' }
          </p>
        </div>
      </figure>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleFavourite: bindActionCreators(toggleFavourite, dispatch),
    dispatch
  }
}

export default connect(null, mapDispatchToProps)(Img)