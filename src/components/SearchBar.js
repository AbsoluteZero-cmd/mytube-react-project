import React, { useState } from 'react';

const SearchBar = () => {
    const [term, setTerm] = useState('');

    const onInputChange = (event) => {
        setTerm(event.target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchSubmit(term);
    };

    return (
        <div className='search-bar ui segment'>
            <form className='ui form' onSubmit={(event) => onFormSubmit(event)}>
                <div className='field'>
                    <label>Video Search</label>
                    <input
                        value={term}
                        type='text'
                        onChange={(event) => onInputChange(event)}
                    />
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
