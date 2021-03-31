/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';

export type IconNames = 'choujiang' | 'wode' | 'wode1' | 'shouye' | 'fenlei' | 'shoucang' | 'chakandianzan' | 'shijian' | 'iconsearch' | 'delete';

export interface IconProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<IconProps> = () => {
  return null;
};

export default IconFont;
