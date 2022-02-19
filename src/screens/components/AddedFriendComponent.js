import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';

//Constant
import {COLORS, images, FONTS, SIZES, icons} from '../../constants';

const AddedFriendComponent = () => {
  //Data FriendList
  const [friendList, setFriendList] = useState([
    {
      id: 0,
      img: images.profile1,
    },
    {
      id: 1,
      img: images.profile2,
    },
    {
      id: 2,
      img: images.profile3,
    },
    {
      id: 3,
      img: images.profile4,
    },
    {
      id: 4,
      img: images.profile5,
    }
  ]);

  //Component Render Friend List
  function renderFriendListComponent() {
    if (friendList.length == 0) {
      return (
        <View>

        </View>
      )
    }
    else if (friendList.length <= 3 ){
      return (
        friendList.map((item, index) => (
          <View 
            key={`friend-${index}`}
            style={index == 0 ? {} : {marginLeft: -20}}
          >
            <Image 
              source={item.img}
              resizeMode="cover"
              style={{
                width: 50, 
                height: 50, 
                borderRadius: 25, 
                borderWidth: 3,
                borderColor: COLORS.primary
              }}
            />
          </View>
        ))
      )
    }
    else {
      return (
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {friendList.map((item, index) => {
            if (index <= 2) {
              return (
                <View
                  key={`friend-${index}`}
                  style={index == 0 ? {} : { marginLeft: -20 }}
                >
                  <Image
                    source={item.img}
                    resizeMode="cover"
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 25,
                      borderWidth: 3,
                      borderColor: COLORS.primary
                    }}
                  />
                </View>
              )
            }
          })}
          <Text style={{ marginLeft: 5, color: COLORS.secondary, ...FONTS.body3 }}>+{friendList.length - 3} More</Text>
      </View>
      )
    }
  }

  
  return (
    <View style={styles.container}>
      
      <View style={{marginVertical: SIZES.radius, marginHorizontal: SIZES.padding}} >
        {/* Content Text */}
        <Text style={{color: COLORS.secondary, ...FONTS.h2}}>Added Friends</Text>
        <Text style={{color: COLORS.secondary, ...FONTS.body3}}>5 Total</Text>
        
        <View style={{flexDirection: "row", height: "60%"}}>
          {/* Friends */}
          <View style={{flex:1.3, flexDirection: "row", alignItems: "center"}}>
            {renderFriendListComponent()}
          </View>

          {/* Add Friends */}
          <View style={{flex:1, flexDirection: "row", alignItems: "center", justifyContent:"flex-end"}}>
            <Text style={{color:COLORS.secondary, ...FONTS.body3}}>Add New</Text>
            <TouchableOpacity style={styles.addFriendButton} onPress={()=>{console.log("Add Friend Button Pressed")}}>
              <Image 
                source={icons.plus}
                resizeMode="contain"
                style={{
                  width: 20, 
                  height: 20,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: COLORS.lightGray,
  },
  addFriendButton: { 
    marginLeft: SIZES.base,
    backgroundColor: COLORS.gray, 
    borderRadius: 10, 
    width: 40, 
    height: 40,
    justifyContent:"center", 
    alignItems: "center",
  }
})
export default AddedFriendComponent