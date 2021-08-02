import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Button } from 'react-native-paper';
import { asyncGetQuestions } from '../../store/ducks/trivia';
import * as S from './styles';

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetQuestions());
  }, []);

  const handleBegin = () => {
    navigation.navigate('Question', { questionId: 0 });
  };

  return (
    <S.HomeContainer>
      <S.HomeTitle>Welcome to the Trivia Challenge!</S.HomeTitle>
      <S.Instructions>You will be presented with 10 True or False questions.</S.Instructions>
      <S.Instructions>Can you score 100%?</S.Instructions>
      <Button onPress={handleBegin} mode="contained">
        BEGIN
      </Button>
    </S.HomeContainer>
  );
};

export default Home;
