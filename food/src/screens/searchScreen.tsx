import React, {useState} from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import {SearchComponent} from "../components/searchComponent";
import useResults from "../hooks/useResults";
import {ResultList} from "../components/ResultList";

export type BusinessResponse = {
    price: string,
    rating: string
    id: string,
    name: string
    image_url: string,
    review_count: number
}


const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchAPI, result] = useResults()


    const filterResultsByPrice = (price: string): BusinessResponse[] => {
        return result.filter(value => value.price === price)
    };

    return <View style={styles.container}>
        <SearchComponent term={searchTerm}
                         onTermChange={setSearchTerm}
                         onSearchSubmitted={() => {
                             searchAPI(searchTerm)
                         }}/>
        <ScrollView showsVerticalScrollIndicator={false}>
            <ResultList title="Cost Effective" businesses={filterResultsByPrice('€')}/>
            <ResultList title="Bit Pricier" businesses={filterResultsByPrice('€€')}/>
            <ResultList title="Big Spender" businesses={filterResultsByPrice('€€€')}/>
        </ScrollView>
    </View>;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        flex: 1
    }
});

export default SearchScreen