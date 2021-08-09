import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SearchOutline } from 'react-ionicons'
import { fetchSerchQueryData } from '../../redux/search/searchAction';
import './SearchInput.css'
import { useEffect } from 'react';

const SearchInput = ({ name, placeholder }) => {
    const dispatch = useDispatch(); //get redux dispatch method
    const initialstate = useSelector((state) => state.search) //get search field initialData
    const inputVal = initialstate.searchQuery; //get query data
    const inputref = useRef() //making ref for dom 
    useEffect(() => {
        //  for focus on search field
        inputref.current.focus();
    }, [])
    // handle change the input field
    const handleInputChange = (e) => {
        e.preventDefault();
        dispatch(fetchSerchQueryData(e.target.value))
    }
    return (
        <div className="search_input">

            <div className="input_container">
                <input type="text" ref={inputref} name={name} value={inputVal} placeholder={placeholder} onChange={handleInputChange} />
                <SearchOutline
                    color={'#ff9500'}
                    cssClasses="icon"
                    height="30px"
                    width="30px"
                />
            </div>

        </div>
    )
}

export default SearchInput
