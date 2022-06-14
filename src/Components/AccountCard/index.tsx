import React, { ReactElement } from 'react';
import './AccountCard.scss';

export interface IAccountCard {
  id: string,
  image: string;
  title: string;
  author: string;
  descr: string;
  buyLink: string;
}

const AccountCardClassName = 'account-card';
const AccountCardImageContainerClassName = 'account-card__image-container';
const AccountCardImageClassName = 'account-card__image';
const AccountCardInfoContainerClassName = 'account-card__info';
const AccountCardTitleClassName = 'account-card__title';
const AccountCardAuthorClassName = 'account-card__author';
const AccountCardDescriptionClassName = 'account-card__description';
const AccountCardActionContainerClassName = 'account-card__action-container';
const AccountCardBuyLinkClassName = 'account-card__buy-link';

const AccountCard = (props: IAccountCard): ReactElement => {
  const { image, title, author, descr, buyLink } = props;

  return (
    <div className={AccountCardClassName}>
      <div className={AccountCardImageContainerClassName}>
        <img className={AccountCardImageClassName} src={image} alt={`Capa do livro ${title}`} />
      </div>
      <div className={AccountCardInfoContainerClassName}>
        <h2 className={AccountCardTitleClassName}>
          { title }
        </h2>
        <p className={AccountCardDescriptionClassName}>
          { descr }
        </p>
        <h3 className={AccountCardAuthorClassName}>{ author }</h3>

        <div className={AccountCardActionContainerClassName}>
          <a
            href={buyLink}
            target="_blank"
            className={AccountCardBuyLinkClassName} rel="noreferrer"
          >
            Comprar
          </a>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
