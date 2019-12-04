import React from 'react';
import { Text } from 'react-native';
import styled from '@emotion/native';

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default function List() {
  return (
    <Wrapper>
      <Text>List!</Text>
    </Wrapper>
  );
}