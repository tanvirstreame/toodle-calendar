import React, { useState, useEffect } from "react";
import "./css/calender-view.css"
import Month from "./Month";
import { getDaysInMonth } from "./utils"
import MonthList from "./MonthList";
import YearList from "./YearList";

const Calendar = (props) => {
	const [numberOfMonth, setNumberOfMonth] = useState(0);
	const [calenderValue, setCalenderValue] = useState("");
	const [calenderObject, setCalenderObject] = useState({});
	const [weekDayStart, setWeekDayStart] = useState(0);
	const [visibleMonthList, setVisibleMonthList] = useState(false);
	const [visibleYearList, setVisibleYearList] = useState(false);
	const [visibleCalendarList, setVisibleCalendarList] = useState(false);


	const handleOnYearChange = (yearNumber) => {
		setCalenderObject({
			...calenderObject,
			year: yearNumber
		})
		setNumberOfMonth(getDaysInMonth(calenderObject.month, yearNumber))
		setCalenderValue(new Date(`${yearNumber}/${calenderObject.month}/${calenderObject.day}`).toJSON().slice(0, 10))
		handleOpenYearList();
	}

	const handleOnMonthChange = (monthNumber) => {
		setCalenderObject({
			...calenderObject,
			month: monthNumber + 1
		})
		setNumberOfMonth(getDaysInMonth(monthNumber, calenderObject.year))
		setCalenderValue(new Date(`${calenderObject.year}/${monthNumber + 1}/${calenderObject.day}`).toJSON().slice(0, 10))
		handleOpenMonthList();
	}

	const handleOpenYearList = () => {
		setVisibleYearList(!visibleYearList);
	}

	const handleOpenMonthList = () => {
		setVisibleMonthList(!visibleMonthList);
	}

	const handleOpenCalendarList = () => {
		setVisibleCalendarList(!visibleCalendarList);
	}


	const handleClickDateChange = (value) => {
		setCalenderObject({
			...calenderObject,
			day: value
		})
		setCalenderValue(new Date(`${calenderObject.year}/${calenderObject.month}/${value + 1}`).toJSON().slice(0, 10))
		handleOpenCalendarList();
	}

	useEffect(() => {
		const dateObject = calenderValue ? new Date(calenderValue) : new Date();

		const calenderInfo = {
			day: 1,
			year: dateObject.getFullYear(),
			month: dateObject.getMonth() + 1
		}

		setNumberOfMonth(getDaysInMonth(calenderInfo.month, calenderInfo.year))
		setCalenderValue(dateObject.toJSON().slice(0, 10))



		setCalenderObject(calenderInfo);
		setWeekDayStart(new Date(`${calenderInfo.year}/${calenderInfo.month}/01`).getDay() + 1);
	}, [])

	useEffect(() => {
		if (calenderValue) {
			if(props.handleOnChange) {
				props.handleOnChange(calenderValue);
			}
			
		}
	}, [calenderValue])

	return (
		<>
			<div className="calendar-view-component">
				{visibleCalendarList &&
					<div className="calendar-view">
						{visibleMonthList &&
							<div className="month-drop-list-view">
								<MonthList
									handleOnMonthChange={handleOnMonthChange}
								/>
							</div>
						}
						{visibleYearList &&
							<YearList
								handleOnYearChange={handleOnYearChange}
							/>
						}
						<Month
							calenderValue={calenderValue}
							weekDayStart={weekDayStart}
							numberOfMonth={numberOfMonth}
							calenderObject={calenderObject}
							handleOpenYearList={handleOpenYearList}
							handleOpenMonthList={handleOpenMonthList}
							handleClickDateChange={handleClickDateChange}

						/>
					</div>
				}

			</div>
			<input
				name="calender"
				className={props.className}
				onClick={() => handleOpenCalendarList()}
				type="text"
				value={calenderValue}
				readOnly
			/>

		</>
	)
}

export default Calendar;