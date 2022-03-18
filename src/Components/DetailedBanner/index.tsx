import React, { ReactElement } from 'react';
import { Link } from "react-router-dom";
import { ETextAlign } from '../../Types';
import './DetailedBanner.scss';

export interface IDetailedBanner {
  title?: ReactElement | string,
  description?: ReactElement | string,
  link?: string;
  internLink?: boolean;
  image?: string;
  textAlign: ETextAlign,
}

const DetailedBannerClassName = 'detailed-banner';
const DetailedBannerTitleClassName = 'detailed-banner__title';
const DetailedBannerDescriptionClassName = 'detailed-banner__description';
const DetailedBannerWithBackgroundClassName = 'detailed-banner--with-background';
const DetailedBannerHasLinkClassName = 'detailed-banner--has-link';

const DetailedBanner = (props: IDetailedBanner): ReactElement => {

  const { title, description, textAlign, link, internLink, image } = props;

  const getDetailedBannerClass = () => {
    const classes = [DetailedBannerClassName];

    if (image) {
      classes.push(DetailedBannerWithBackgroundClassName);
    }

    if (link) {
      classes.push(DetailedBannerHasLinkClassName);
    }

    return classes.join(' ');
  };

  const getStyle = () => {
    const style = {
      textAlign: textAlign,
      backgroundImage: '',
    };

    if (image) {
      style.backgroundImage = `url('${image}')`;
    }

    return style;
  };

  const getMainContent = (): ReactElement => {
    return (
      <>
        { title && <h2 className={DetailedBannerTitleClassName}>{ title }</h2> }
        { description && <p className={DetailedBannerDescriptionClassName}>{ description }</p> }
      </>
    );
  };

  const getDetailedContent = (): ReactElement => {
    if (link) {
      return internLink ?
      <Link
        className={getDetailedBannerClass()}
        style={getStyle()}
        to={link}
      >
        { getMainContent() }
      </Link> :
      <a 
        className={getDetailedBannerClass()}
        style={getStyle()}
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        { getMainContent() }
      </a>
    }

    return <div
      className={getDetailedBannerClass()}
      style={getStyle()}
    >
      { getMainContent() }
    </div>;
  };

  return (
    <>
      { getDetailedContent() }
    </>
  )
};

export default DetailedBanner;
