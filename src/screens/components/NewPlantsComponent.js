import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native'
import React, {useState} from 'react'

//Constant
import {COLORS, SIZES, icons, FONTS, images} from "../../constants";

const NewPlantsComponent = () => {
  // Dummy Data
  const [newPlants, setNewPlants] = useState([
    {
        id: 0,
        name: "Plant 1",
        img: images.plant1,
        favourite: false,
    },
    {
        id: 1,
        name: "Plant 2",
        img: images.plant2,
        favourite: true,
    },
    {
        id: 2,
        name: "Plant 3",
        img: images.plant3,
        favourite: false,
    },
    {
        id: 3,
        name: "Plant 4",
        img: images.plant4,
        favourite: false,
    },
]);
  //Render
  function renderNewPlants(item, index) {
    return (
      <View style={{alignItems: "center", justifyContent: "center", marginHorizontal: SIZES.base }}>
        <Image 
          source={item.img}
          resizeMode="contain"
          style={{
            width:SIZES.width * 0.23,
            height: "82%", 
            borderRadius: 15
          }}
        />
        <View style={{
          position:"absolute",
          bottom: "17%",
          right:0,
          backgroundColor: COLORS.primary,
          paddingHorizontal: SIZES.base,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
        }}>
          <Text style={{color: COLORS.white, ...FONTS.body4}}>{item.name}</Text>
        </View>

        <TouchableOpacity style={{
          position:"absolute",
          top: "15%",
          left: 18,
        }}
        onPress={() => { console.log("Focus on pressed") }}
        >
          <Image 
            source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
            resizeMode="contain"
            style={{
              width: 20, height: 20
            }}
          />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={{marginTop: SIZES.padding * 2, marginHorizontal: SIZES.base, justifyContent:"center"}}>

        <View style={{flexDirection: "row", alignItems:"center", justifyContent:"space-between" }}>
          <Text style={{color: COLORS.white, ...FONTS.h2}}>New Plants</Text>
          <TouchableOpacity onPress={() => {console.log("Focus on pressed")}}>
            <Image 
              source={icons.focus} 
              resizeMode="contain"
              style={{width:20, height:20}}
            />
          </TouchableOpacity>
        </View>  

        <View style={{marginTop: SIZES.base}} >
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={newPlants}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item, index }) => renderNewPlants(item, index)}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        backgroundColor: COLORS.primary
    }
})

export default NewPlantsComponent