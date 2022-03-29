import React from "react";
import { StyleSheet, Text, View, Image} from "react-native";


const ImageDetail = ({title, imageSource, rating}) => {
    return <View style={styles.box}>
        <Image style={styles.image} source={imageSource}/>
        <Text>{title} with rating {rating}</Text>
    </View>


};


const styles = StyleSheet.create({
    box: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        marginBottom: 10,
        alignItems: "center"
    },
    image: {
        marginRight: 20,
    }
});

export default ImageDetail;