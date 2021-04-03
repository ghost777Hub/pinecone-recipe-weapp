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

const Iconbeijingyinle: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M846.5 448.5l-39.2 6.7C780.1 301.3 646.7 189.7 490 189.7c-177.7 0-322.5 144.4-322.5 322.1 0 178.1 144.8 322.5 322.5 322.5 7.9 0 15.8-0.4 24.1-0.8 0 5.5 0.8 11.1 2.4 16.6 0.4 0.8 0.8 2 1.2 2.8 2.8 7.5 7.1 13.9 13.1 18.6-13.5 1.6-26.9 2.4-40.8 2.4-199.8 0-362-162.2-362-362 0-199.4 162.2-361.6 362-361.6 175.7-0.1 325.7 125.3 356.5 298.2z"
        fill={getIconColor(color, 0, '#8a8a8a')}
      />
      <path
        d="M490 598.8c-47.9 0-86.9-39-86.9-86.9s39-86.9 86.9-86.9 86.9 39 86.9 86.9-39 86.9-86.9 86.9z m0-131.1c-24.4 0-44.2 19.8-44.2 44.2 0 24.4 19.8 44.2 44.2 44.2 24.4 0 44.2-19.8 44.2-44.2 0-24.4-19.8-44.2-44.2-44.2zM896 464.5v320.9c0 0.8 0 1.2-0.4 2-0.8 22.2-22.2 42.7-51.8 48.3-32.8 5.9-63.3-9.5-68.1-34.8-4.3-24.9 18.6-50.3 51.8-56.2 13.1-2.4 26.1-1.2 36.8 2.8v-194l-171.7 31.3v229.1c0.4 0.8 0.8 1.6 0.8 2.4 4.4 24.9-18.6 50.2-51.8 56.2-32.8 5.9-63.3-9.5-67.7-34.8-4.7-24.9 18.6-50.3 51.4-56.2 12.3-2.4 24.1-1.6 34.4 2l0.8-281.3L896 464.5z"
        fill={getIconColor(color, 1, '#8a8a8a')}
      />
    </svg>
  );
};

Iconbeijingyinle.defaultProps = {
  size: 18,
};

export default Iconbeijingyinle;
