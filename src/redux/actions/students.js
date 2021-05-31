export const setStudents = (students) => ({
  type: 'SET_STUDENTS',
  payload: students,
});
export const setInput = (input) => ({
  type: 'SET_INPUT',
  payload: input,
});
export const deleteStudent = (students, id) => ({
  type: 'DELETE_STUDENTS',
  payload: students,
});
