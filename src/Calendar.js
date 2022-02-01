import React, { useState, useEffect, useCallback } from "react";
import "./css/calender-view.css"
import Month from "./Month";
import { getDaysInMonth } from "./utils";
import MonthList from "./MonthList";
import YearList from "./YearList";

const Calendar = (props) => {
	const [numberOfMonth, setNumberOfMonth] = useState(0);
	const [calenderValue, setCalenderValue] = useState("");
	const [calenderObject, setCalenderObject] = useState({
		day: 0,
		month: 0,
		year: 0
	});
	const [weekDayStart, setWeekDayStart] = useState(0);
	const [visibleMonthList, setVisibleMonthList] = useState(false);
	const [visibleYearList, setVisibleYearList] = useState(false);
	const [visibleCalendarList, setVisibleCalendarList] = useState(false);
	const [todayDateObj, setTodayDateObj] = useState({});
	const [selectedDateObj, setSelectedDateObj] = useState({});


	const handleOnYearChange = (yearNumber) => {
		const tempCalenderObject = {
			...calenderObject,
			year: yearNumber
		};

		setCalenderObject(tempCalenderObject);
		setNumberOfMonth(getDaysInMonth(tempCalenderObject.month, yearNumber))
		setCalenderValue(new Date(`${yearNumber}/${tempCalenderObject.month}/${tempCalenderObject.day}`).toJSON().slice(0, 10))
		setFirstDayWeekName(tempCalenderObject);
		handleOpenYearList();
	}

	const handleOnMonthChange = (monthNumber) => {
		const tempCalenderObject = {
			...calenderObject,
			month: monthNumber
		}
		setCalenderObject(tempCalenderObject)
		setNumberOfMonth(getDaysInMonth(monthNumber, tempCalenderObject.year))
		setCalenderValue(new Date(`${tempCalenderObject.year}/${tempCalenderObject?.month}/${tempCalenderObject.day}`)?.toJSON()?.slice(0, 10))
		handleOpenMonthList();
		setFirstDayWeekName(tempCalenderObject);
	}

	const handleOpenYearList = () => {
		setVisibleYearList(!visibleYearList);
	}

	const handleOpenMonthList = () => {
		setVisibleMonthList(!visibleMonthList);
	}

	const handleOpenCalendarList = () => {
		setVisibleCalendarList(!visibleCalendarList);
		if (visibleYearList) {
			setVisibleYearList(!visibleYearList);
		}
		if (visibleMonthList) {
			setVisibleMonthList(!visibleMonthList);
		}

	}

	const escFunction = useCallback((event) => {
		if (event.keyCode === 27) {
			setVisibleYearList(false);
			setVisibleMonthList(false);
		}
	}, []);

	const handleClickDateChange = (value) => {
		setCalenderObject({
			...calenderObject,
			day: value
		})
		setSelectedDateObj({
			...calenderObject,
			day: value
		})
		setCalenderValue(new Date(`${calenderObject.year}/${calenderObject.month}/${value + 1}`).toJSON().slice(0, 10))
		handleOpenCalendarList();
	}

	useEffect(() => {
		document.addEventListener("keydown", escFunction, false);
		const dateObject = calenderValue ? new Date(calenderValue) : new Date();

		const calenderInfo = {
			day: dateObject.getDate(),
			year: dateObject.getFullYear(),
			month: dateObject.getMonth() + 1
		}

		const currentDate = new Date();
		setTodayDateObj({
			day: currentDate.getDate(),
			year: currentDate.getFullYear(),
			month: currentDate.getMonth() + 1
		})

		setNumberOfMonth(getDaysInMonth(calenderInfo.month, calenderInfo.year))
		setCalenderValue(dateObject?.toJSON()?.slice(0, 10))
		setFirstDayWeekName({
			...calenderInfo,
			month: calenderInfo?.month + 1
		});
		setCalenderObject(calenderInfo);

		return () => {
			document.removeEventListener("keydown", escFunction, false);
		};

	}, [])

	useEffect(() => {
		if (calenderValue) {
			if (props.handleOnChange) {
				props.handleOnChange(calenderValue);
			}
		}
	}, [calenderValue]);

	const setFirstDayWeekName = (data) => {
		setWeekDayStart(new Date(`${data.year}/${String(data.month).padStart(2, '0')}/01`).getDay() + 1);
	}

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
							selectedDateObj={selectedDateObj}
							todayDateObj={todayDateObj}
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
				className={props?.inputBoxClassName}
				onClick={() => handleOpenCalendarList()}
				type="text"
				value={calenderValue}
				readOnly
			/>

		</>
	)
}

export default Calendar;