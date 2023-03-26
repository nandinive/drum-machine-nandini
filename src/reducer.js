export const initialState = {
  displaySoundName: "React Drum Machine",
  power: false,
};

export const actionTypes = {
  SET_DISPLAY: "SET_DISPLAY",
  POWER: "POWER",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.SET_DISPLAY:
      return {
        ...state,
        displaySoundName: action.soundName,
      };
    case actionTypes.POWER:
      return {
        ...state,
        power: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
