import {
    ALL_CATEGORY_REQUEST,
    ALL_CATEGORY_SUCCESS,
    ALL_CATEGORY_FAIL
} from '../../redux/constants/CategoryConstants';
import axios from 'axios'

//action create getAllCategory
export const getAllCategory = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_CATEGORY_REQUEST })
        let apilink = '/categorydisplay'
        const { data } = await axios.get(apilink)
        console.log(data);
        dispatch({
            type: ALL_CATEGORY_SUCCESS,
            payload: data,
        })
    } catch (error) {
        dispatch({
            type: ALL_CATEGORY_FAIL,
            payload: error.response.data.message,
        })
    }
}
