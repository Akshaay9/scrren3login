import React, { useState, useEffect } from "react";
import axios from "axios";
import "./app.css";
import "./app.scss";
import Countries from "./Countries";
import MultiSelect from "react-multi-select-component";
import { getAllCountries } from "./apiCalls";
function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    
  }, []);
  

  const options = [
    { label: "name", value: "name" },
    { label: "region", value: "region" },
    { label: "currency", value: "currency" },
    { label: "flag", value: "flag" },
    { label: "capital", value: "capital" },
    { label: "region", value: "region " },
    { label: "language", value: "language" },
    { label: "code", value: "code" },
  ];
  const [selected, setSelected] = useState([]);
  // search

  return (
    <div>
      <input
        className="inputQuery"
        placeholder="Search for a country by name"
        type="text"
      />

      <div className="select">
        <select name="Region" id="">
          <option value="" disabled selected>
            Filter Countried by Region
          </option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
        <select name="Regional Block" id="">
          <option value="" disabled selected>
            Filter Countried by Regional Block
          </option>
          <option value="EU">EU </option>
          <option value="EFTA">EFTA</option>
          <option value="CARICOM">CARICOM</option>
          <option value="PA">PA</option>
          <option value="AU">AU</option>
          <option value="USAN">USAN</option>
          <option value="EEU">EEU</option>
          <option value="AL">AL</option>
          <option value="ASEAN">ASEAN</option>
          <option value="CAIS">CAIS</option>
          <option value="CEFTA">CEFTA</option>
          <option value="NAFTA">NAFTA</option>
          <option value="SAARC">SAARC</option>
        </select>
        <div className="multiSelect">
          <MultiSelect
            options={options}
            value={selected}
            onChange={setSelected}
            labelledBy={"Select"}
          />
        </div>
      </div>
      <div className="countries">
        {countries.length > 0 &&
          countries.map((ele, index) => (
            <Countries
              key={index}
              flag={ele.flag}
              name={ele.name}
              region={ele.region}
              languages={ele.languages}
              timezones={ele.timezones}
              capital={ele.capital}
              currencies={ele.currencies}
              regionalBlocs={ele.regionalBlocs}
              callingCodes={ele.callingCodes}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
