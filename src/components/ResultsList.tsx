import React, { useEffect, useState } from 'react';
import { Giphy, GiphyModel } from '../models/giphy';
import { fetchAllData, fetchSearchData } from '../services/giphyCall';

interface Prop {
    search: string;
}

const ResultsList = ({search}: Prop) => {
    const [allData, setAllData] = useState<Giphy[]>([]);

    useEffect(()=>{
        console.log("in useEFF"+search);
       if(search===""){
           fetchAllData().then(data => setAllData(data));
       } else {
           fetchSearchData(search).then(data => setAllData(data));
       }
       
    },[]);


    return (
        <div className="layout">
            {allData.map((gif, i) => 
            <div className="singleGif">
                <h3>Results</h3>
                <h4>{gif.title}</h4>
                <img src={gif.images.original.url} alt="" />
                <a href={gif.url}>Link to Giphy</a>

            </div>
            )}
        </div>
    )
}

export default ResultsList;