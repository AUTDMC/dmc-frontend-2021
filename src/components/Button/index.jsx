import PropTypes from 'prop-types';
import classNames from 'classnames';

import './Button.style.scss';

function Button({
  children,
  type,
  onClick,
  className,
  secondary,
}) {
  const buttonClassName = classNames('kit-button', className, { 'kit-button--secondary': secondary });

  // eslint-disable-next-line react/button-has-type
  return <button type={type} onClick={onClick} className={buttonClassName}>{children}</button>;
}

Button.defaultProps = {
  children: null,
  type: 'button',
  onClick: () => null,
  className: '',
  secondary: false,
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  secondary: PropTypes.bool,
};

export default Button;
