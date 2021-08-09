import React from 'react'
import NavBarBrand from '../atoms/NavBarBrand'
import SearchInput from '../atoms/SearchInput'
import './NavBar.css'
const staticInputData ={
    placeholder:"Search for item",
    name:"search"

}

const NavBar = () => {
    return (
        <div className="navbar">
            <NavBarBrand />
            <SearchInput  {...staticInputData} />
        </div>
    )
}

export default NavBar
