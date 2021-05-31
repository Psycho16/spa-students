const initialState = {
  students: [],
  input: '',
};

const students = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STUDENTS':
      return {
        ...state,
        students: action.payload,
      };
    case 'SET_INPUT':
      return {
        ...state,
        input: action.payload,
      };

    case 'DELETE_STUDENT':
      return {
        ...state,
        students: action.payload,
      };

    default:
      return state;
  }
};

export default students;
