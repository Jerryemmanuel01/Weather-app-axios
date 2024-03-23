import React from "react";

const Weather = ({ weatherData }) => {
  return (
    <div className="md:w-[500px] mx-4 h-[250px] bg-gray-300 shadow-lg rounded-xl md:m-auto relative px-6 top-[10%]">
      {weatherData.weather ? (
        <div className="flex justify-between w-full">
          <div className="w-1/2 my-4 mx-auto flex justify-between items-center">
            <div className="flex flex-col items-start justify-between h-full">
              <div className="">
                <p className="text-xl">
                  {weatherData.name},{weatherData.sys.country}
                </p>
                <p className="text-sm">{weatherData.weather[0].description}</p>
              </div>
              <div className="">
                <h1 className="text-6xl">
                  {weatherData.main.temp.toFixed()} °C
                </h1>
              </div>
            </div>
          </div>

          <div className="w-1/2 flex flex-col justify-between items-end">
            <div className="relative">
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                alt=""
                className="w-[120px]"
              />
            </div>
            {weatherData.name !== undefined ? (
              <div className="flex flex-col justify-evenly gap-y-2 my-4 mx-auto text-xs">
                <div className="flex justify-between gap-x-8">
                  <p>Feels Like</p>
                  <p className="font-bold w-20">
                    {weatherData.main.feels_like.toFixed()} °C
                  </p>
                </div>
                <div className="flex justify-between gap-x-8">
                  <p>Humidity</p>
                  <p className="font-bold w-20">
                    {weatherData.main.humidity} %
                  </p>
                </div>
                <div className="flex justify-between gap-x-8">
                  <p>Wind Speed</p>
                  <p className="font-bold w-20">
                    {weatherData.wind.speed.toFixed()} KPM
                  </p>
                </div>
                <div className="flex justify-between gap-x-8">
                  <p>Pressure</p>
                  <p className="font-bold w-20">
                    {weatherData.main.pressure} hPa
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Weather;
