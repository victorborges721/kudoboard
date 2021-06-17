import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_KUDO":
      let kudoId = uuidv4();
      return {
        ...state,
        kudos: {
          ...state.kudos,
          [action.payload.boardId]: [
            ...state.kudos[action.payload.boardId],
            {
              id: kudoId,
              from: action.payload.from,
              msg: action.payload.msg,
              thumb: action.payload.thumb,
            },
          ],
        },
      };
    case "DELETE_KUDO":
      return {
        ...state,
        kudos: {
          ...state.kudos,
          [action.payload.boardId]: state.kudos[action.payload.boardId].filter(
            (kudo) => kudo.id !== action.payload.kudoId
          ),
        },
      };
    default:
      return state;
  }
};

export default reducer;
