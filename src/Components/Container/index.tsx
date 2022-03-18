import React, { ReactElement } from 'react';
import { ETextAlign } from '../../Types';
import './Container.scss';

export interface IContainer {
  children: ReactElement,
  textAlign: ETextAlign;
}

const ContainerClassName = 'container';

const Container = (props: IContainer): ReactElement => {
  const { children, textAlign } = props;

  const ContainerStyle = {
    textAlign: textAlign
  };

  return (
    <div
      className={ContainerClassName}
      style={ContainerStyle}
    >
      {children}
    </div>
  )
};

export default Container;
