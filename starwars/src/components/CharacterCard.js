import React from "react";
import CharacterGender from "./CharacterGender";
import CharacterBirthYear from "./CharacterBirthYear";
import styled from "styled-components";
import CharacterEyeColor from "./CharacterEyeColor";
import CharacterHairColor from "./CharacterHairColor";
import CharacterHeight from "./CharacterHeight";

const StyledCards = styled.div`
  border: 1px solid black;
  width: 400px;
  margin: 20px auto;
  background: rgba(123, 163, 13, 0.3);
`;
const StyledNames = styled.h3`
  color: red;
`;

export default function CharacterCards(props) {
  console.log("card: props: ", props);
  return (
    <StyledCards>
      <StyledNames>Name: {props.people.name}</StyledNames>
      <CharacterGender gender={props.people.gender} />
      <CharacterBirthYear birthyear={props.people.birth_year} />
      <CharacterHairColor haircolor={props.people.hair_color} />
      <CharacterEyeColor eyecolor={props.people.eye_color} />
      <CharacterHeight height={props.people.height} />
    </StyledCards>
  );
}
