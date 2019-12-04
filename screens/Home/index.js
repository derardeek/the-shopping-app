import React from 'react';
import { Text } from 'react-native';
import styled from '@emotion/native';

const Wrapper = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <Wrapper>
      <Text>Home</Text>
    </Wrapper>
  );
}