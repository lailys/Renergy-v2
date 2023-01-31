import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./datepicker.css";

function FullDatapicker({ className, handleChange, value }) {
  const handleDate = (e) => {
    console.log(new Date(e.target.value).getTime(), "......................");
  };
  return (
    <div className="FullDatepicker-wrapper">
      <FontAwesomeIcon icon={faCalendar} id="full-calendar-icon" />
      <input
        type="date"
        id="full-date-control"
        name="date"
        value={value}
        data-title={className}
        className={className}
        onChange={handleChange}
      />
    </div>
  );
}

export default FullDatapicker;
