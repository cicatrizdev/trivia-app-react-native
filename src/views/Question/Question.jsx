import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import sanitizeQuestion from '../../shared/sanitizeQuestion';
import { answerQuestion } from '../../store/ducks/trivia';
import * as S from './styles';

const Question = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { questionId } = route.params;
  const [questionNumber, setQuestionNumber] = useState(questionId);
  const { questions } = useSelector((state) => state.trivia);

  const handleQuestion = (response) => {
    const isCorrect = response === questions[questionNumber].correct_answer;
    const nextQuestion = questionNumber + 1;
    const results = { ...questions[questionNumber], isCorrect };
    dispatch(answerQuestion(results));
    setQuestionNumber(nextQuestion);
    if (nextQuestion === 10) navigation.navigate('Results');
  };

  return (
    <S.QuestionsContainer>
      {questionNumber < 10 && (
        <>
          <S.StyledText>{questions[questionNumber].category}</S.StyledText>
          <S.StyledText>{sanitizeQuestion(questions[questionNumber].question)}</S.StyledText>
          <View>
            <S.StyledButton onPress={() => handleQuestion('True')}>True</S.StyledButton>
            <S.StyledButton onPress={() => handleQuestion('False')}>False</S.StyledButton>
          </View>
        </>
      )}
    </S.QuestionsContainer>
  );
};

export default Question;
