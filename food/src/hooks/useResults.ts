import {useEffect, useState} from "react";
import YelpClient from "../api/yelp";
import {BusinessResponse} from "../screens/searchScreen";

export default () => {
    const [result, setResult] = useState([] as BusinessResponse[])
    const searchAPI = async (term: string) => {
        try {
            const result = await YelpClient.get('/search',
                {
                    params: {
                        term: term,
                        location: "Offenburg",

                    }
                });
            setResult(result.data.businesses);
        } catch (e) {
            console.log(e)
        }
    };

    useEffect(() => {
        searchAPI("")
    }, [])

    return [searchAPI, result as BusinessResponse[]] as const
};