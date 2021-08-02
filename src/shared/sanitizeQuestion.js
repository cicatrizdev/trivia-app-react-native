const sanitizeQuestion = (question) => {
  const sanitized = question.replace(/(&#039;)/g, "'").replace(/(&quot;)/g, '"');
  return sanitized;
};

export default sanitizeQuestion;
