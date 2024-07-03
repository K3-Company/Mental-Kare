import React, { ReactElement } from 'react';
import './InstagramProfile.scss';

export interface IInstagramProfile {
  id: string;
  image: string;
  title: string;
  instagram: string;
  descr: string;
}

const InstagramProfileClassName = 'instagram-profile';
const InstagramProfileImageContainerClassName = 'instagram-profile__image-container';
const InstagramProfileImageClassName = 'instagram-profile__image';
const InstagramProfileInfoContainerClassName = 'instagram-profile__info';
const InstagramProfileTitleClassName = 'instagram-profile__title';
const InstagramProfileDescriptionClassName = 'instagram-profile__description';
const InstagramProfileActionContainerClassName = 'instagram-profile__action-container';
const InstagramProfileLinkClassName = 'instagram-profile__link';

const InstagramProfile = (props: IInstagramProfile): ReactElement => {
  const { image, title, instagram, descr } = props;

  return (
    <div className={InstagramProfileClassName}>
      <div className={InstagramProfileImageContainerClassName}>
        <img className={InstagramProfileImageClassName} src={image} alt={`${title}`} />
      </div>
      <div className={InstagramProfileInfoContainerClassName}>
        <h2 className={InstagramProfileTitleClassName}>
          { title }
        </h2>
        <p className={InstagramProfileDescriptionClassName}>
          { descr }
        </p>
        <div className={InstagramProfileActionContainerClassName}>
          <a
            href={instagram}
            target="_blank"
            className={InstagramProfileLinkClassName} rel="noreferrer"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default InstagramProfile;