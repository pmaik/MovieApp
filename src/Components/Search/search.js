import React from "react";

const SearchBox = (props) => {
    return(
        <input className="search" onChange={props.handleChange} type="text" name='search'  placeholder="Search Movie.." />
    );
}

export default SearchBox;