import React from 'react';
import './List.scss';
import ReactDOM from "react-dom";
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";

class List extends React.Component{
	constructor(props){
		super(props);
		this.state={
			nambers:[1,2,3,4,7],
		}
	}
	render(){
		const listItems=this.state.nambers.map((item) => {
			return <li key={item}>{item}</li>
		})
		return(
			<div className="List">
		    <h1>antd version: {version}</h1>
		    <DatePicker />
		    <Button type="primary" style={{ marginLeft: 8 }}>
		      Primary Button
		    </Button>
		       <ul className="box">
		       		{listItems}
		       </ul>
		    </div>
		)
	}
} 
export default List;