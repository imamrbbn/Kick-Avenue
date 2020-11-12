const initState = {
  loading: false,
  error: false,
  dataSelling: null,
  chosenProduct: 6,
  rangeTime: 'ALL'
}

function productReducer(state = initState, action) {
  switch (action.type) {

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload
      }
    case "SET_ERROR":
      return {
        ...state,
        error: action.payload
      }
    case "SET_DATA_SELLING":
      return {
        ...state,
        dataSelling: action.payload
      }
    case "SET_PRODUCT":
      return {
        ...state,
        chosenProduct: action.payload
      }
    case "SET_RANGE_TIME":
      return {
        ...state,
        rangeTime: action.payload
      }
    default:
      return state
  }
}

export default productReducer