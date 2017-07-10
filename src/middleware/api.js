import axios from 'axios';

export default store => next => action => {
    const key = 'kkt1CWnBR3cal4sQ97XQ2levELTlKwYAvm6m6Wdu';
  if (!action || action.type !== 'GET_IMAGES') { return (next(action)); }
  axios.get('https://api.500px.com/v1/photos?feature=popular', {
    params: {
      consumer_key : key
    }
  })
    .then(function (response) {
      store = response.data.photos;
      store.map((img, index) => {
        img.isFavourite = false;
        img.index = index;
      });
      next({
        type: 'SET_IMAGES',
        data: response.data.photos
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};