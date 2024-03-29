import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const LogInModal = ({ isOpen, onLogIn, onCloseModal, onSignUpRedirect }) => {
  const [email, setEmail] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = React.useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  React.useEffect(() => {
    setEmail("");
    setPassword("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onLogIn(email, password);
  }

  return (
    <ModalWithForm
      title="Log In"
      name="log-in"
      buttonText="Log In"
      onCloseModal={onCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__fieldset">
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input-text"
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          required
          value={email}
          onChange={handleEmailChange}
        ></input>

        <label className="form__label" htmlFor="password">
          Password
        </label>
        <input
          className="form__input-text"
          type="text"
          id="password"
          name="password"
          placeholder="Password"
          required
          value={password}
          onChange={handlePasswordChange}
        ></input>
      </fieldset>
      <button
        type="button"
        className="form__redirect"
        onClick={onSignUpRedirect}
      >
        or Register
      </button>
    </ModalWithForm>
  );
};

export default LogInModal;
