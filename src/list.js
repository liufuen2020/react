import React from 'react';
import './List.css';
import ReactDOM from "react-dom";
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";

function List() {
  const numbers =[1,2,3,4];
  const listItems = numbers.map((items) => {
  	return <li>{items}</li>
  });
  return (
    <div className="List">
    <h1>antd version: {version}</h1>
    <DatePicker />
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button
    </Button>
       <ul>
       		{listItems}
       </ul>
    </div>
  );
}
export default List;