import React from "react";
import styled from "styled-components";

const HairColor = styled.h3`
  color: mahgony;
`;

export default function CharacterHairColor(props) {
  return <HairColor>Hair Color: {props.haircolor}</HairColor>;
}
