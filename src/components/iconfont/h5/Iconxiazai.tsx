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

const Iconxiazai: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M745.69728 778.24a32.0512 32.0512 0 0 1 0-64.09728 145.09056 145.09056 0 0 0 101.888-42.78784 135.95136 135.95136 0 0 0 40.6784-96.56832 138.65984 138.65984 0 0 0-123.94496-137.91232 44.74368 44.74368 0 0 1-39.78752-40.54528 217.97376 217.97376 0 0 0-434.39616 1.05472 44.544 44.544 0 0 1-37.5296 40.41216A139.52512 139.52512 0 0 0 135.68 577.75104c1.39264 75.20768 65.5104 136.39168 142.92992 136.39168a32.0512 32.0512 0 0 1 0 64.09728C166.53824 778.24 73.728 688.83456 71.68 578.93888A204.04224 204.04224 0 0 1 227.93728 377.344a281.984 281.984 0 0 1 558.62272-1.99168A202.66496 202.66496 0 0 1 952.32 574.64832a199.64416 199.64416 0 0 1-59.392 141.98784A209.51552 209.51552 0 0 1 745.69728 778.24z"
        fill={getIconColor(color, 0, '#4A4A4A')}
      />
      <path
        d="M686.0032 726.69184a32.05632 32.05632 0 0 0-45.13792-4.608l-96.09728 78.2848v-289.28a32.08192 32.08192 0 1 0-64.16896 0v289.2544L384.512 722.06848a32.1024 32.1024 0 0 0-40.51456 49.81248l140.288 114.30912a45.12768 45.12768 0 0 0 56.79616 0l140.288-114.30912a32.14336 32.14336 0 0 0 4.6336-45.18912z"
        fill={getIconColor(color, 1, '#FF7214')}
      />
    </svg>
  );
};

Iconxiazai.defaultProps = {
  size: 18,
};

export default Iconxiazai;
