import React from 'react';
import'./Search.css';

const SearchBox = ({searchChange}) => {
    return(
        <div className= 'search-container'>
            <input 
                className = 'search-input'
                type='search' 
                placeholder= 'search robots' 
                onChange = {searchChange}
            />
        </div>
    );
}

export default SearchBox;