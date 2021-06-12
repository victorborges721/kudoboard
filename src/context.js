import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
  boards: [
    {
      id: 0,
      for: "Victor Borges",
      title: "Happy Birthday, Victor!",
      thumb:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      kudos: [
        {
          id: 0,
          from: "David",
          msg: "HBD Victor! Hope it's a great day!",
          thumb: "https://media.giphy.com/media/66dLOWrLqrgxWHSeVR/giphy.gif",
        },
        {
          id: 1,
          from: "Alex",
          msg: "You're so old!",
          thumb:
            "https://images.unsplash.com/photo-1533294160622-d5fece3e080d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        },
        {
          id: 2,
          from: "Quinn",
          msg: "I can't believe it's your bday already!",
          thumb: "https://media.giphy.com/media/l4KibWpBGWchSqCRy/giphy.gif",
        },
      ],
    },
    {
      id: 1,
      for: "Konnor Kane",
      title: "Congrats on the Promotion!",
      thumb:
        "https://images.unsplash.com/photo-1594066521341-330a79387ec3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",
      kudos: [
        {
          id: 0,
          from: "Amanda",
          msg: "Huge congrats! Well deserved.",
          thumb: "https://media.giphy.com/media/g9582DNuQppxC/giphy.gif",
        },
        {
          id: 1,
          from: "Elizabeth",
          msg: "You earned it! Enjoy the promotion.",
          thumb:
            "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGZyaWVuZHN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
        },
        {
          id: 2,
          from: "Marisol",
          msg: "Keep moving up in the world, kiddo!",
          thumb: "https://media.giphy.com/media/G96zgIcQn1L2xpmdxi/giphy.gif",
        },
      ],
    },
  ],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    reducer,
    initialState
    // (initialState) => JSON.parse(localStorage.getItem("state")) || initialState
  );

  //   useEffect(() => {
  //     localStorage.setItem("state", JSON.stringify(state));
  //   }, [state]);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
