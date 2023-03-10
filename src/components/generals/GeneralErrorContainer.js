import { useContext, useEffect } from "react";
import { TbdContext } from "../../provider/provider";
import ErrorContainer from "./ErrorContainer";
import "./errorContainer.css";

function GeneralErrorContainer() {
  const context = useContext(TbdContext);
  if (!context) {
    console.log("Context dose not exists");
  }
  useEffect(() => {}, [context.error]);
  if (
    window.location.pathname.includes("/dashboard") ||
    window.location.pathname === "/marketplace"
  ) {
    return <> </>;
  }
  return (
    context.error && (
      <div className="GeneralErrorContainer">
        <span> OOOOOPS: </span> <br />
        <br />
        <ErrorContainer err={context.error} />{" "}
      </div>
    )
  );
}

export default GeneralErrorContainer;
