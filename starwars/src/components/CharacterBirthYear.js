import React from "react";
import styled from "styled-components";
const BirthYearColor = styled.h3`
  color: green;
`;

export default function CharacterBirthYear(props) {
  return <BirthYearColor>BirthYear: {props.birthyear}</BirthYearColor>;
}
