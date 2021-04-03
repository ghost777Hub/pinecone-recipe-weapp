/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, DOMAttributes, FunctionComponent } from 'react';
import Icontihuantupian from './Icontihuantupian';
import Iconfenxiang from './Iconfenxiang';
import Iconyoujiantou from './Iconyoujiantou';
import Iconjingxi from './Iconjingxi';
import Iconbeijingyinle from './Iconbeijingyinle';
import Iconxiazai from './Iconxiazai';
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

export type IconNames = 'tihuantupian' | 'fenxiang' | 'youjiantou' | 'jingxi' | 'beijingyinle-' | 'xiazai' | 'choujiang' | 'wode' | 'wode1' | 'shouye' | 'fenlei' | 'shoucang' | 'chakandianzan' | 'shijian' | 'iconsearch' | 'delete';

interface Props extends DOMAttributes<SVGElement> {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'tihuantupian':
      return <Icontihuantupian {...rest} />;
    case 'fenxiang':
      return <Iconfenxiang {...rest} />;
    case 'youjiantou':
      return <Iconyoujiantou {...rest} />;
    case 'jingxi':
      return <Iconjingxi {...rest} />;
    case 'beijingyinle-':
      return <Iconbeijingyinle {...rest} />;
    case 'xiazai':
      return <Iconxiazai {...rest} />;
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
