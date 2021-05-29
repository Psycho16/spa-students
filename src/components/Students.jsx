import React from 'react';
import styled from 'styled-components';
import deleteIcon from '../assets/deleteIcon.svg';

const StudentWrapper = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: start;
  padding-right: 17px;
  margin-bottom: 25px;
`;
const StudentAvatar = styled.img`
  border: 2px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  border-radius: 300px;
  width: 3.4%;
  height: 40px;
  margin-right: 3.4%;
`;
const StudentName = styled.h1`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 24.5%;
  margin-right: 3.4%;
  /* text-align: start; */
`;
const StudentSpecialty = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 23.7%;
  margin-right: 3.4%;
`;
const StudentGroup = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 6.8%;
  margin-right: 5%;
`;
const StudentAge = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 6.8%;
  margin-right: 5%;
`;
const StudentRating = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 6.8%;
  margin-right: 3.4%;
`;
const StudentColor = styled.h1`
  box-sizing: border-box;
  border-radius: 300px;
  width: 30px;
  height: 30px;
  margin-right: 30px;
`;
const DeleteButton = styled.img`
  width: 14px;
  height: 14px;
  background: #ffffff;
  box-shadow: 0px 0px 16.3715px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;
// Группа ВОзраст Рейтинг Любимый цвет
function Students(student) {
  const { avatar, name, specialty, group, color, rating, birthday } = student;
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

  return (
    <StudentWrapper>
      <StudentAvatar alt="student" src={avatar} />
      <StudentName>{name}</StudentName>
      <StudentSpecialty>{rusSpecialty}</StudentSpecialty>
      <StudentGroup>{rusGroup}</StudentGroup>
      <StudentAge>{age}</StudentAge>
      <StudentRating>{rating}</StudentRating>
      <StudentColor style={{ background: layoutColor }}></StudentColor>
      <DeleteButton src={deleteIcon} />
    </StudentWrapper>
  );
}

export default Students;
