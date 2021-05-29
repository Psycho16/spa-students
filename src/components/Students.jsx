import React from 'react';
import styled from 'styled-components';
import deleteIcon from '../assets/deleteIcon.svg';

const StudentWrapper = styled.div`
  width: 1143px;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: start;
`;
const StudentAvatar = styled.img`
  border: 2px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  border-radius: 300px;
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;
const StudentName = styled.h1`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 300px;
  margin-right: 20px;
  /* text-align: start; */
`;
const StudentSpecialty = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 280px;
  margin-right: 20px;
`;
const StudentGroup = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 80px;
  margin-right: 60px;
`;
const StudentAge = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 80px;
  margin-right: 60px;
`;
const StudentRating = styled.h2`
  font-weight: 500;
  font-size: 15px;
  line-height: 20px;
  width: 80px;
  margin-right: 20px;
`;
const StudentColor = styled.h1`
  border: 2px solid rgba(255, 255, 255, 0.6);
  box-sizing: border-box;
  border-radius: 300px;
  width: 40px;
  height: 40px;
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
  const { avatar, email, name, sex, specialty, group, color, rating, birthday } = student;

  function getAge(birthday) {}
  return (
    <StudentWrapper>
      <StudentAvatar alt="student" src={avatar} />
      <StudentName>{name}</StudentName>
      <StudentSpecialty>{specialty}</StudentSpecialty>
      <StudentGroup>{group}</StudentGroup>
      <StudentAge>{birthday}</StudentAge>
      <StudentRating>{rating}</StudentRating>
      <StudentColor style={{ background: color }}></StudentColor>
      <DeleteButton src={deleteIcon} />
    </StudentWrapper>
  );
}

export default Students;
