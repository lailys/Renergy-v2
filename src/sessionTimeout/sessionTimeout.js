import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  Fragment,
  // useAuth
  memo,
} from "react";
import moment from "moment";
import { TbdContext } from "../provider/provider";

const SessionTimeout = () => {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  const [events] = useState(["click", "load", "scroll"]);
  const [second, setSecond] = useState(0);
  const [isOpen, setOpen] = useState(false);

  let timeStamp;
  let warningInactiveInterval = useRef();
  let startTimerInterval = useRef();

  // start inactive check
  let timeChecker = useCallback(() => {
    startTimerInterval.current = setTimeout(() => {
      console.log("start");
      let storedTimeStamp = sessionStorage.getItem("lastTimeStamp");
      warningInactive(storedTimeStamp);
    }, 900000);
  });

  // warning timer
  let warningInactive = (timeString) => {
    clearTimeout(startTimerInterval.current);

    warningInactiveInterval.current = setInterval(() => {
      const maxTime = 2;
      const popTime = 1;

      const diff = moment.duration(moment().diff(moment(timeString)));
      const minPast = diff.minutes();
      const leftSecond = 60 - diff.seconds();
      console.log(leftSecond, "::::", minPast === maxTime);
      if (minPast === popTime) {
        setSecond(leftSecond);
        setOpen(true);
      }

      if (leftSecond === maxTime) {
        clearInterval(warningInactiveInterval.current);
        setOpen(false);
        sessionStorage.removeItem("lastTimeStamp");
        context.logout();
      }
    }, 1000);
  };

  // reset interval timer
  let resetTimer = useCallback(() => {
    clearTimeout(startTimerInterval.current);
    clearInterval(warningInactiveInterval.current);

    if (context.userLogedin) {
      timeStamp = moment();
      sessionStorage.setItem("lastTimeStamp", timeStamp);
    } else {
      clearInterval(warningInactiveInterval.current);
      sessionStorage.removeItem("lastTimeStamp");
    }
    timeChecker();
    setOpen(false);
  }, [context.userLogedin]);

  useEffect(() => {
    if (context.userLogedin) {
      events.forEach((event) => {
        window.addEventListener(event, resetTimer);
      });
      timeChecker();
    }

    return () => {
      clearTimeout(startTimerInterval.current);
      // resetTimer();
    };
  }, [resetTimer, events, timeChecker, context.userLogedin]);

  console.log(second);

  // if (!isOpen) {
  //   return null;
  // }

  // change fragment to modal and handleclose func to close
  return <Fragment />;
};

export default memo(SessionTimeout);
