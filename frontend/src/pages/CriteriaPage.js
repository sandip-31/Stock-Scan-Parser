import React, { useState } from "react";
import "./CriteriaPage.css";
import { useLocation } from "react-router-dom";
import Card from "../components/Card";

const CriteriaPage = () => {
  const location = useLocation();
  const { values, name } = location.state;

  const [value, setValue] = useState(values);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const renderValues = () => {
    if (Array.isArray(values)) {
      const sortedValues = values.map(Number).sort((a, b) => a - b);

      return (
        <div className="sec">
          {sortedValues.map((value, index) => (
            <p key={index} className="arr-value">
              {value}
            </p>
          ))}
        </div>
      );
    } else {
      return (
        <>
          <div className="hed">
            <p className="title">{name.split(" ")[0]}</p>
            <p className="sub-title">Set Parameters</p>
          </div>
          <div className="single">
            <div className="left">Period</div>
            <input
              type="text"
              name=""
              value={value}
              className="right"
              onChange={handleInputChange}
            />
          </div>
        </>
      );
    }
  };

  return (
    <div className="container">
      <Card>{renderValues()}</Card>
    </div>
  );
};

export default CriteriaPage;
