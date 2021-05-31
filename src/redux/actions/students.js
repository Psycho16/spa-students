export const setStudents = (items) => ({
  type: 'SET_STUDENTS',
  payload: items,
});
export const deleteStudent = (items, id) => ({
  type: 'DELETE_STUDENTS',
  payload: items,
});
