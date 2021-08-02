import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

export const QuestionsContainer = styled.View`
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  text-align: center;
  margin: 0 16px;
`;

export const StyledText = styled.Text`
  font-size: 20px;
`;

export const StyledButton = styled(Button)`
  margin-top: 6px;
`;
