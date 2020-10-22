import { GET_CHOSELIST,GET_SUBJECT } from '../store/constants'

const defaultStatus = {
  categories: [],
  subject: []
}

const getCategoryItem = (state, action) => {
  //  Reducer 是纯函数，就可以保证同样的State,必定得到同样的 View ，Reducer 函数里面不能改变 State，必须返回一个全新的对象
  return {
    ...state, // state 是一个数组的时候
    categories: action.categories
  }
}
const getSubjectItem = (state, action) => {
  return {
    ...state,
    subject: action.subject
  }
}

export default function (state = defaultStatus, action) {
  switch(action.type) {
    case GET_CHOSELIST:
      return getCategoryItem(state, action);
    case GET_SUBJECT:
      return getSubjectItem(state, action);
    default:
        return state;
  }
}
