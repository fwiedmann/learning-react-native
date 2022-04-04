import React, {PropsWithChildren, useEffect} from "react";
import {FlatList, Image, StyleSheet, View} from "react-native";
import {NavigationScreenProp} from "react-navigation";
import useDetail from "../hooks/useDetail";

export type Probs = {
    imageURLs: string[],
    navigation: NavigationScreenProp<any, any>

}

const ResultShowScreen = (probs: PropsWithChildren<Probs>) => {
    const id = probs.navigation.getParam('id')
    const [detailAPI, result] = useDetail()

    useEffect(() => {
        detailAPI(id)
    }, [])

    return <View style={styles.container}>
        <FlatList data={result.photos}
                  keyExtractor={item => item}
                  renderItem={({item}) => {
                      return <Image style={styles.image} source={{uri: item}}/>
                  }}/>
    </View>;
};

const styles = StyleSheet.create({
    container: {},
    image: {
        width: 250,
        height: 200,
        margin: 10
    }
});

export default ResultShowScreen