import { v4 as uuidv4 } from "uuid";

const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_KUDOBOARD":
      let boardId = uuidv4();
      return {
        boards: [
          ...state.boards,
          {
            id: boardId,
            person: action.payload.person,
            title: action.payload.title,
            theme: action.payload.theme,
            thumb: action.payload.thumb,
          },
        ],
        kudos: {
          ...state.kudos,
          [boardId]: [],
        },
      };
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
    case "EDIT_KUDO":
      let editedKudo = {
        id: action.payload.kudoId,
        from: action.payload.newFrom,
        msg: action.payload.newMsg,
        thumb: action.payload.newThumb,
      };
      console.log(editedKudo);
      let idx = state.kudos[action.payload.boardId].findIndex(
        (kudo) => kudo.id === action.payload.kudoId
      );
      console.log(idx);
      let finalArr = state.kudos[action.payload.boardId].splice(
        idx,
        1,
        editedKudo
      );
      console.log(finalArr);
      // let filteredArr = state.kudos[action.payload.boardId].filter(
      //   (kudo) => kudo.id !== action.payload.kudoId
      // );
      // let finalArr = filteredArr.concat(editedKudo);
      return {
        ...state,
        kudos: {
          ...state.kudos,
          [action.payload.boardId]: finalArr,
          // state.kudos[action.payload.boardId]
          // .find(
          //   (kudo) => kudo.id === action.payload.kudoId
          // ),
          // .filter((kudo) => kudo.id !== action.payload.kudoId)
          // .push(editedKudo),
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
