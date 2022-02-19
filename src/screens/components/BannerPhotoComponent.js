import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

import {images} from "../../../src/constants";

const BannerPhotoComponent = () => {
    return (
        <View>
            <Image 
                source={images.bannerBg}
                resizeMode="cover"
                style={{
                    width: "100%",
                    height: "100%",
                }}
            />
        </View>
    )
}

export default BannerPhotoComponent