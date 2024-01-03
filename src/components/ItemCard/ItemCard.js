import React from "react";
import "./ItemCard.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function ItemCard({ card, onSelectedCard, onCardLike, loggedIn }) {
  const currentUser = React.useContext(CurrentUserContext);
  const [isLiked, setIsLiked] = React.useState(false);

  React.useEffect(() => {
    if (currentUser && currentUser._id) {
      setIsLiked(card.likes.some((id) => id === currentUser._id));
    }
  }, [card.likes, currentUser]);

  const cardLikeButtonClassName = `card__likeButton ${
    isLiked ? "card__likeButton-active" : "card__likeButton-inactive"
  }`;

  const onLikeClick = () => {
    onCardLike({ id: card._id, isLiked: isLiked });
  };

  return (
    <li className="card">
      <img
        src={card.imageUrl}
        alt={card.name}
        className="card__image"
        onClick={() => onSelectedCard(card)}
      />
      <div className="card__header">
        <h2 className="card__title">{card.name}</h2>
        {loggedIn ? (
          <button
            className={cardLikeButtonClassName}
            onClick={onLikeClick}
          ></button>
        ) : null}
      </div>
    </li>
  );
}

export default ItemCard;
