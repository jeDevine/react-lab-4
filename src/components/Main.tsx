import React, { useEffect, useState } from 'react';
import { Giphy } from '../models/giphy';
import { fetchSearchData } from '../services/giphyCall';
import ResultsList from './ResultsList';
import SearchForm from './SearchForm';

const Main = () => {
    const [resData, setResData] = useState<Giphy[]>([]);
    const [search, setSearch] = useState("")


    const handleSearchForm = (search: string) => {
        console.log(search);
        setSearch(search);
    }

    return (
        <div>
            <div><SearchForm onSubmit={handleSearchForm}/></div>
            <div><ResultsList search={search}/></div>
        </div>
    )
}

export default Main;