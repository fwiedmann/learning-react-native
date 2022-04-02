import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {SearchComponent} from "../components/searchComponent";
import useResults from "../hooks/useResults";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchAPI, result] = useResults()

    return <View>
        <SearchComponent term={searchTerm}
                         onTermChange={setSearchTerm}
                         onSearchSubmitted={() => {
                             searchAPI(searchTerm)
                         }}/>
        <Text>{searchTerm}</Text>
        <Text>We have found {result.length} results</Text>
    </View>;
};

const styles = StyleSheet.create({});

export default SearchScreen