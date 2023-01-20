const BUY_BAT = "BUY_BAT";
const SELL_BAT = "SELL_BAT";
const initialState = {
  noOfBats: 10,
};

const BatReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_BAT:
      return {
        ...state,
        noOfBats: state.noOfBats - action.payload,
      }
    case SELL_BAT:
      return {
        ...state,
        noOfBats: Number(state.noOfBats) + Number(action.payload),
      }
    default:
      return state;
  }
};

export default BatReducer;
