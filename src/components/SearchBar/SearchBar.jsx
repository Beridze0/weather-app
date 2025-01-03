import React, { useEffect, useState } from 'react'
import './SearchBar.css'
import { FiSearch } from "react-icons/fi";
import { MdDarkMode } from "react-icons/md";

const SearchBar = () => {

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('dark-mode') || 'false'))

    const handleDarkMode = () =>{
        setDarkMode(prev => !prev)
    }


    useEffect(() => {
        document.querySelector('body').setAttribute('data-theme', darkMode ? 'dark' : 'light');
        localStorage.setItem('dark-mode', JSON.stringify(darkMode))
    }, [darkMode]);

  return (
    <div className='search-bar'>
        <div className='search-bar-current-location'>
            <h1>London, United Kingdom</h1>
        </div>
        <div className='search-bar-search'>
            <div className='search-bar-search-input-container'>
                <input type="text" placeholder='Enter city name' className='search-bar-search-input' />
                <FiSearch />
            </div>
        </div>
        <div className='search-bar-dark-mode'>
            <MdDarkMode onClick={handleDarkMode} size={20} />
        </div>
    </div>
  )
}

export default SearchBar