const initialState = {
  studentId: '',
  sortBy: 'name',
};
const filters = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_BY':
      return {
        ...state,
        sortBy: action.payload,
      };

    default:
      return state;
  }
};
export default filters;
