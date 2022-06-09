import React from 'react';
import './Card.scss';

function Card(props) {
  const { card } = props;

  return (
    <li className="card-item">
      {card.cover && <img src={card.cover} className="card-cover" alt="alt-img" />}
      Title: Hai Pham
    </li>
  );
}

export default Card;
