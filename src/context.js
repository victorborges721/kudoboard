import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import boards from "./data/boards";
import kudos from "./data/kudos";

const AppContext = React.createContext();

const initialState = {
  boards: boards,
  kudos: kudos,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  const editKudo = (boardId, kudoId, newFrom, newMsg, newThumb) => {
    dispatch({
      type: "EDIT_KUDO",
      payload: { boardId, kudoId, newFrom, newMsg, newThumb },
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
        editKudo,
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
