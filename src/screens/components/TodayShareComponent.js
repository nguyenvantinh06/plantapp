import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';

//Const
import {COLORS, FONTS, images, SIZES} from '../../constants';

//Content Image Render Function
const ContentImage = (props) => {
  const {source, style} = props;
  return (
    <TouchableOpacity style={style} onPress={() => { console.log("Pressed Image")}}>
      <Image 
        source={source}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
          borderRadius: 20,
        }}
      />
    </TouchableOpacity>
  )
}


const TodayShareComponent = () => {
  return (
    <View style={styles.container}>
      {/* Content Text */}
      <View style={{marginTop: SIZES.font, marginHorizontal: SIZES.padding}}>
        <View style={{flexDirection: "row", justifyContent:"space-between", alignItems: "center"}}>
          <Text style={{color: COLORS.secondary, ...FONTS.h2}}>Today's Share</Text>
          <TouchableOpacity onPress={() => { console.log("See All pressed") }}>
            <Text style={{color: COLORS.secondary, ...FONTS.body3}}>See All</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Render Content Image */}
      <View style={{flexDirection: "row", height: "88%", padding: SIZES.base}}>
        <View style={{flex:1}}>
          <ContentImage source={images.plant5} style={{flex:1}} />
          <ContentImage source={images.plant6} style={{flex:1, marginTop: SIZES.base}} />
        </View>

        <View style={{flex:1.3, paddingLeft: SIZES.base}}>
          <ContentImage source={images.plant7} style={{flex:1}} />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50
  }
})
export default TodayShareComponent