import React, { useState } from "react";
import axios from "axios";
import "../App.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "primereact/resources/primereact.min.css";
import { Form, Button } from "react-bootstrap";

export default function CustomDataSetUpload() {
  const [krogerData, setKrogerData] = useState([]);
  const [hnum, setHNum] = useState("");
  const [file1, setFile1] = useState(false);
  const [file2, setFile2] = useState(false);
  const [file3, setFile3] = useState(false);
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
  const onFileUpload1 = () => {
     setFile1(true);
  };
  const onFileUpload2 = () => {
    setFile2(true);
 };
 const onFileUpload3 = () => {
  setFile3(true);
};

  const onSearch = (e) => {
    // set Axiom configurations
    const configuration = {
      method: "put",
      url: `${currentHost}/data/getHnum_1`,
      data: {
        hnum
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
      <div>
        <input type="file" onChange={onFileUpload1}/>
      </div>
  
      <div>
        <input type="file" onChange={onFileUpload2}/>
      </div>
  
      <div>
        <input type="file" onChange={onFileUpload3}/>
      </div>

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
            }}
          />
          <Form.Text className="text-muted">
            Please enter custom Household number to fetch results
          </Form.Text>
        </Form.Group>
      </Form>
  
      <div className="mt-2">
        <Button
          variant="primary"
          type="submit"
          onClick={(e) => onSearch(e)}
          disabled={!(file1 && file2 && file3 && hnum)}
        >
          Search
        </Button>
      </div>
      <DataTable value={krogerData} tableStyle={{ minWidth: "50rem" }}>
        {columns.map((col, i) => (
          <Column key={col.field} field={col.field} header={col.header} />
        ))}
      </DataTable>
    </div>
  );
}
