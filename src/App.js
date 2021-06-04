import './App.css';
import React from 'react';
import { Header, Search, Students } from './components/index';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { setStudents } from './redux/actions/students';

function App() {
  const dispatch = useDispatch();
  const { students, input, sortType } = useSelector(({ students }) => {
    return {
      students: students.students,
      input: students.input,
      sortType: students.sortType,
    };
  });

  React.useEffect(() => {
    fetch('https://front-assignment-api.2tapp.cc/api/persons')
      .then((resp) => resp.json())
      .then((json) => {
        dispatch(setStudents(json.students));
      });
  }, []);

  function getAge(birthday) {
    //   день рождения в формате Год-месяц-день
    const [year, month, day] = birthday.split('-');
    const today = new Date(); // сегодняшняя дата
    const dateBirthday = new Date(year, month, day); // дата рождения в формате Date
    let age = today.getFullYear() - dateBirthday.getFullYear();
    const m = today.getMonth() - (dateBirthday.getMonth() - 1); // вычитаем, т.к. в JSе отсчет месяцев начинается с 0

    return m < 0 || (m === 0 && today.getDate() < dateBirthday.getDate()) ? --age : age;
  }

  function sortBy(a, b, type) {
    switch (type) {
      case 'Имя А-Я':
        return a.name.localeCompare(b.name);
      case 'Имя Я-А':
        return b.name.localeCompare(a.name);
      case 'Сначала моложе':
        return getAge(a.birthday) - getAge(b.birthday);
      case 'Сначала старше':
        return getAge(b.birthday) - getAge(a.birthday);
      case 'Низкий рейтинг':
        return a.rating - b.rating;
      case 'Высокий рейтинг':
        return b.rating - a.rating;
      default:
        return;
    }
  }

  return (
    <div className="App">
      <Header />
      <MainContent>
        <AppTitle>Студенты</AppTitle>
        <Search />
        <StudentWrapper>
          <StudentName>ФИО</StudentName>
          <StudentSpecialty>Специальность</StudentSpecialty>
          <StudentGroup>Группа</StudentGroup>
          <StudentAge>Возраст</StudentAge>
          <StudentRating>Рейтинг</StudentRating>
        </StudentWrapper>
        <MainStudentsWrapper>
          {students &&
            students
              .filter((student) => student.name.toLowerCase().includes(input.toLowerCase()))
              .sort((a, b) => sortBy(a, b, sortType))
              .map((student) => <Students key={student.id} {...student} />)}
        </MainStudentsWrapper>
      </MainContent>
    </div>
  );
}
const AppTitle = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  text-align: start;
  font-weight: bold;
  font-size: 40px;
  line-height: 50px;
  margin-bottom: 47px;
  @media ${(props) => props.theme.media.phone} {
    font-weight: bold;
    font-size: 30px;
    line-height: 38px;
    margin-bottom: 22px;
  }
`;
const MainContent = styled.div`
  padding: 0 130px;
  @media ${(props) => props.theme.media.phone} {
    padding: 0 20px;
  }
`;
const MainStudentsWrapper = styled.div`
  box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
  padding: 26px 20px;
`;

// для таблицы студентов
const StudentWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: start;
  padding-right: 17px;
  padding-left: 6.7%;
  margin-bottom: 12px;
  @media ${(props) => props.theme.media.phone} {
    display: none;
  }
`;
const StudentName = styled.h1`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 24.5%;
  margin-right: 4.8%;
  /* text-align: start; */
`;
const StudentSpecialty = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 23.7%;
  margin-right: 4.4%;
`;
const StudentGroup = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 6.8%;
  margin-right: 5.7%;
`;
const StudentAge = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 6.8%;
  margin-right: 5.7%;
`;
const StudentRating = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  width: 6.8%;
  margin-right: 3.4%;
`;
export default App;
