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

const Iconyoujiantou: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M304.64 1011.2c-15.36 15.36-40.96 15.36-56.32 0-15.36-15.36-15.36-40.96 0-56.32l471.04-471.04c15.36-15.36 40.96-15.36 56.32 0 15.36 15.36 15.36 40.96 0 56.32L304.64 1011.2z"
        fill={getIconColor(color, 0, '#2E2826')}
      />
      <path
        d="M775.68 483.84c15.36 15.36 15.36 40.96 0 56.32-15.36 15.36-40.96 15.36-56.32 0L248.32 69.12c-15.36-15.36-15.36-40.96 0-56.32 15.36-15.36 40.96-15.36 56.32 0l471.04 471.04z"
        fill={getIconColor(color, 1, '#2E2826')}
      />
    </svg>
  );
};

Iconyoujiantou.defaultProps = {
  size: 18,
};

export default Iconyoujiantou;
