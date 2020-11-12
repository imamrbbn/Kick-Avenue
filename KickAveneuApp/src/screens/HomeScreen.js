import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import ButtonsRangeTime from '../components/ButtonsRangeTime'
import LineChart from '../components/LineChart' 
import { FETCH_DATA_SELLING } from '../store/actions/ChartAction'

const {calculateDays} = require('../hooks/calculateDays')

export default function HomeScreen({ navigation }) {
  const dispatch = useDispatch()
  const idProduct = useSelector(state => state.ChartReducer.chosenProduct)
  const rangeTime = useSelector(state => state.ChartReducer.rangeTime)
  const dataSelling = useSelector(state => state.ChartReducer.dataSelling)

  let dataForChart = []
  let totalDifferentDays = 0

  useEffect(() => {
    dispatch(FETCH_DATA_SELLING(6))
  }, [])

  if (dataSelling) {
    if(rangeTime == "ALL") {
      totalDifferentDays = calculateDays(dataSelling[0].date, dataSelling[dataSelling.length-1].date)  
    } else {
      let date = new Date();
      let month = date.getMonth();
      date.setMonth(date.getMonth() - rangeTime);
      if (date.getMonth() == month) date.setDate(0);
      date.setHours(0, 0, 0);
      date.setMilliseconds(0);
      totalDifferentDays = calculateDays(date, new Date())
    }
    
  if (rangeTime == 'ALL') {  

      for (let i = 0; i < totalDifferentDays ; i++) {
        dataForChart.push({ x: i+1, y: 0 })
      }

      for (let j = 0; j < dataSelling.length; j++) {
        if (j == dataSelling.length-1) {
          let index = calculateDays(dataSelling[0].date, dataSelling[j].date)
          dataForChart[index-1]['y'] = Number(dataSelling[j].price)
        } else {
          let index = calculateDays(dataSelling[0].date, dataSelling[j].date)
          if (Number(dataForChart[index]['y']) <= Number(dataSelling[j].price)) {
            dataForChart[index]['y'] = Number(dataSelling[j].price)
          }
        }
      }

    } else {

      for (let i = totalDifferentDays; i > 0 ; i--) {
        dataForChart.push({ x: totalDifferentDays-i, y: 0 })
      }

      for (let j = 0; j < dataSelling.length; j++) {
        let index = calculateDays(dataSelling[j].date, new Date())
        if ( index <= totalDifferentDays) {
          index = totalDifferentDays - index
          if (j == dataSelling.length-1) {
            dataForChart[index]['y'] = Number(dataSelling[j].price)
          } else {
            if (Number(dataForChart[index]['y']) <= Number(dataSelling[j].price)) {
              dataForChart[index]['y'] = Number(dataSelling[j].price)
            }
          }
        }
      }

    }
  }

  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.title}>Latest Sales (id: {idProduct})</Text>

        <ButtonsRangeTime rangeTime={rangeTime}/>

        <View style={styles.chartContent}>
          {dataSelling && <LineChart data={dataForChart}/>}
        </View>
          <View style={styles.chartContent}>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  title : {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 40,
    color: 'black',
    marginHorizontal: 20
  },
  button :{
    width: 70,
    borderWidth: 0,
    borderRadius: 50
  },
  groupButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30
  },
  separator: {
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  chartContent: {
    marginVertical: 30,
    marginHorizontal: 20,
  },
});





// export default function HomeScreen() {

//   function handleChangeRange(rangeTime) {
//     console.log(rangeTime,'aaaa');
//   }

//   return (
//     <>
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <WaveBackground/>
         
//           <View style={styles.chartContent}>
//             {/* <ChartSelling/> */}
//             </View>
//             </ScrollView>
//               <Button
//               title="Press me"
//               onPress={() => Alert.alert('Simple Button pressed')}
//               color="#31326f"/>
//           </SafeAreaView>
//         </>
//       )
//     }
    
//     const styles = StyleSheet.create({
//       scrollView: {
//         backgroundColor: 'white',
//       },
//       engine: {
//         position: 'absolute',
//         right: 0,
//       },
//       body: {
//         backgroundColor: 'transparent',
//       },
//       chartContent: {
//         marginVertical: 30,
//         marginHorizontal: 20,
//       },
//       sectionTitle: {
//         fontSize: 24,
//         fontWeight: '600',
//         color: Colors.black,
//       },
//       sectionDescription: {
//         marginTop: 8,
//         fontSize: 18,
//         fontWeight: '400',
//         color: Colors.dark,
//       },
//       highlight: {
//         fontWeight: '700',
//       },
//       footer: {
//         color: Colors.dark,
//         fontSize: 12,
//         fontWeight: '600',
//         padding: 4,
//         paddingRight: 12,
//         textAlign: 'right',
//       },
//       content: {
//         marginTop: 20,
//         marginBottom: 10,
//       }
//     });
