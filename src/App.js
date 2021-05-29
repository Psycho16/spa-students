import './App.css';
import React from 'react';
import { Header, Search, Students } from './components/index';
import styled from 'styled-components';

const AppTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  text-align: start;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  margin-bottom: 47px;
`;
const MainContent = styled.div`
  padding: 0 130px;
  @media ${(props) => props.theme.media.phone} {
    padding: 0 20px;
  }
`;

function App() {
  const [students, setStudents] = React.useState('');

  React.useEffect(() => {
    fetch('https://front-assignment-api.2tapp.cc/api/persons')
      .then((resp) => resp.json())
      .then((json) => {
        setStudents(json.students);
        // console.log(students);
      });
  }, []);
  return (
    <div className="App">
      <Header />
      <MainContent>
        <AppTitle>Студенты</AppTitle>
        <Search />
        {students && students.map((student) => <Students key={student.id} {...student} />)}
        {/* <Students students={students} /> */}
      </MainContent>
    </div>
  );
}

export default App;
