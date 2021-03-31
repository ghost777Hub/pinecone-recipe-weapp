/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, DOMAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends DOMAttributes<SVGElement> {
  size?: number;
  color?: string | string[];
  style?: CSSProperties;
  className?: string;
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const Iconshouye: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M940.544 362.6496L565.76 93.696c-30.8224-22.1184-72.0384-21.8624-102.2464 0.4096L88.32 362.5984c-13.7728 9.8816-16.9984 29.0816-7.1168 42.8544a30.59712 30.59712 0 0 0 24.9856 12.8512c6.1952 0 12.4416-1.8432 17.8688-5.7344l0.5632-0.4096v354.048c0 82.8416 66.048 150.2208 147.2 150.2208h485.2736c81.152 0 147.2-67.3792 147.2-150.2208V412.2112l0.4608 0.3072a30.67904 30.67904 0 0 0 42.8544-7.0656 30.62784 30.62784 0 0 0-7.0656-42.8032z m-97.6896 403.5584c0 48.9472-38.4512 88.7808-85.76 88.7808H271.872c-47.3088 0-85.76-39.8336-85.76-88.7808V368.1792l313.4976-224.4096a25.82016 25.82016 0 0 1 30.3616-0.2048l312.8832 224.5632v398.08z"
        fill={getIconColor(color, 0, '#565B6D')}
      />
      <path
        d="M519.68 717.6704c-80.0768 0-145.2032-65.1264-145.2032-145.2032 0-80.0768 65.1264-145.2032 145.2032-145.2032 80.0768 0 145.2032 65.1264 145.2032 145.2032 0 80.0768-65.1264 145.2032-145.2032 145.2032z m0-228.9664c-46.1824 0-83.7632 37.5808-83.7632 83.7632s37.5808 83.7632 83.7632 83.7632 83.7632-37.5808 83.7632-83.7632-37.5808-83.7632-83.7632-83.7632z"
        fill={getIconColor(color, 1, '#FF9813')}
      />
    </svg>
  );
};

Iconshouye.defaultProps = {
  size: 18,
};

export default Iconshouye;
