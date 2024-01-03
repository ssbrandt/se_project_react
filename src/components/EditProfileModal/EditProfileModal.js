import React, { useContext } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ isOpen, onCloseModal, onEditProfile }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = React.useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [avatar, setAvatar] = React.useState("");

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  React.useEffect(() => {
    if (isOpen && currentUser) {
      setName(currentUser?.name || "");
      setAvatar(currentUser?.avatar || "");
    }
  }, [isOpen, currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onEditProfile({ name, avatar });
  }

  return (
    <ModalWithForm
      title="Change Profile Data"
      name="edit-profile"
      buttonText="Save Changes"
      onCloseModal={onCloseModal}
      isOpen={isOpen}
      onSubmit={handleSubmit}
    >
      <fieldset className="form__fieldset">
        <label className="form__label" htmlFor="user-name">
          Name
        </label>
        <input
          className="form__input-text"
          type="text"
          id="user-name"
          name="user-name"
          placeholder="Name"
          required
          value={name}
          onChange={handleNameChange}
        ></input>
        <label className="form__label" htmlFor="avatar-url">
          Avatar URL
        </label>
        <input
          className="form__input-text"
          type="url"
          id="avatar-url"
          name="avatar-url"
          placeholder="Avatar URL"
          required
          onChange={handleAvatarChange}
          value={avatar}
        ></input>
      </fieldset>
    </ModalWithForm>
  );
};

export default EditProfileModal;
