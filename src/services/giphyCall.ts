import React from 'react';
import axios from 'axios';
import { Giphy } from '../models/giphy';

//show all
export const fetchAllData = ():Promise<Giphy[]> => {
    return axios.get("https://api.giphy.com/v1/gifs/trending?api_key=7AAz2WSu4qEI85ya7f8rlnnHokLsDk6f&limit=25")
    .then(res => res.data.data)
}

//search param will be input value of SearchForm
export const fetchSearchData = (search: string) => {
    console.log(search);
    return axios.get("https://api.giphy.com/v1/gifs/search", {
        params: {
            api_key: "7AAz2WSu4qEI85ya7f8rlnnHokLsDk6f",
            q: search
        }
    }).then(res => res.data.data);
}
