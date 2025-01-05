import React, { useEffect, useState } from 'react';
import './CurrentWeather.css';
import { IoMdCloudy } from 'react-icons/io';
import { MdWaterDrop } from 'react-icons/md';
import { RiWindyFill } from 'react-icons/ri';
import { WiHumidity } from 'react-icons/wi';
import { BsCloudsFill } from 'react-icons/bs';
import { MdVisibility } from 'react-icons/md';
import { BsSunglasses } from 'react-icons/bs';
import { useSelector } from 'react-redux';

const CurrentWeather = () => {
  const searchInput = useSelector((state) => state.search.searchInput);
  const [weatherData, setWeatherData] = useState(null);


  useEffect(() => {

    if(searchInput){fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
    )
      .then((res) => res.json())
      .then((data) => setWeatherData(data))
      .catch((err) => console.error('Error fetching weather data:', err));}
  }, [searchInput]);

  return (
    <div className="current-weather">
      
      <div className="current-weather-details">
        <div className="current-weather-left-side">
            <h2>
             <span>{weatherData?.name ?? 'Unknown Location'}</span>
            </h2>
          <IoMdCloudy size={60} />
          <h2>{weatherData?.main?.temp ?? '--'}°C</h2>
          <p>feels like {weatherData?.main?.feels_like ?? '--'}°C</p>
          <p>
            {weatherData?.weather?.[0]?.description?.replace(/^\w/, (char) =>
              char.toUpperCase()
            ) ?? 'No description available'}
          </p>
        </div>

        <div className="current-weather-right-side">
          <div className="current-weather-detailed-info-container">
            <div className="current-weather-detailed-info">
              <MdWaterDrop size={22} />
              <p>{weatherData?.rain?.['1h'] ?? '0'} mm/h</p>
            </div>
            <p>Precipitation</p>
          </div>
          <div className="current-weather-detailed-info-container">
            <div className="current-weather-detailed-info">
              <RiWindyFill size={23} />
              <p>{weatherData?.wind?.speed ?? '--'} m/s</p>
            </div>
            <p>Wind</p>
          </div>
          <div className="current-weather-detailed-info-container">
            <div className="current-weather-detailed-info">
              <WiHumidity size={28} />
              <p>{weatherData?.main?.humidity ?? '--'}%</p>
            </div>
            <p>Humidity</p>
          </div>
          <div className="current-weather-detailed-info-container">
            <div className="current-weather-detailed-info">
              <BsCloudsFill size={25} />
              <p>{weatherData?.clouds?.all ?? '--'}%</p>
            </div>
            <p>Clouds cover</p>
          </div>
          <div className="current-weather-detailed-info-container">
            <div className="current-weather-detailed-info">
              <MdVisibility size={23} />
              <p>{weatherData?.visibility ? weatherData.visibility / 1000 : '--'} km</p>
            </div>
            <p>Visibility</p>
          </div>
          <div className="current-weather-detailed-info-container">
            <div className="current-weather-detailed-info">
              <BsSunglasses size={27} />
              <p>2</p>
            </div>
            <p>UV index</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
