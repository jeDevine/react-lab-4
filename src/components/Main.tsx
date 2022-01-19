import React, { useEffect, useState } from 'react';
import { Giphy } from '../models/giphy';
import { fetchAllData, fetchSearchData } from '../services/giphyCall';
import ResultsList from './ResultsList';
import SearchForm from './SearchForm';

const Main = () => {
    const [resData, setResData] = useState<Giphy[]>([]);
    const [search, setSearch] = useState("")

    useEffect(()=>{
        console.log("b4 useEFF" + search)
        if(search===""){
           console.log("search is empty"+search);
           fetchAllData().then(data => setResData(data));
        } else {
           console.log("search is populated"+search);
           fetchSearchData(search).then(data => setResData(data));
       }
       
    },[]);


    const handleSearchForm = (searchTerm: string) => {
        console.log("searchTerm" +searchTerm);
        setSearch(searchTerm);
    }

    return (
        <div>
            <div><SearchForm onSubmit={handleSearchForm}/></div>
            <div><ResultsList resData={resData}/></div>
        </div>
    )
}

export default Main;