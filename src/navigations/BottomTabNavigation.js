import { View, Text, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Screen
import {Home} from "../screens/index";

//Constant
import {COLORS, icons} from "../constants"

const TabBottom = createBottomTabNavigator();

const tabOptions = {
    showLabel: false,
    style: { 
        height: "10%"
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
                        case "HomeTab":
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
                }
            })}
        
        >
            <TabBottom.Screen 
                name="HomeTab"
                component={Home}
            />

            <TabBottom.Screen 
                name="Box"
                component={Home}
            />

            <TabBottom.Screen 
                name="Camera"
                component={Home}
            />

            <TabBottom.Screen 
                name="Search"
                component={Home}
            />

            <TabBottom.Screen 
                name="Favourite"
                component={Home}
            />

        </TabBottom.Navigator>
    )
}

export default BottomTabNavigation;