import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";
import boards from "./data/boards";
import kudos from "./data/kudos";

const AppContext = React.createContext();

const initialState = {
  boards: boards,
  kudos: kudos,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
    // (initialState) => JSON.parse(localStorage.getItem("state")) || initialState
  );

  // useEffect(() => {
  //   if(localStorage.getItem('state')) {

  //   }
  // })

  // useEffect(() => {
  //   localStorage.setItem("state", JSON.stringify(state));
  // }, [state]);

  const newKudoboard = (person, title, theme, thumb) => {
    dispatch({
      type: "NEW_KUDOBOARD",
      payload: { person, title, theme, thumb },
    });
  };

  const newKudo = (boardId, from, msg, thumb) => {
    dispatch({
      type: "NEW_KUDO",
      payload: { boardId, from, msg, thumb },
    });
  };

  const deleteKudo = (boardId, kudoId) => {
    dispatch({ type: "DELETE_KUDO", payload: { boardId, kudoId } });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        newKudoboard,
        newKudo,
        deleteKudo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
