import React from "react";
import { StyleSheet, View } from "react-native";
import ImageDetail from '../components/imageDetail'


const imageScreen = () => {
    return <View>
        <ImageDetail title="Forest" rating="3" imageSource={require('../../assets/forest.jpg')}/>
        <ImageDetail title="Beach" rating="3" imageSource={require('../../assets/beach.jpg')}/>
        <ImageDetail title="Mountain"  rating="3"imageSource={require('../../assets/mountain.jpg')}/>
    </View>
};


const styles = StyleSheet.create({});

export default imageScreen;