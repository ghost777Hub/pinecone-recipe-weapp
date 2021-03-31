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

const Icondelete: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M873.594739 873.716723a511.792629 511.792629 0 1 1 0-723.848188 511.792629 511.792629 0 0 1 0 723.848188z m-129.0826-543.313083a36.594954 36.594954 0 0 0-51.769662-51.720868l-181.120625 181.267005-181.145022-181.267005a36.594954 36.594954 0 0 0-51.745264 51.720868l181.120625 181.267005-181.120625 181.023039a36.594954 36.594954 0 0 0 51.745264 51.720868l181.145022-181.023038 181.120625 181.023038a36.594954 36.594954 0 0 0 51.769662-51.720868l-181.145022-181.023039z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

Icondelete.defaultProps = {
  size: 18,
};

export default Icondelete;
