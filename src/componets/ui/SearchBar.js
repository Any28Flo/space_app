import React from 'react';

const SearchBar = () =>{
    return(
        <div className="pt-2 relative mx-auto text-gray-600">
            <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password" type="password" placeholder="try"/>
        </div>
    )
}
export default SearchBar