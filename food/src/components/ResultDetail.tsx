import React, {PropsWithChildren} from "react";
import {Image, StyleSheet, Text, View} from "react-native";
import {BusinessResponse} from "../screens/searchScreen";


export interface Probs {
    business: BusinessResponse,
}

export const ResultDetail = (probs: PropsWithChildren<Probs>) => {
    return <View style={styles.container}>
        <Image style={styles.image} source={{uri: probs.business.image_url || undefined}}/>
        <Text style={styles.name}>{probs.business.name}</Text>
        <Text>{probs.business.rating} Stars, {probs.business.review_count} Reviews</Text>
    </View>
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 5,
        marginBottom: 5
    },
    name: {
        fontWeight: "bold",
    },
    container: {
        marginLeft: 15
    }
});