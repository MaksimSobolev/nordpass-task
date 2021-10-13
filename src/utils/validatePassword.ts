const validatePassword = (password: string): string => {
  if (!password) {
    return 'Please enter password';
  } if (password.length < 5) {
    return 'password too short';
  }
};
export default validatePassword;
