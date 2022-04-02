import React, {useState} from "react";
import {StyleSheet, Text, View} from "react-native";
import {SearchComponent} from "../components/searchComponent";
import YelpClient from "../api/yelp";

const SearchScreen = () => {
    const [searchTerm, setSearchTerm] = useState("")
    const [result, setResult] = useState([])


    const searchAPI = async () => {
        try {
            const result = await YelpClient.get('/search',
                {
                    params: {
                        term: searchTerm,
                        location: "Offenburg",
                        
                    }
                });
            setResult(result.data.businesses);
        } catch (e) {
            console.log(e)
        }
    };

    return <View>
        <SearchComponent term={searchTerm} onTermChange={(newTerm: string) => setSearchTerm(newTerm)}
                         onSearchSubmitted={searchAPI}/>
        <Text>{searchTerm}</Text>
        <Text>We have found {result.length} results</Text>
    </View>;
};

const styles = StyleSheet.create({});

export default SearchScreen