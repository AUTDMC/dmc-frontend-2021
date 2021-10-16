import { memo, useMemo } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Divider.style.scss';

function Divider({ className }) {
  const dividerClassName = useMemo(() => classNames('kit-divider', className), [className]);

  return <hr className={dividerClassName} />;
}

Divider.defaultProps = {
  className: undefined,
};

Divider.propTypes = {
  className: PropTypes.string,
};

export default memo(Divider);
