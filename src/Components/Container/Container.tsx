import React, { ReactElement } from 'react';
import './Container.scss';

const ContainerClassName = 'container';

export enum ETextAlign {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
};

interface IContainer {
  children: ReactElement,
  textAlign: ETextAlign;
}

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
