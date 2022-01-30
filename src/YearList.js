import React from "react";
import "./css/year-list-view.css"
import { getYearList } from "./utils"

const YearList = (props) => {

	return (
		<>
			<div className="year-list-component">
				<div className="choose-year">Choose Year</div>
				<ol className="year-list-view">

					{getYearList().map((eachYear, key) => (
						<li key={key} className="year-name" onClick={() => props.handleOnYearChange(eachYear)} >{eachYear}</li>
					))}


				</ol>

			</div>
		</>)
}

export default YearList;