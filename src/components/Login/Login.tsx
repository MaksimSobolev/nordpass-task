import { SyntheticEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Routes } from '../../constants';
import login from '../../services/login';
import ErrorBlock from '../ErrorBlock';
import ValidationMessage from '../ValidationMessage';
import './login-style.scss';
import validatePassword from '../../utils/validatePassword';
import validateUsername from '../../utils/validateUsername';

const Login = () => {
  const { push } = useHistory();
  const [state, setState] = useState({
    username: '',
    password: '',
    usernameError: '',
    passwordError: '',
  }); // i used a class-like state structure so it's scalable
  const [errorMessage, setErrorMessage] = useState<string>(); // http errors

  const handleChangeValue = (key: string, value: string) => {
    setState({ ...state, [key]: value });
  };

  const handleSubmit = async (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);

    if (validateUsername(state.username)?.length > 0) {
      return handleChangeValue('usernameError', validateUsername(state.username));
    }

    if (validatePassword(state.password)?.length > 0) {
      return handleChangeValue('passwordError', validateUsername(state.password));
    }

    try {
      await login(state.username, state.password);
      return push(Routes.PasswordHealth);
    } catch (error) {
      return setErrorMessage(error.message);
    }
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="text-center">Password Health</h1>
        <input
          value={state.username}
          onChange={(e) => handleChangeValue('username', e.target.value)}
          placeholder="Username"
          type="text"
          className={`input mt-52px ${!!state.usernameError && 'input--invalid'}`}
        />
        <ValidationMessage message={state.usernameError} />
        <input
          value={state.password}
          onChange={(e) => handleChangeValue('password', e.target.value)}
          placeholder="Password"
          type="password"
          className={`input mt-12px ${!!state.passwordError && 'input--invalid'}`}
        />
        <ValidationMessage message={state.passwordError} />
        <ErrorBlock error={errorMessage} />
        <button
          type="submit"
          className="button mt-12px"
          disabled={!!state.usernameError || !!state.passwordError}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
