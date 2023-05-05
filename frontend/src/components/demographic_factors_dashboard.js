import React from "react";

import "../App.css";

import pic1 from "../assets/images/1.jpg";
import pic2 from "../assets/images/2.jpg";
import pic3 from "../assets/images/3.jpg";



export default function DemographicFactorsDashboard() {
  return (
    <>
    <h2>Graphs explaning the demographic factors</h2>
      <h3>Data over the years</h3>
      <img src={pic1} width="70%" title="Years" alt="Dashboard"/>
      <h3>Data over the Marital Status</h3>
      <img src={pic2} width="70%" title="Martial status" alt="Dashboard"/>
      <h3>Data over the Income</h3>
      <img src={pic3} width="70%" title="Income" alt="Dashboard"/>
    </>
  );
}
