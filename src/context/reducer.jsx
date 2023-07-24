export const reducer = (state, action) => {
  switch (action.type) {
    case "SELECT":
      return { ...state, merchants: action.payload };
    default:
      return state;
  }
};
