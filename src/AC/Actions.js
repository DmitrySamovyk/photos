export function getImages(index) {
    return { type: 'GET_IMAGES', index };
}

export function toggleFavourite(index) {
  return { type: 'TOGGLE_FAVOURITE', index };
}