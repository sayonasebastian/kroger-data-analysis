import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { DataTable } from "primereact/datatable";
import { Form } from "react-bootstrap";
import { Column } from "primereact/column";
import "primereact/resources/primereact.min.css";

export default function DashboardWithCustomHNum() {
  const [krogerData, setKrogerData] = useState([]);
  const [hnum, setHNum] = useState("");
  const columns = [
    { field: "HSHD_NUM", header: "Hshd_num" },
    { field: "BASKET_NUM", header: "Basket_num" },
    { field: "PURCHASE_", header: "Date" },
    { field: "PRODUCT_NUM", header: "Product_num" },
    { field: "DEPARTMENT", header: "Department" },
    { field: "COMMODITY", header: "Commodity" },
    { field: "SPEND", header: "Spend" },
    { field: "UNITS", header: "Units" },
    { field: "STORE_R", header: "Store_region" },
    { field: "WEEK_NUM", header: "Week_num" },
    { field: "YEAR", header: "Year" },
    { field: "L", header: "Loyalty_flag" },
    { field: "AGE_RANGE", header: "Age_range" },
    { field: "MARITAL", header: "Marital_status" },
    { field: "INCOME_RANGE", header: "Income_range" },
    { field: "HOMEOWNER", header: "Homeowner_desc" },
    { field: "HSHD_COMPOSITION", header: "Hshd_composition" },
    { field: "HH_SIZE", header: "Hshd_size" },
    { field: "CHILDREN", header: "Children" },
  ];

  const currentHost = `${window.location.protocol}//${window.location.hostname}`;

  const getKrogerData = (e) => {
    // set Axiom configurations 
    const configuration = {
      method: "put",
      url: `${currentHost}/data/getHNum`,
      data: {
        hnum: e,
      },
    };

    // trigger Express API using axios
    axios(configuration)
      .then((result) => {
        setKrogerData(result.data);
      })
      .catch((error) => {
        error = new Error();
      });
  };

  return (
    <div className="card">
      <Form>
        <Form.Group className="mb-3" controlId="hNumCtl">
          <Form.Label>Enter Household number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter Household number"
            name="hnum"
            value={hnum}
            onChange={(e) => {
              setHNum(e.target.value);
              getKrogerData(e.target.value);
            }}
          />
          <Form.Text className="text-muted">
            Please enter cutsom Household number to fetch results
          </Form.Text>
        </Form.Group>
      </Form>
      <DataTable value={krogerData} tableStyle={{ minWidth: "50rem" }}>
        {columns.map((col, i) => (
          <Column key={col.field} field={col.field} header={col.header} />
        ))}
      </DataTable>
    </div>
  );
}
