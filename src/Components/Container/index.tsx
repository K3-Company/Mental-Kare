import React, { ReactElement } from 'react';
import './Container.scss';

export enum ETextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
};

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
