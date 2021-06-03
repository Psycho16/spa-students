import React from 'react';
import styled from 'styled-components';
import deleteIcon from '../assets/deleteIcon.svg';
import ratingStar from '../assets/ratingStar.svg';
import listPoint from '../assets/ListPoint.svg';
import { useDispatch, useSelector } from 'react-redux';
import { setStudents } from '../redux/actions/students';

const StudentWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: start;
  padding-right: 17px;
  margin-bottom: 25px;
  @media ${(props) => props.theme.media.phone} {
    display: grid;
    grid-template-areas:
      ' avatar name name del '
      ' avatar color rating . '
      ' . . . . '
      ' . years years years '
      ' . spec spec spec '
      ' . group group group'
      ' . . . . ';
    grid-template-columns: 67px 20px repeat(2, 123px);
    grid-template-rows: repeat(7, 20px);
    column-gap: 10px;
    row-gap: 5px;
    width: 100%;
    height: 170px;
    margin-bottom: 10px;
    box-shadow: 0px 7px 64px rgba(0, 0, 0, 0.07);
    border-radius: 6px;
    padding: 20px;
  }
`;
const StudentAvatar = styled.img`
  border: 2px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  border-radius: 300px;
  width: 3.4%;
  height: 40px;
  margin-right: 3.4%;
  @media ${(props) => props.theme.media.phone} {
    grid-area: avatar;
    width: 60px;
  }
`;
const StudentName = styled.h1`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 24.5%;
  margin-right: 3.4%;
  /* text-align: start; */
  @media ${(props) => props.theme.media.phone} {
    grid-area: name;
    font-size: 15px;
    width: 100%;
    line-height: 20px;
  }
`;
const StudentSpecialty = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 23.7%;
  margin-right: 3.4%;
  @media ${(props) => props.theme.media.phone} {
    grid-area: spec;
    width: 100%;
    font-size: 12px;
    line-height: 15px;
  }
`;
const StudentGroup = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 6.8%;
  margin-right: 5%;
  @media ${(props) => props.theme.media.phone} {
    grid-area: group;
    width: 100%;
    font-size: 12px;
    line-height: 15px;
  }
`;
const StudentAge = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 6.8%;
  margin-right: 5%;
  @media ${(props) => props.theme.media.phone} {
    grid-area: years;
    width: 100%;
    font-size: 12px;
    line-height: 15px;
  }
`;
const StudentRating = styled.div`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 6.8%;
  margin-right: 3.4%;
  @media ${(props) => props.theme.media.phone} {
    grid-area: rating;
    width: 100%;
    font-size: 12px;
    line-height: 15px;
  }
`;
const RatingStar = styled.img`
  display: none;
  width: 10px;
  height: 10px;
  @media ${(props) => props.theme.media.phone} {
    display: inline-block;
    margin-right: 10px;
  }
`;
const ListPoint = styled.img`
  display: none;
  width: 5px;
  height: 5px;
  @media ${(props) => props.theme.media.phone} {
    display: inline-block;
    margin-right: 13px;
  }
`;
const StudentColor = styled.h1`
  box-sizing: border-box;
  border-radius: 300px;
  width: 30px;
  height: 30px;
  margin-right: 30px;
  @media ${(props) => props.theme.media.phone} {
    grid-area: color;
    width: 15px;
    height: 15px;
  }
`;
const DeleteButton = styled.img`
  width: 14px;
  height: 14px;
  background: #ffffff;
  box-shadow: 0px 0px 16.3715px rgba(0, 0, 0, 0.1);
  /* border-radius: 10px; */
  @media ${(props) => props.theme.media.phone} {
    grid-area: del;
    width: 15px;
    height: 15px;
  }
`;
// Группа ВОзраст Рейтинг Любимый цвет
function Students(student) {
  const { avatar, name, specialty, group, color, rating, birthday, id } = student;
  const specialties = ['mt', 'kb', 'kn'];
  const rusSpecialties = ['Математика', 'Компьютерная безопасность', 'Компьютерные науки'];
  const rusGroups = ['МТ', 'КБ', 'КН'];
  const colors = ['green', 'blue', 'red', 'black', 'yellow', 'orange'];
  const layoutColors = ['#83C872', '#49C2E8', '#E25B5B', '#000000', '#F7FB53', '#EFA638'];

  //функции
  function getRusSpecialty(specialty) {
    return rusSpecialties[specialties.indexOf(specialty)];
  }

  function getRusGroup(group) {
    const [abbr, num] = group.split('-');
    return `${rusGroups[specialties.indexOf(abbr)]}-${num}`;
  }

  function getAge(birthday) {
    //   день рождения в формате Год-месяц-день
    const [year, month, day] = birthday.split('-');
    const today = new Date(); // сегодняшняя дата
    const dateBirthday = new Date(year, month, day); // дата рождения в формате Date
    let age = today.getFullYear() - dateBirthday.getFullYear();
    const m = today.getMonth() - (dateBirthday.getMonth() - 1); // вычитаем, т.к. в JSе отсчет месяцев начинается с 0

    return m < 0 || (m === 0 && today.getDate() < dateBirthday.getDate()) ? --age : age;
  }

  function getLayoutColor(color) {
    return layoutColors[colors.indexOf(color)];
  }

  // переменные для вывода
  const rusSpecialty = getRusSpecialty(specialty);
  const rusGroup = getRusGroup(group);
  const age = getAge(birthday);
  const layoutColor = getLayoutColor(color);

  // работа с redux
  const dispatch = useDispatch();
  const { students } = useSelector(({ students }) => {
    return {
      students: students.students,
    };
  });

  function deleteStudent() {
    // console.log(id);
    dispatch(setStudents(students.filter((student) => student.id !== id)));
  }

  return (
    <StudentWrapper>
      <StudentAvatar alt="student" src={avatar} />
      <StudentName>{name}</StudentName>
      <StudentSpecialty>
        <ListPoint src={listPoint} />
        {rusSpecialty}
      </StudentSpecialty>
      <StudentGroup>
        <ListPoint src={listPoint} />
        {rusGroup}
      </StudentGroup>
      <StudentAge>
        <ListPoint src={listPoint} />
        {age}
      </StudentAge>
      <StudentRating>
        <RatingStar src={ratingStar} />
        {rating}
      </StudentRating>
      <StudentColor style={{ background: layoutColor }}></StudentColor>
      <DeleteButton src={deleteIcon} onClick={() => deleteStudent()} />
    </StudentWrapper>
  );
}

export default Students;
