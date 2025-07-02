import { createContext, useState, useContext } from "react";
const GlobleContext = createContext();
export const useGlobleContext = () => useContext(GlobleContext);
const Context = ({children}) => {
  const { user, setUser } = useState({ name: "Meng" });
  function signout() {
    setUser(null);
  }
  return (
    <GlobleContext.Provider value={{ user, signout }}>
      {children}
    </GlobleContext.Provider>
  );
};

export default Context
