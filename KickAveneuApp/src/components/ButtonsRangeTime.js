import React from 'react'
import { StyleSheet, Button, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { SET_RANGE_TIME } from '../store/actions/ChartAction'

export default function ButtonsRangeTime(props) {
  const dispatch = useDispatch()
  const rangeTime = props.rangeTime
  let buttonColor
  return (
    <View style={styles.groupButton}>
          <View style={styles.button}>
              <Button
                title="1 M"
                color={rangeTime == 1 ? buttonColor = '#2e2e2e' : buttonColor = '#159953'}
                onPress={() => dispatch(SET_RANGE_TIME(1))}
              />
          </View>
          <View style={{ width: 70}}>
            <Button
              title="3 M"
              color={rangeTime == 3 ? buttonColor = '#2e2e2e' : buttonColor = '#159953'}
              onPress={() => dispatch(SET_RANGE_TIME(3))}
            />
          </View>
          <View style={{ width: 70}}>
            <Button
              title="6 M"
              color={rangeTime == 6 ? buttonColor = '#2e2e2e' : buttonColor = '#159953'}
              onPress={() => dispatch(SET_RANGE_TIME(6))}
            />
          </View>
          <View style={{ width: 70}}>
            <Button
              title="ALL"
              color={rangeTime == 'ALL' ? buttonColor = '#2e2e2e' : buttonColor = '#159953'}
              onPress={() => dispatch(SET_RANGE_TIME('ALL'))}
            />
          </View>
        </View>
  )
}

const styles = StyleSheet.create({
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
  }
});
