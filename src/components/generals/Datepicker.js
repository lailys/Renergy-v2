import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./datepicker.css";

function Datepicker({ isSideSet }) {
  const handleDate = (e) => {
    console.log(new Date(e.target.value).getTime(), "......................");
  };
  return (
    <div className="Datepicker-wrapper">
      <FontAwesomeIcon
        icon={faCalendar}
        id={isSideSet ? "calendar-icon" : "calendar-icon-disabled"}
      />
      {isSideSet ? (
        <input
          type="date"
          id="date-control"
          name="date"
          onChange={handleDate}
        />
      ) : (
        <input type="date" id="date-control-disabled" name="date" disabled />
      )}
    </div>
  );
}

export default Datepicker;
