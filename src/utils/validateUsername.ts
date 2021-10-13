const validateUsername = (username: string): string => {
  const invalidChars = /\W/; // valid chars: numbers, letters, underscores

  if (!username) {
    return 'Please enter username';
  } if (username.length < 3) {
    return 'Username too short';
  } if (username.length > 25) {
    return 'Username too long';
  } if (invalidChars.test(username)) {
    return 'Username contains invalid characters';
  }
};

export default validateUsername;
