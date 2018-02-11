import axios from 'axios';

const initCatalog = () => {
  return (dispatch) => {
    axios.get('/api/catalog')
      .then((res) => dispatch({
        type: 'INIT_CATALOG',
        catalog: res.data
      }))
      .catch((err) => console.log(err));
  }
}

export { initCatalog };