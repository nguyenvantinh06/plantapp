import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation} from "@react-navigation/native";
//Constant
import {images, COLORS, SIZES, FONTS, icons} from "../../src/constants";

//Screen
import {BannerPhotoComponent} from "./components";

const RequirementBar = (props) => {
  const {icon, barPercentage} = props
  return (
    <View style={{height: 60, alignItems: "center"}}>
      <View 
        style={{
          width: 50, 
          height: 50, 
          alignItems: "center", 
          justifyContent:"center", 
          borderWidth:1, 
          borderRadius: 10, 
          borderColor: COLORS.gray
        }}
        >
        <Image 
          source={icon}
          resizeMode="cover"
          style={{
            tintColor: COLORS.secondary,
            width: 30,
            height: 30
          }}
        />
      </View>
      {/* Bar */}
      <View style={{
        position:"absolute",
        bottom: 0,
        left: 0,
        width: "100%", 
        backgroundColor: COLORS.gray,
        height: 3,
        marginTop: SIZES.base
      }}>
      </View>
      <View style={{
        position:"absolute",
        bottom: 0,
        left: 0,
        width: barPercentage, 
        backgroundColor: COLORS.primary,
        height: 3,
        marginTop: SIZES.base
      }}>
      </View>
    </View>
  )
}

const RequirementDetail = (props) => {
  const {icon, label, detail} = props
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={icon}
          resizeMode="cover"
          style={{
            tintColor: COLORS.secondary,
            width: 30,
            height: 30
          }}
        />
        <Text style={{ marginLeft: SIZES.base, color: COLORS.secondary, ...FONTS.h2 }}>{label}</Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Text style={{ marginLeft: SIZES.base, color: COLORS.gray, ...FONTS.h2 }}>{detail}</Text>
      </View>
    </View>
  )
}

const PlantDetail = () => {
  const navigation = useNavigation();
  //Render
  function renderRequirementsBar() {
    return (
      <View style={styles.requirementBarContain}>
        <RequirementBar 
          icon={icons.sun}
          barPercentage="50%"
        />
        <RequirementBar 
          icon={icons.drop}
          barPercentage="25%"
        />
        <RequirementBar 
          icon={icons.temperature}
          barPercentage="80%"
        />
        <RequirementBar 
          icon={icons.garden}
          barPercentage="30%"
        />
        <RequirementBar 
          icon={icons.seed}
          barPercentage="50%"
        />
      </View>
    )
  }

  function renderRequirements(){
    return (
      <View style={styles.requirementRenderContainer}>
        <RequirementDetail 
          icon={icons.sun}
          label="Sun-light"
          detail="15°C"
        />
        <RequirementDetail 
          icon={icons.drop}
          label="Water"
          detail="250 ML Daily"
        />
        <RequirementDetail 
          icon={icons.temperature}
          label="Room Temp"
          detail="25°C"
        />
        <RequirementDetail 
          icon={icons.garden}
          label="Soil"
          detail="3 Kg"
        />
        <RequirementDetail 
          icon={icons.seed}
          label="Fertilizer"
          detail="150 Mg"
        />
      </View>
    )
  }

  function renderFooter() {
    return (
      <View style={{flex:1, flexDirection: "row", paddingVertical: SIZES.base }}>
        <TouchableOpacity 
          style={{
            flex:1,
            flexDirection: "row",
            paddingHorizontal: SIZES.padding,
            alignItems: "center",
            justifyContent: "center",
            borderTopRightRadius: 30,
            borderBottomRightRadius: 30,
            backgroundColor: COLORS.primary
          }}
          onPress={() => { console.log("Take Action Pressed")}}
          > 
          <Text style={{color: COLORS.white, ...FONTS.h2}}>Take Action</Text>
          <Image 
            source={icons.chevron}
            resizeMode="contain"
            style={{width:20, height: 20, marginLeft: SIZES.padding}}
          />
        </TouchableOpacity>
        <View style={{flex:1, flexDirection: "row", alignItems: "center", justifyContent:"center", paddingHorizontal: SIZES.padding}}>
          <Text style={{color: COLORS.gray}}>Almost 2 weeks of growing time</Text>
          <Image 
            source={icons.downArrow}
            resizeMode="contain"
            style={{width:20, height: 20, tintColor:COLORS.gray, marginLeft: SIZES.base}}
          />
        </View>
      </View>
    )
  }

  function renderHeader() {
    return (
      <View 
        style={{
          position:"absolute",
          top: 50,
          left: SIZES.padding,
          right: SIZES.padding
        }}>
        <View style={{flexDirection:"row"}}>
          <View style={{flex:1}}>
            <TouchableOpacity 
              style={{
                width:40,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                backgroundColor: 'rgba(255,255,255,0.5)'
              }}
              onPress={() => { navigation.navigate("Home") }}
              >
              <Image
                source={icons.back}
                resizeMode="contain"
                style={{
                  width: 20,
                  height: 20
                }}
              />
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}
            onPress={() => { console.log("Focus on pressed") }}
          >
            <Image
              source={icons.focus}
              resizeMode="contain"
              style={{
                width: 25,
                height: 25
              }}
            />
          </TouchableOpacity>

        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      {/* Banner Photo */}
      <View style={{height: "35%"}}>
        <BannerPhotoComponent />
      </View>

      {/* Requirements */}
      <View style={styles.requirementContainer}>
        <Text style={{paddingHorizontal: SIZES.padding, color: COLORS.secondary, ...FONTS.h2}}>Requirements</Text>
        {renderRequirementsBar()}
        {renderRequirements()}
        {renderFooter()}
      </View>
      {renderHeader()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  requirementContainer: {
    flex:1,
    marginTop: -40,
    backgroundColor: COLORS.lightGray,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingVertical: SIZES.padding,
  },
  requirementBarContain: { 
    flexDirection: "row",
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding, 
    justifyContent: "space-between"
  },
  requirementRenderContainer: {
    flex: 2.5,
    marginTop: SIZES.padding,
    paddingHorizontal: SIZES.padding,
    justifyContent: "space-around"
  }
})

export default PlantDetail;