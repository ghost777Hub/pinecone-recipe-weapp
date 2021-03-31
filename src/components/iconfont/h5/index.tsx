/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, DOMAttributes, FunctionComponent } from 'react';
import Iconchoujiang from './Iconchoujiang';
import Iconwode from './Iconwode';
import Iconwode1 from './Iconwode1';
import Iconshouye from './Iconshouye';
import Iconfenlei from './Iconfenlei';
import Iconshoucang from './Iconshoucang';
import Iconchakandianzan from './Iconchakandianzan';
import Iconshijian from './Iconshijian';
import Iconiconsearch from './Iconiconsearch';
import Icondelete from './Icondelete';

export type IconNames = 'choujiang' | 'wode' | 'wode1' | 'shouye' | 'fenlei' | 'shoucang' | 'chakandianzan' | 'shijian' | 'iconsearch' | 'delete';

interface Props extends DOMAttributes<SVGElement> {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'choujiang':
      return <Iconchoujiang {...rest} />;
    case 'wode':
      return <Iconwode {...rest} />;
    case 'wode1':
      return <Iconwode1 {...rest} />;
    case 'shouye':
      return <Iconshouye {...rest} />;
    case 'fenlei':
      return <Iconfenlei {...rest} />;
    case 'shoucang':
      return <Iconshoucang {...rest} />;
    case 'chakandianzan':
      return <Iconchakandianzan {...rest} />;
    case 'shijian':
      return <Iconshijian {...rest} />;
    case 'iconsearch':
      return <Iconiconsearch {...rest} />;
    case 'delete':
      return <Icondelete {...rest} />;

  }

  return null;
};

export default IconFont;
