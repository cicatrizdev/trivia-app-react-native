import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { List, Button } from 'react-native-paper';
import { clearTriviaState } from '../../store/ducks/trivia';
import sanitizeQuestion from '../../shared/sanitizeQuestion';
import * as S from './styles';

const Results = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { responses } = useSelector((state) => state.trivia);
  let totalScore = 0;

  const handlePlayAgain = () => {
    dispatch(clearTriviaState());
    navigation.navigate('Home');
  };

  responses.map((response) => (response.isCorrect ? (totalScore += 1) : null));

  const renderResults = ({ item }) => (
    <List.Item
      title={sanitizeQuestion(item.question)}
      left={() => <List.Icon icon={item.isCorrect ? 'check-bold' : 'close'} />}
    />
  );

  return (
    <S.ResultsContainer>
      <S.ResultText>You scored {totalScore}/10</S.ResultText>
      <FlatList data={responses} renderItem={renderResults} keyExtractor={(item) => item.question} />
      <Button onPress={handlePlayAgain} mode="contained">
        PLAY AGAIN?
      </Button>
    </S.ResultsContainer>
  );
};

export default Results;
