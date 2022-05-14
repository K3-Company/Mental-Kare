import React, { ReactElement } from 'react';
import './BookCard.scss';

export interface IBookCard {
  id: string,
  image: string;
  title: string;
  author: string;
  descr: string;
  buyLink: string;
}

const BookCardClassName = 'book-card';
const BookCardImageContainerClassName = 'book-card__image-container';
const BookCardImageClassName = 'book-card__image';
const BookCardInfoContainerClassName = 'book-card__info';
const BookCardTitleClassName = 'book-card__title';
const BookCardAuthorClassName = 'book-card__author';
const BookCardDescriptionClassName = 'book-card__description';
const BookCardActionContainerClassName = 'book-card__action-container';
const BookCardBuyLinkClassName = 'book-card__buy-link';

const BookCard = (props: IBookCard): ReactElement => {
  const { image, title, author, descr, buyLink } = props;

  return (
    <div className={BookCardClassName}>
      <div className={BookCardImageContainerClassName}>
        <img className={BookCardImageClassName} src={image} alt={`Capa do livro ${title}`} />
      </div>
      <div className={BookCardInfoContainerClassName}>
        <h2 className={BookCardTitleClassName}>
          { title }
        </h2>
        <p className={BookCardDescriptionClassName}>
          { descr }
        </p>
        <h3 className={BookCardAuthorClassName}>{ author }</h3>

        <div className={BookCardActionContainerClassName}>
          <a
            href={buyLink}
            target="_blank"
            className={BookCardBuyLinkClassName} rel="noreferrer"
          >
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
