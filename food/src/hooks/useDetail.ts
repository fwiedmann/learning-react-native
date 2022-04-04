import {useState} from "react";
import YelpClient from "../api/yelp";

export type Business = {
    photos: string[]
}

export default () => {
    const [result, setResult] = useState({} as Business)
    const businessAPI = async (id: string) => {
        try {
            const result = await YelpClient.get(`/${id}`,
                {
                    params: {}
                })
            setResult(result.data);
        } catch (e) {
            console.log(e)
        }
    };

    return [businessAPI, result] as const
};