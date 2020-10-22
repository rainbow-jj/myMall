// import axios from 'axios';
import { GET_CHOSELIST, GET_SUBJECT } from '../store/constants'
import data from '../../../api/detailData.json';
import { result } from 'lodash';

const getCategoryItem = (result) => (
  {
    type: GET_CHOSELIST,
    categories: result.categories
  })

const getSubjectItem = (result) => (
  {
    type: GET_SUBJECT,
    subject: result.subject
  }
)
export const getSubject = () => {
  return (dispatch) => {
    dispatch(getSubjectItem(data.data))
  }
}


export const getList = () => {
  return (dispatch) => {
      dispatch(getCategoryItem(data.data))

  }
}
