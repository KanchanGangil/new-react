import {
  ALL_PRODUCT_FAIL,
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILED,
} from '../../redux/constants/ProductConstants';
import axios from 'axios';
// action create 
export const getAllProduct = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });
    // get data form api
    let apilink = '/getallproduct'
    const { data } = await axios.get(apilink)
    console.log(data)
    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
    })

  } catch (error) {
    dispatch({
      type: ALL_PRODUCT_FAIL,
      payload: error.response.data.message
    })
  }
}

//ProductDetail action create
export const getProductDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST })
    const { data } = await axios.get(`/getallproductdetail/${id}`)
    console.log(data)
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAILED,
      payload: error.response.data.message,
    })
  }
}