import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.style.scss';

function Button({
  children,
  type,
  onClick,
  className,
  secondary,
  fullWidth,
  rounded,
}) {
  const buttonClassName = classNames(
    'kit-button',
    className,
    {
      'kit-button--secondary': secondary,
      'kit-button--full-width': fullWidth,
      'kit-button--rounded': rounded,
    },
  );

  // eslint-disable-next-line react/button-has-type
  return <button type={type} onClick={onClick} className={buttonClassName}>{children}</button>;
}

Button.defaultProps = {
  children: null,
  type: 'button',
  onClick: () => null,
  className: '',
  secondary: false,
  fullWidth: false,
  rounded: false,
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
  fullWidth: PropTypes.bool,
  rounded: PropTypes.bool,
};

export default Button;
