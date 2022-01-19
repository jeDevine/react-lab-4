import React, { useEffect, useState } from 'react';
import { Giphy, GiphyModel } from '../models/giphy';
import { fetchAllData, fetchSearchData } from '../services/giphyCall';

interface Prop {
   resData: Giphy[];
}

const ResultsList = ({resData}: Prop) => {
    console.log(resData);
    


    return (
        <div className="layout">
            {resData.map((gif, i) => 
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