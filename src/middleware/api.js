import axios from 'axios';

export default store => next => action => {
  if (!action || action.type !== 'GET_IMAGES') { return (next(action)); }
  axios.get('https://api.500px.com/v1/photos?feature=popular', {
    params: {
      consumer_key : 'kkt1CWnBR3cal4sQ97XQ2levELTlKwYAvm6m6Wdu'
    }
  })
    .then(function (response) {
      store = response.data.photos;
      store.map(img => img.isFavourite = false);
      next({
        type: 'SET_IMAGES',
        data: response.data.photos
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};