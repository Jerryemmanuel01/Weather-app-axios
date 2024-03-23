import axios from "axios";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import Weather from "./components/Weather";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const API_KEY = "2caa29a9fced729da9d9a4c493c6b031";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`;

  const handleSubmit = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(response.data);
    });
    setLocation("");
  }

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <div className="w-full h-full ">
      <div className="text-center p-4 ">
        <div className="flex justify-center relative md:w-[700px] md:mx-auto">
          <input
            type="text"
            className="px-6 py-3 w-[700px] text-lg rounded-3xl border border-gray-200 text-gray-600 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md"
            placeholder="Enter Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onKeyDown={searchLocation}
          />
          <CiSearch size={30} className="absolute right-2 cursor-pointer top-2" onClick={handleSubmit}/>
        </div>
      </div>

      <Weather weatherData={data} />
    </div>
  );
}

export default App;
