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

const Icontihuantupian: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1288 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M832.914 118.857c73.143-21.028 146.286 4.572 179.2 82.286L972.8 216.686l94.171 64.914 24.686-111.543-39.314 15.543C1011.2 84.114 915.2 46.629 820.114 73.143c-11.885 3.657-19.2 18.286-13.714 31.086 3.657 10.971 15.543 16.457 26.514 14.628zM700.343 431.543c-26.514 0-48.457 21.943-48.457 48.457s21.943 48.457 48.457 48.457S748.8 506.514 748.8 480c-0.914-26.514-21.943-48.457-48.457-48.457z m514.743 316.343V384c0-53.029-42.972-96.914-96.915-96.914H571.43c-53.029 0-96.915 42.971-96.915 96.914v482.743c0 53.028 42.972 96.914 96.915 96.914h547.657c53.028 0 96.914-42.971 96.914-96.914l-0.914-118.857z m-32 118.857c0 35.657-29.257 64-64 64H571.429c-32 0-58.515-22.857-63.086-53.943l8.228 50.286 157.258 10.057 108.8 2.743H990.17l192.915-10.972v-62.171z m0-151.772L1012.114 544 789.03 778.971l-108.8-109.714-172.8 173.714V384c0-35.657 29.257-64 64-64h547.657c35.657 0 64 29.257 64 64v330.971z m0 0"
        fill={getIconColor(color, 0, '#646C9A')}
      />
      <path
        d="M469.943 704.914H157.257c-32 0-58.514-22.857-63.086-53.943l5.486 5.486 166.4-167.314 109.714 109.714 94.172-99.657v-46.629l-95.086 101.486-108.8-109.714-172.8 173.714V158.171c0-35.657 29.257-64 64-64h547.657c35.657 0 64 29.258 64 64v128.915h32V158.17c0-53.028-42.971-96.914-96.914-96.914H157.257c-53.028 0-96.914 42.972-96.914 96.914v482.743c0 53.029 42.971 96.915 96.914 96.915h312.686v-32.915z"
        fill={getIconColor(color, 1, '#646C9A')}
      />
      <path
        d="M286.171 206.629c-26.514 0-48.457 21.942-48.457 48.457s21.943 48.457 48.457 48.457 48.458-21.943 48.458-48.457c0-27.429-21.943-48.457-48.458-48.457z"
        fill={getIconColor(color, 2, '#646C9A')}
      />
    </svg>
  );
};

Icontihuantupian.defaultProps = {
  size: 18,
};

export default Icontihuantupian;
