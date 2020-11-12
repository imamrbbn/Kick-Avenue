import React, { useEffect, useState } from 'react'
import { LineChart } from "react-native-chart-kit";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// import Loading from './Loading' 

import {FETCH_DATA_SELLING} from '../store/actions/ChartAction'

export default function ChartSelling() {
  
  const dispatch = useDispatch()
  const loading = useSelector(state => state.ChartReducer.loading)
  const dataSelling = useSelector(state => state.ChartReducer.dataSelling)
  // const [dataSelling, setDataSelling] = useState([{"actual_total_price": "15700000.00", "completed": 1, "customer_paid": "2018-12-27 18:49:23", "nett": "15700000.00", "offer": null, "price": "15700000.00", "ref_number": null, "sale_shipping": null, "status": "DONE_BY_BUYER", "total_adjusted_price": "15700000.00", "total_price": "15700000.00", "total_price_seller": "0.00", "voucher_type": null}, {"actual_total_price": "8400000.00", "completed": 1, "customer_paid": "2018-12-27 18:50:11", "nett": "8400000.00", "offer": null, "price": "8400000.00", "ref_number": null, "sale_shipping": null, "status": "DONE_BY_BUYER", "total_adjusted_price": "8400000.00", "total_price": "8400000.00", "total_price_seller": "0.00", "voucher_type": null}, {"actual_total_price": "9100000.00", "completed": 1, "customer_paid": "2018-12-21 11:58:05", "nett": "9100000.00", "offer": null, "price": "9100000.00", "ref_number": null, "sale_shipping": null, "status": "DONE_BY_ADMIN", "total_adjusted_price": "9100000.00", "total_price": "9100000.00", "total_price_seller": "0.00", "voucher_type": null}, {"actual_total_price": "7800000.00", "completed": 1, "customer_paid": "2018-12-28 14:41:36", "nett": "7800000.00", "offer": null, "price": "7800000.00", "ref_number": null, "sale_shipping": null, "status": "DONE_BY_ADMIN", "total_adjusted_price": "7800000.00", "total_price": "7800000.00", "total_price_seller": "0.00", "voucher_type": "VOUCHER"}, {"actual_total_price": "500000000.00", "completed": 1, "customer_paid": "2020-08-09 14:58:30", "nett": "500000000.00", "offer": null, "price": "500000000.00", "ref_number": null, "sale_shipping": null, "status": "DONE_BY_BUYER", "total_adjusted_price": "500000000.00", "total_price": "500000000.00", "total_price_seller": "0.00", "voucher_type": null}, {"actual_total_price": "5000000.00", "completed": 1, "customer_paid": "2020-08-15 14:58:30", "nett": "5000000.00", "offer": null, "price": "5000000.00", "ref_number": null, "sale_shipping": null, "status": "DONE_BY_BUYER", "total_adjusted_price": "5000000.00", "total_price": "5000000.00", "total_price_seller": "0.00", "voucher_type": null}, {"actual_total_price": "4500000.00", "completed": 1, "customer_paid": "2019-11-09 14:58:30", "nett": "4500000.00", "offer": null, "price": "4500000.00", "ref_number": null, "sale_shipping": null, "status": "DONE_BY_BUYER", "total_adjusted_price": "4500000.00", "total_price": "4500000.00", "total_price_seller": "0.00", "voucher_type": null}])
  const rangeTime = useSelector(state => state.ChartReducer.rangeTime)
  // console.log(typeof rangeTime);
  const [thisMonth, setThisMonth] = useState(12)
  
  const labelDate = []
  const dataPrice = []
  const dataFilter = []
  const dataByPrice = []
  const dataByTimeChosen = []
  let currentDate = new Date() // [new Date().getDay(), new Date().getMonth(), new Date().getFullYear()]
  let totalDayInRange = 0
  let [currentYear, currentMonth,  currentDay] = [null, null, null]
  
  useEffect(() => {
    dispatch(FETCH_DATA_SELLING(6))
  }, [])
  
  // if (loading) return <Loading/>
  
  if (typeof rangeTime == 'number') {
    for (let i = 1; i <= 31*rangeTime; i++) { 
      if (rangeTime == 1 && (i % 7 == 0 || i == 1)) dataByTimeChosen.push([i])
      if (rangeTime == 3 && (i % 31 == 0 || i == 1)) dataByTimeChosen.push([i])
      if (rangeTime == 6 && (i % 62 == 0 || i == 1)) dataByTimeChosen.push([i])
      else dataByTimeChosen.push([])
      dataByPrice.push(0)    
    }
  } else {
    for (let i = 1; i <= 31; i++) { 
      if (i % 5 == 0 || i == 1) dataByTimeChosen.push([i])
      else dataByTimeChosen.push([])
      dataByPrice.push(0)    
    }
  }
  // console.log(dataSelling,'<>>>>>>>>>>>>>>>>>asdasdas<<<,');
  dataSelling.length != 0 && dataSelling.map((data_sold) => {
    let [dateSold, timeSold] = data_sold.customer_paid.split(' ')
    let [bestPrice, koma] = data_sold.price.split('.')
    if (bestPrice >= 100000000) bestPrice = bestPrice/50 // hanya untuk dev untuk memperjelas bentuk grafik
    dataFilter.push({price: bestPrice, dateSold})
    dataPrice.push(bestPrice)
    labelDate.push(dateSold)
  })
  
  function calculateDays (date1, date2) {
    dt1 = new Date(date1);
    dt2 = new Date(date2);
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) /(1000 * 60 * 60 * 24));
  }
    
  if (dataFilter.length > 0) {
    if (typeof rangeTime == 'number') {
      currentDate.toLocaleDateString()
      currentDate.setMonth(currentDate.getMonth() - rangeTime)
      totalDayInRange = calculateDays(currentDate, new Date())
      let tempDate = currentDate.toISOString().split('T')
      
      tempDate = tempDate[0].split('-')
      currentYear = tempDate[0]
      currentMonth = tempDate[1]
      currentDay =  tempDate[2]
    } else {
      currentDate.toLocaleDateString()
      currentDate.setMonth(currentDate.getMonth() - (currentDate.getMonth()-1))
      totalDayInRange = calculateDays(currentDate, new Date())
      let tempDate = currentDate.toISOString().split('T')
  
      tempDate = tempDate[0].split('-')
      currentYear = tempDate[0]
      currentMonth = tempDate[1]
      currentDay =  tempDate[2]
    }
    
    for (let i = 0 ; i < dataFilter.length - 1 ; i++) {
      let [year, month,  day] = dataFilter[i].dateSold.split('-')
      if (month == currentMonth && year == currentYear) { 
          dataByPrice[Number(day)] = dataFilter[i].price
        }
    }

  }

  // if (typeof rangeTime == 'number') {
  //   for (let i = 1; i <= 31*rangeTime; i++) { 
  //     if (rangeTime == 1 && (i % 7 == 0 || i == 1)) dataByTimeChosen.push([i])
  //     if (rangeTime == 3 && (i % 31 == 0 || i == 1)) dataByTimeChosen.push([i])
  //     if (rangeTime == 6 && (i % 62 == 0 || i == 1)) dataByTimeChosen.push([i])
  //     else dataByTimeChosen.push([])
  //     dataByPrice.push(0)

  //     if (dataFilter.length > 0) {
  //       for (let j = 0 ; j < dataFilter.length - 1 ; j++) {
  //         let [year, month,  day] = dataFilter[j].dateSold.split('-')
  //         if (month == currentMonth && year == currentYear && day == currentDay) { 
  //           console.log(dataFilter[j].dateSold,  dataFilter[j].price, i);
  //             dataByPrice[i] = dataFilter[j].price/1000
  //           }
  //       }
  //     }
        
  //   }
  // } else {
  //   for (let i = 1; i <= 31; i++) { 
  //     if (i % 5 == 0 || i == 1) dataByTimeChosen.push([i])
  //     else dataByTimeChosen.push([])
  //     dataByPrice.push(0)    
  //   }
  // }


  return (
    <>
      {dataSelling.length > 0 && 
      
        <LineChart
          onDataPointClick={(value)=> console.log('masoud', `price: ${value.value}`, `day: ${value.index}`)}
          data={{
            labels: dataByTimeChosen,
            datasets: [
              {
                data: dataByPrice
              }
            ]
          }}
          width={Dimensions.get("window").width-40} // from react-native
          height={220}
          // withDots = {false}
          yAxisLabel="Rp "
          // yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            decimalPlaces: 0,
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            fillShadowGradient: 'white',
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={{
            marginVertical: 20,
            borderRadius: 16,
          }}
        />
      }
  </>
  )
}

const styles = StyleSheet.create({
  title : {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 20,
    color: 'white'
  },
  subTitle : {
    fontSize: 20,
    color: 'white'
  }
})