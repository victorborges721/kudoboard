const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_KUDO":
      return {
        ...state,
        kudos: {
          ...state.kudos,
          [action.payload.boardId]: [
            ...state.kudos[action.payload.boardId],
            {
              id: action.payload.kudoId,
              from: action.payload.from,
              msg: action.payload.msg,
              thumb: action.payload.thumb,
            },
          ],
        },
      };
    default:
      return state;
  }
};

export default reducer;
