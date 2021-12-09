import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <div className="search-wrapper">
            <div className="search-box">
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <input type="text" placeholder="Avtomobil brendi,model,məhsul kodu" className="search-input w-75" />
                </div>
            </div>
        </div>
    )
}

export default Search
