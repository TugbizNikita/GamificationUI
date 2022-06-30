import Types from "../Types";

const initial_state = {
  userData: {},
};

export default function (state = initial_state, action) {
  switch (action.type) {
    case Types.LOGIN:
      const data = action.payload;
      return { userData: data };
    default:
      return { ...state };
  }
}
