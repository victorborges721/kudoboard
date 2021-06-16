const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_KUDO":
      return {
        boards: [
          ...state.boards,
          {
            ...state,
            id: action.payload.boardId,
            kudos: {
              id: action.payload.kudoId,
              from: action.payload.from,
              msg: action.payload.msg,
              thumb: action.payload.thumb,
            },
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
