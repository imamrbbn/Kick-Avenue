import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Chart, VerticalAxis, HorizontalAxis, Line, Area, Tooltip } from 'react-native-responsive-linechart'

export default function LineChart(props) {
  const dataForChart = props.data
  // const [dataSelling, setDataSelling] = useState([{"actual_total_price": "15700000.00", "completed": 1, "customer_paid": "2018-12-27 18:49:23", "nett": "15700000.00", "offer": null, "price": "15700000.00", "ref_number": null, "sale_shipping": null, "status": "DONE_BY_BUYER", "total_adjusted_price": "15700000.00", "total_price": "15700000.00", "total_price_seller": "0.00", "voucher_type": null}, {"actual_total_price": "8400000.00", "completed": 1, "customer_paid": "2018-12-27 18:50:11", "nett": "8400000.00", "offer": null, "price": "8400000.00", "ref_number": null, "sale_shipping": null, "status": "DONE_BY_BUYER", "total_adjusted_price": "8400000.00", "total_price": "8400000.00", "total_price_seller": "0.00", "voucher_type": null}, {"actual_total_price": "9100000.00", "completed": 1, "customer_paid": "2018-12-21 11:58:05", "nett": "9100000.00", "offer": null, "price": "9100000.00", "ref_number": null, "sale_shipping": null, "status": "DONE_BY_ADMIN", "total_adjusted_price": "9100000.00", "total_price": "9100000.00", "total_price_seller": "0.00", "voucher_type": null}, {"actual_total_price": "7800000.00", "completed": 1, "customer_paid": "2018-12-28 14:41:36", "nett": "7800000.00", "offer": null, "price": "7800000.00", "ref_number": null, "sale_shipping": null, "status": "DONE_BY_ADMIN", "total_adjusted_price": "7800000.00", "total_price": "7800000.00", "total_price_seller": "0.00", "voucher_type": "VOUCHER"}, {"actual_total_price": "500000000.00", "completed": 1, "customer_paid": "2020-08-09 14:58:30", "nett": "500000000.00", "offer": null, "price": "500000000.00", "ref_number": null, "sale_shipping": null, "status": "DONE_BY_BUYER", "total_adjusted_price": "500000000.00", "total_price": "500000000.00", "total_price_seller": "0.00", "voucher_type": null}, {"actual_total_price": "5000000.00", "completed": 1, "customer_paid": "2020-08-15 14:58:30", "nett": "5000000.00", "offer": null, "price": "5000000.00", "ref_number": null, "sale_shipping": null, "status": "DONE_BY_BUYER", "total_adjusted_price": "5000000.00", "total_price": "5000000.00", "total_price_seller": "0.00", "voucher_type": null}, {"actual_total_price": "4500000.00", "completed": 1, "customer_paid": "2019-11-09 14:58:30", "nett": "4500000.00", "offer": null, "price": "4500000.00", "ref_number": null, "sale_shipping": null, "status": "DONE_BY_BUYER", "total_adjusted_price": "4500000.00", "total_price": "4500000.00", "total_price_seller": "0.00", "voucher_type": null}])

  return (
    <>
    {dataForChart &&
    <View>
        <Text style={styles.ylabel}>Price</Text>
          <Chart
            style={{ height: 200, width: '100%', marginTop: 20,  }}
            data={dataForChart}
            padding={{ left: 50, bottom: 20, right: 20, top: 20 }}
            xDomain={{ min: 0, max: dataForChart.length }}
            yDomain={{ min: 0, max: 20000000 }}
            // viewport={{ size: { width: dataForChart.length/2 } }}
          >
            <VerticalAxis
              tickCount={5}
              theme={{
                axis: { stroke: { color: '#2e2e2e', width: 2 } },
                ticks: { stroke: { color: '#2e2e2e', width: 2 } },
                labels: { formatter: ( number) => `${(number/1000).toFixed(0)}k` },
              }}
            />
            <HorizontalAxis
              tickCount={10}
              theme={{
                axis: { stroke: { color: '#2e2e2e', width: 2 } },
                ticks: { stroke: { color: '#2e2e2e', width: 2 } },
                labels: { formatter: Math.round },
              }}
            />
            <Area theme={{ gradient: { from: { color: '#44bd32' }, to: { color: 'white', opacity: 0.6 } }}}/>
          <Line theme={{ stroke: { color: '#159953', width: 1.5 } }} tooltipComponent={
            <Tooltip 
            theme={{  
              label: {
              color: 'white',
              fontSize: 12,
              fontWeight: 700,
              textAnchor: 'middle',
              opacity: 1,
              dx: 50,
              dy: 16.5,
            },
            shape: {
              width: 100,
              height: 20,
              dx: 50,
              dy: 20,
              rx: 4,
              color: '#159953',
              opacity: 0.7,
            },
            formatter: ({ y }) => `Rp ${y.toFixed(0)}` }} />} />
        </Chart>
        <Text style={styles.xlabel}>Date</Text>
      </View>
    }
  </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  ylabel : {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2e2e2e',
    transform: [{ rotate: '-90deg'}],
    zIndex: 3,
    right: 180,
    bottom: 30
  },
  xlabel :{
    fontSize: 15,
    fontWeight: 'bold',
    color: '#2e2e2e',
    textAlign: 'center',
    marginLeft: 20
  }
});

  // const data1 = [
  //   { x: 0, y: 12 },
  //   { x: 1, y: 7 },
  //   { x: 8, y: 12 },
  //   { x: 9, y: 13.5 },
  //   { x: 10, y: 18 },
  //   { x: 11, y: 15 },
  //   { x: 15, y: 10 },
  //   { x: 20, y: 12 },
  //   { x: 31, y: 7 },
  //   { x: 48, y: 12 },
  //   { x: 69, y: 13.5 },
  //   { x: 80, y: 18 }
  // ]
