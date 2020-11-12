export function SET_LOADING(status) {
  return {
    type: "SET_LOADING",
    payload: status
  }
}

export function SET_ERROR(status) {
  return {
    type: "SET_ERROR",
    payload: status
  }
}

export function SET_DATA_SELLING(data) {
  let usedData = []
  data.forEach(e => {
    let date = e.customer_paid.split(' ')
    let price = e.price.split('.')
    e.customer_paid = new Date(date[0])
    usedData.push({date: e.customer_paid, price: price[0]})
  });
  const sortedDataByDate = usedData.slice().sort((a, b) => a.date - b.date)
  return {
      type: "SET_DATA_SELLING",
      payload: sortedDataByDate
  }; 
}

export function FETCH_DATA_SELLING(id) {
  
  return (dispatch, getState) => {
    dispatch(SET_LOADING(true))
    fetch(`https://develop3.kickavenue.com/products/sale-history?ids=${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        dispatch(SET_DATA_SELLING(data.data['6']))
      })
      .catch(err => console.log(err))
      .finally(() => dispatch(SET_LOADING(false)))
    }
}


export function SET_PRODUCT(data) {
  return {
      type: "SET_PRODUCT",
      payload: data
  }; 
}

export function SET_RANGE_TIME(data) {
  return {
      type: "SET_RANGE_TIME",
      payload: data
  }; 
}