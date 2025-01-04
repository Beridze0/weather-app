import React, { useEffect, useState } from 'react'
import { MdDarkMode } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoSunny } from "react-icons/io5";
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchInput } from '../../redux/slices/searchSlice';
import './Header.css'

const Header = () => {
    const dispatch = useDispatch()
    const searchInput = useSelector((state) => state.search.searchInput)

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('dark-mode')) || false)
    const [inputValue, setInputValue] = useState('')

    const handleDarkMode = () =>{
        setDarkMode(prev => {
            const newDarkMode = !prev
            document.querySelector('body').setAttribute('data-theme', newDarkMode? "dark" : 'light')
            localStorage.setItem('dark-mode', JSON.stringify(newDarkMode))
            return newDarkMode
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(updateSearchInput(inputValue))
        setInputValue('')
    }

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
      };

    useEffect(()=>{
        const savedMode = JSON.parse(localStorage.getItem('dark-mode'))
        document.querySelector('body').setAttribute('data-theme', savedMode? "dark" : 'light')
        setDarkMode(savedMode)
    },[])


    

  return (
    <div className='header'>
        <div className='header-logo'>
            <h1>Weather App</h1>
        </div>
        <div className='header-search-container'>
            <form onSubmit={handleSubmit} className='header-search'>
                <input type="text" placeholder='Enter Location...' className='header-search-input'
                 value={inputValue} onChange={handleInputChange} />
                <FiSearch />
            </form>
            {
                darkMode? <IoSunny onClick={handleDarkMode} size={25} /> : <MdDarkMode onClick={handleDarkMode} size={25} />
            }
            
        </div>
    </div>
  )
}

export default Header