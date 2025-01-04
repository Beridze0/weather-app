import React from 'react'
import './CurrentWeather.css'
import { IoMdCloudy } from "react-icons/io";
import { MdWaterDrop } from "react-icons/md";
import { RiWindyFill } from "react-icons/ri";
import { WiHumidity } from "react-icons/wi";
import { BsCloudsFill } from "react-icons/bs";
import { MdVisibility } from "react-icons/md";
import { BsSunglasses } from "react-icons/bs";
import { useSelector } from 'react-redux';

const CurrentWeather = () => {

    const searchInput = useSelector((state) => state.search.searchInput)

  return (
    <div className='current-weather'>
        <div className='current-weather-left-side'>
            <IoMdCloudy size={60} />
            <h2>26°C</h2>
            <p>feels like 26°C</p>
            <p>Overcast</p>
        </div>

        <div className='current-weather-right-side'>
            <div className='current-weather-detailed-info-container'>
                <div className='current-weather-detailed-info'>
                    <MdWaterDrop size={22} />
                    <p>0 mm/h</p>
                </div>
                <p>Precipitation</p>
            </div>
            <div className='current-weather-detailed-info-container'>
                <div className='current-weather-detailed-info'>
                    <RiWindyFill size={23} />
                    <p>5 mph</p>
                </div>
                <p>Wind</p>
            </div>
            <div className='current-weather-detailed-info-container'>
                <div className='current-weather-detailed-info'>
                    <WiHumidity size={28} />
                    <p>50%</p>
                </div>
                <p>Humidity</p>
            </div>
            <div className='current-weather-detailed-info-container'>
                <div className='current-weather-detailed-info'>
                    <BsCloudsFill size={25} />
                    <p>90%</p>
                </div>
                <p>Clouds cover</p>
            </div>
            <div className='current-weather-detailed-info-container'>
                <div className='current-weather-detailed-info'>
                    <MdVisibility size={23} />
                    <p>19 mi</p>
                </div>
                <p>Visibility</p>
            </div>
            <div className='current-weather-detailed-info-container'>
                <div className='current-weather-detailed-info'>
                    <BsSunglasses size={27} />
                    <p>2</p>
                </div>
                <p>UV index</p>
            </div>
        </div>
    </div>
  )
}

export default CurrentWeather