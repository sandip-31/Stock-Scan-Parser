import { fetchDataFromAPI } from '../../services/api';
import * as actionTypes from './actionTypes';


export const fetchDataRequest = () => ({
  type: actionTypes.FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
  type: actionTypes.FETCH_DATA_SUCCESS,
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: actionTypes.FETCH_DATA_FAILURE,
  payload: error,
});

export const fetchData = () => {
  return (dispatch) => {
    dispatch(fetchDataRequest());

    fetchDataFromAPI()
      .then((response) => {
        dispatch(fetchDataSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchDataFailure(error));
      });
  };
};
