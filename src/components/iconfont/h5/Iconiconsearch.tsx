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

const Iconiconsearch: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M832 416C832 186.624 645.376 0 416 0 186.624 0 0 186.624 0 416 0 645.376 186.624 832 416 832 645.376 832 832 645.376 832 416zM416 768C221.888 768 64 610.112 64 416S221.888 64 416 64C610.112 64 768 221.888 768 416S610.112 768 416 768z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <path
        d="M996.224 860.48l-173.248-178.752-45.952 44.544 173.632 179.136C956.672 911.36 960 919.424 960 928c0 8.576-3.328 16.64-9.344 22.656-12.416 12.416-32.768 12.48-45.568-0.32l-178.752-173.312-44.544 45.952 178.432 172.992C878.848 1014.656 903.424 1024 928 1024c24.576 0 49.152-9.408 67.904-28.096C1014.016 977.792 1024 953.664 1024 928 1024 902.336 1014.016 878.208 996.224 860.48z"
        fill={getIconColor(color, 1, '#333333')}
      />
      <path
        d="M235.136 234.944c-99.84 99.84-99.84 262.208 0 361.984L280.384 551.68c-74.816-74.816-74.816-196.608 0-271.488L235.136 234.944z"
        fill={getIconColor(color, 2, '#333333')}
      />
    </svg>
  );
};

Iconiconsearch.defaultProps = {
  size: 18,
};

export default Iconiconsearch;
