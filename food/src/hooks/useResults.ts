import {useEffect, useState} from "react";
import YelpClient from "../api/yelp";

export default () => {
    const [result, setResult] = useState([])
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
        searchAPI("pizza")
    }, [])

    return [searchAPI, result as any[]] as const
};