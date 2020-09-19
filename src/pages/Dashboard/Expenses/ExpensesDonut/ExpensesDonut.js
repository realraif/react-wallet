import React, { useState } from "react";
import DonutChart from "components/charts/NestedDonutChart/NestedDonutChart";

const data = [
  {
    "code3": "ABW",
    "z": 1,
    "code": "AW",
    "y": 12446,
    "name": "ABW"
  },
  {
    "code3": "AFG",
    "z": 1,
    "code": "AF",
    "y": 35012,
    "name": "AFG"
  },
  {
    "code3": "AGO",
    "z": 1,
    "code": "AO",
    "y": 29096,
    "name": "AGO"
  },
  {
    "code3": "ALB",
    "z": 1,
    "code": "AL",
    "y": 2952,
    "name": "ALB"
  },
  {
    "code3": "AND",
    "z": 1,
    "code": "AD",
    "y": 154,
    "name": "AND"
  },
  {
    "code3": "ARE",
    "z": 1,
    "code": "AE",
    "y": 10240,
    "name": "ARE"
  },
  {
    "code3": "ARG",
    "z": 2,
    "code": "AR",
    "y": 87694,
    "name": "ARG"
  },
  {
    "code3": "ARM",
    "z": 1,
    "code": "AM",
    "y": 5850,
    "name": "ARM"
  },
  {
    "code3": "ATG",
    "z": 1,
    "code": "AG",
    "y": 202,
    "name": "ATG"
  },
  {
    "code3": "AUS",
    "z": 1,
    "code": "AU",
    "y": 48422,
    "name": "AUS"
  }
];

const ExpensesDonut = (props) => {
  const [selectedPoints, setSelectedPoints] = useState([]);

  const setSelectedSlices = (sp) => {
    let points = sp.map((slice) => {
      return slice.name;
    });
    setSelectedPoints(points);
  };

  return (
    <>
      <div>{selectedPoints}</div>
      <DonutChart data={data} diameter={250} setSelectedSlices={setSelectedSlices} />
    </>
  );
};

export default ExpensesDonut;
