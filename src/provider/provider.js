import React, { useState, useEffect } from "react";

export const TbdContext = React.createContext();
export const TbdContextProvider = TbdContext.Provider;
export const TbdContextConsumer = TbdContext.Consumer;
export const TbdContextComp = ({ children }) => {
  const [user, setUser] = useState("client");
  const [openedTab, setOpenedTab] = useState("");
  const [newUser, setNewUser] = useState({});
  const [newRec, setNewRec] = useState({});
  const [newGenerator, setNewGenerator] = useState({});

  return (
    <TbdContextProvider
      value={{
        user,
        newRec,
        newUser,
        openedTab,
        newGenerator,
        setUser,
        setNewRec,
        setNewUser,
        setOpenedTab,
        setNewGenerator,
      }}
    >
      {children}{" "}
    </TbdContextProvider>
  );
};
