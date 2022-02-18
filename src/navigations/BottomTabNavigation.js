import { View, Text, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screen
import {Home, SearchScreen, BoxScreen, FavouriteScreen, CameraScreen} from "../screens/index";

//Constant
import {COLORS, icons} from "../constants"

const TabBottom = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: { 
        height: "20%"
    }
}

const CameraButton = () => {
    return (
        <View
            style={{
                alignItems:"center", 
                justifyContent: "center", 
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: COLORS.primary
            }}
        >
            <Image 
                source={icons.camera}
                resizeMode="contain"
                style={{
                    width:23,
                    height: 23,
                }}
            />
        </View>
    )
}
const BottomTabNavigation = () => {
    return (
        <TabBottom.Navigator
            tabBarOptions={tabOptions}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused}) => {
                    const tintColor = focused ? COLORS.primary : COLORS.grey;

                    switch (route.name) {
                        case "Home":
                            return (
                                <Image
                                    source={icons.flash}
                                    resizeMode="contain"
                                    style={{ 
                                        tintColor:tintColor,
                                        width: 25,
                                        height: 25
                                    }}  
                                />
                            )
                        case "Box":
                            return (
                                <Image
                                    source={icons.cube}
                                    resizeMode="contain"
                                    style={{ 
                                        tintColor:tintColor,
                                        width: 25,
                                        height: 25
                                    }}  
                                />
                            )
                        case "Camera":
                            return (
                                <CameraButton />
                            )
                        case "Search":
                            return (
                                <Image
                                    source={icons.search}
                                    resizeMode="contain"
                                    style={{ 
                                        tintColor:tintColor,
                                        width: 25,
                                        height: 25
                                    }}  
                                />
                            )
                        case "Favourite":
                            return (
                                <Image
                                    source={icons.heart}
                                    resizeMode="contain"
                                    style={{ 
                                        tintColor:tintColor,
                                        width: 25,
                                        height: 25
                                    }}  
                                />
                            )
                    }
                },
                headerShown: false
            })}
        
        >
            <TabBottom.Screen 
                name="Home"
                component={Home}
                
            />

            <TabBottom.Screen 
                name="Box"
                component={BoxScreen}
            />

            <TabBottom.Screen 
                name="Camera"
                component={CameraScreen}
            />

            <TabBottom.Screen 
                name="Search"
                component={SearchScreen}
            />

            <TabBottom.Screen 
                name="Favourite"
                component={FavouriteScreen}
            />

        </TabBottom.Navigator>
    )
}

export default BottomTabNavigation;