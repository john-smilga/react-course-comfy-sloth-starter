import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'

const products_reducer = (state, action) => {
  if (action.type === SIDEBAR_OPEN){
    return {...state,isSidebarOpen:true}
  }

  if (action.type === SIDEBAR_CLOSE){
    return {...state,isSidebarOpen:false}
  }
  
  return state
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default products_reducer
