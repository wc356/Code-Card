const cardsReducer = (state, action) => {
  switch (action.type) {
    case "POPULATE_CARDS":
      return action.cards;
    case "ADD_CARD":
      return [
        ...state,
        {
          isFlipped: false,
          title: action.title,
          language: action.language,
          body: action.body,
          code: action.code,
        },
      ];
    case "REMOVE_CARD":
      return state.filter((card) => card.title !== action.title);
    default:
      return state;
  }
};

export { cardsReducer as default };
