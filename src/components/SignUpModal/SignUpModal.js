import React from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

const SignUpModal = ({ isOpen, onSignIn, onCloseModal }) => {
  const [email, setEmail] = React.useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = React.useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [name, setName] = React.useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = React.useState("");

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  React.useEffect(() => {
    setEmail("");
    setPassword("");
    setName("");
    setAvatar("");
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
  }

  return (
    <ModalWithForm
      title="Sign In"
      name="sign-in"
      buttonText="Sign In"
      onCloseModal={onCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__fieldset">
        <label className="form__label" htmlFor="email">
          Email*
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
          Password*
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

        <label className="form__label" htmlFor="Name">
          Name
        </label>
        <input
          className="form__input-text"
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          value={name}
          onChange={handleNameChange}
        ></input>

        <label className="form__label" htmlFor="Name">
          Avatar URL
        </label>
        <input
          className="form__input-text"
          type="text"
          id="avatar"
          name="avatar"
          placeholder="Avatar URL"
          required
          value={avatar}
          onChange={handleAvatarChange}
        ></input>
      </fieldset>
    </ModalWithForm>
  );
};

export default SignUpModal;
