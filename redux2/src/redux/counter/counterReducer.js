const initialState = {
  count: 1,
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case "DECREASE": {
      return {
        ...state,
        count: state.count <= 0 ? state.count : state.count - 1,
      };
    }
    default: {
      return state;
    }
  }
};

export default countReducer;
