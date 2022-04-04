import React, {PropsWithChildren} from "react";
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {BusinessResponse} from "../screens/searchScreen";
import {ResultDetail} from "./ResultDetail";
import {NavigationScreenProp, withNavigation} from "react-navigation";


export interface Probs {
    title: string,
    businesses: BusinessResponse[],
    navigation: NavigationScreenProp<any, any>
}

export const ResultList = withNavigation((probs: PropsWithChildren<Probs>) => {

    if (!probs.businesses.length) {
        return null
    }

    return <View style={styles.container}>
        <Text style={styles.title}>{probs.title}</Text>
        <FlatList data={probs.businesses}
                  keyExtractor={item => item.id}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => {
                      return <TouchableOpacity
                          onPress={() => {
                              probs.navigation.navigate('ResultShow', {id: item.id})
                          }}>
                          <ResultDetail business={item}/>
                      </TouchableOpacity>;
                  }}
        />
    </View>;
});

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 15,
        marginBottom: 5
    },
    container: {
        marginBottom: 10
    }
});