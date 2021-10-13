import { FC } from 'react';

interface IValidationMessage {
  message: String;
}

const ValidationMessage: FC<IValidationMessage> = ({ message }) => (
  <div className="validation-message">{message}</div>
);

export default ValidationMessage;
