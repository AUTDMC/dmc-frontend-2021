import PropTypes from 'prop-types';
import classNames from 'classnames';

import { SIZE } from './constants';

import './Icon.style.scss';

function Icon({
  name,
  outlined,
  size,
  color,
  className: classNameProp,
}) {
  const blockClassName = outlined ? 'material-icons-outlined' : 'material-icons';
  const className = classNames(blockClassName, `${blockClassName}--${size}`, classNameProp);

  const style = color ? { color } : undefined;

  return <span className={className} style={style}>{name}</span>;
}

Icon.defaultProps = {
  size: SIZE.SM,
  className: undefined,
  outlined: false,
  color: undefined,
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.values(SIZE)),
  className: PropTypes.string,
  outlined: PropTypes.bool,
  color: PropTypes.string,
};

export default Icon;
export { SIZE } from './constants';
