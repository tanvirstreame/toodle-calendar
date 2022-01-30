import React, { useEffect, useState } from "react";
import "./css/month-list-view.css"
import { monthNameList } from "./data";
const MonthList = (props) => {

	return (
		<>
			<div className="month-list-component">
				<div className="choose-month">Choose Month</div>
				<ol className="month-list-view">
					{monthNameList.map((eachMonth, key) => (
						<li key={key} className="month-name" onClick={() => props.handleOnMonthChange(key + 1)} >
							{eachMonth}
						</li>
					))}
				</ol>
			</div>
		</>)
}

export default MonthList;