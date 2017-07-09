export function getImages() {
  return {
    type: 'GET_IMAGES'
  };
}

export function setImages() {
  return {
    type: 'SET_IMAGES'
  };
}

export function toggleFavourite(index) {
  return { type: 'TOGGLE_FAVOURITE', index };
}