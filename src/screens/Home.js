import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

//Constant
import {COLORS} from '../constants';

//Add Components
import { NewPlantsComponent, TodayShareComponent, AddedFriendComponent } from './components';
const Home = () => {
  return (
    <View style={styles.container}>

      {/* New Plants */}
      <View style={{height: "30%", backgroundColor: COLORS.white}} >
        <NewPlantsComponent />
      </View>

      {/* TodayShareComponent */}
      <View style={{height: "50%", backgroundColor: COLORS.lightGray}} >
        <TodayShareComponent />
      </View>

      {/* AddedFriendComponent */}
      <View style={{height: "20%", backgroundColor: COLORS.lightGray}} >
        <AddedFriendComponent />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1
  }
})

export default Home;