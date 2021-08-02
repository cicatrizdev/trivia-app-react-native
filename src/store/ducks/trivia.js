import axios from 'axios';

const API_URL = 'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean';

const Types = {
  GET_QUESTIONS: 'trivia/GET_QUESTIONS',
  GET_QUESTIONS_SUCCESS: 'trivia/GET_QUESTIONS_SUCCESS',
  GET_QUESTIONS_ERROR: 'trivia/GET_QUESTIONS_ERROR',

  ANSWER_QUESTION: 'trivia/ANSWER_QUESTION',

  CLEAR_TRIVIA_STATE: 'trivia/CLEAR_TRIVIA_STATE',
};

const initialState = {
  questions: [],
  error: null,
  isLoading: false,
  responses: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_QUESTIONS:
      return { ...state, isLoading: true };
    case Types.GET_QUESTIONS_SUCCESS:
      return { ...state, isLoading: false, questions: action.payload.questions };
    case Types.GET_QUESTIONS_ERROR:
      return { ...state, isLoading: false, error: action.payload.error };
    case Types.ANSWER_QUESTION:
      return { ...state, responses: [...state.responses, action.payload.question] };
    case Types.CLEAR_TRIVIA_STATE:
      return { ...initialState };
    default:
      return state;
  }
};

const getQuestions = () => ({
  type: Types.GET_QUESTIONS,
});

const getQuestionsSuccess = (questions) => ({
  type: Types.GET_QUESTIONS_SUCCESS,
  payload: { questions },
});

const getQuestionsError = (error) => ({
  type: Types.GET_QUESTIONS_ERROR,
  payload: { error },
});

const answerQuestion = (question) => ({
  type: Types.ANSWER_QUESTION,
  payload: { question },
});

const clearTriviaState = () => ({
  type: Types.CLEAR_TRIVIA_STATE,
});

const asyncGetQuestions = () => async (dispatch) => {
    dispatch(getQuestions());
    try {
      const success = await axios.get(API_URL);
      return dispatch(getQuestionsSuccess(success.data.results));
    } catch (error) {
      return dispatch(getQuestionsError(error));
    }
  };

export { asyncGetQuestions, answerQuestion, clearTriviaState };
export default reducer;
