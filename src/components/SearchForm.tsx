import React, { FormEvent, useState } from 'react';

interface Prop {
    onSubmit(search: string): void;
}

const SearchForm = ({onSubmit}: Prop) => {
    const [search, setSearch] = useState("");

    const handleSubmit = (e:FormEvent) => {
        console.log(search)
        e.preventDefault();

        onSubmit(search);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="search" value={search} onChange={e => setSearch(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SearchForm;