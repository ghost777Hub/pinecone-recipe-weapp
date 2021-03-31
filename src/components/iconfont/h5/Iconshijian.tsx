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

const Iconshijian: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 113c220 0 399 179 399 399S732 911 512 911 113 732 113 512s179-399 399-399m0-42C268.4 71 71 268.4 71 512s197.4 441 441 441 441-197.4 441-441S755.6 71 512 71z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M533.6 511.7c0 11.6-9.4 21-21 21s-21-9.4-21-21v-294c0-11.6 9.4-21 21-21s21 9.4 21 21v294z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M497.8 531c-8.2-8.2-8.2-21.5 0-29.7s21.5-8.2 29.7 0l193 193c8.2 8.2 8.2 21.5 0 29.7s-21.5 8.2-29.7 0l-193-193z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </svg>
  );
};

Iconshijian.defaultProps = {
  size: 18,
};

export default Iconshijian;
