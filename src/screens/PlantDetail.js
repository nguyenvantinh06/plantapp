import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

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
      </View>
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