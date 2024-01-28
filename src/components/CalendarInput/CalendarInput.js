import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './CalendarInput.module.css';
import Calendar from 'react-calendar';


export default function CalendarInput(props) {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState(false);

    function datePicked(date) {
        setOpen(!open);
        setDate(date)
        props.onDatePicked(date);
    }

    return (
        <div>
            <Button className={styles.calendarButton} onClick={() => setOpen(!open)}>{props.icon} {date ? date.toDateString() : props.placeholder}</Button>
            {open && (
                <Calendar onChange={datePicked} value={date} className={styles.calendar} />
            )}
        </div>
    );
}