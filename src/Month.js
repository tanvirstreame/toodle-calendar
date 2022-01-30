import React, { useEffect, useState } from "react";
import "./css/month-view.css"
import { getCurrentMonthName } from "./utils"
const Month = (props) => {

    const [days, setDays] = useState(<></>);

    useEffect(() => {
        const dayList = []
        for (let i = 0; i < props.numberOfMonth; i++) {
            if ((i + 1) === 1) {
                dayList.push(<li key={i} className="each-day first-day" onClick={() => props.handleClickDateChange(i + 1)} style={{ gridColumnStart: props.weekDayStart }}>{i + 1}</li>);
            }
            else {
                dayList.push(<li key={i} className="each-day" onClick={() => props.handleClickDateChange(i + 1)} >{i + 1}</li>);
            }

        }
        setDays(dayList);

    }, [props?.calenderObject?.month])

    return (
        <>
            <div className="month-view-component">
                <div>
                    <div className="month-name" onClick={() => props.handleOpenMonthList()} >{getCurrentMonthName(props.calenderValue)}</div>
                    <div className="year-heading-name"
                        onClick={() => props.handleOpenYearList()}
                    >


                        {props?.calenderObject?.year}
                    </div>
                </div>

                <ol className="calendar">
                    <li className="day-name">Sun</li>
                    <li className="day-name">Mon</li>
                    <li className="day-name">Tue</li>
                    <li className="day-name">Wed</li>
                    <li className="day-name">Thu</li>
                    <li className="day-name">Fri</li>
                    <li className="day-name">Sat</li>
                    {days}
                </ol>

            </div>
        </>)
}

export default Month;