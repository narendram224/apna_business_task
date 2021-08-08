import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SearchOutline } from 'react-ionicons'
import { fetchSerchQueryData } from '../../redux/search/searchAction';
import './SearchInput.css'

const SearchInput = ({name,placeholder,value,onChange}) => {
    const dispatch = useDispatch();
    const initialstate = useSelector((state)=>state.search)
    const inputVal = initialstate.searchQuery;
    const handleInputChange =(e)=>{
        e.preventDefault();
        dispatch(fetchSerchQueryData(e.target.value))
    }
    return (
        <div className="search_input">
 
<div className="input_container">
  <input type="text" name={name} value={inputVal} placeholder={placeholder} onChange={handleInputChange}  />

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
