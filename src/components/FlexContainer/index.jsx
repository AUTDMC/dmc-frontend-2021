import PropTypes from 'prop-types';
import classNames from 'classnames';

import './FlexContainer.style.scss';

function FlexContainer({
  as: As,
  asProps,
  children,
  className,
  rowReverse,
  column,
  columnReverse,
  alignEnd,
  alignCenter,
  justifyEnd,
  justifyCenter,
}) {
  const blockClassName = classNames('kit-flex-container', className, {
    'kit-flex-container--row-reverse': rowReverse,
    'kit-flex-container--column': column,
    'kit-flex-container--column-reverse': columnReverse,
    'kit-flex-container--align-end': alignEnd,
    'kit-flex-container--align-center': alignCenter,
    'kit-flex-container--justify-end': justifyEnd,
    'kit-flex-container--justify-center': justifyCenter,
  });

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (<As className={blockClassName} {...asProps}>{children}</As>);
}

FlexContainer.defaultProps = {
  as: 'div',
  asProps: {},
  children: null,
  rowReverse: false,
  column: false,
  columnReverse: false,
  alignEnd: false,
  alignCenter: false,
  justifyEnd: false,
  justifyCenter: false,
  className: '',
};

FlexContainer.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  asProps: PropTypes.shape({}),
  children: PropTypes.node,
  rowReverse: PropTypes.bool,
  column: PropTypes.bool,
  columnReverse: PropTypes.bool,
  className: PropTypes.string,
  alignEnd: PropTypes.bool,
  alignCenter: PropTypes.bool,
  justifyEnd: PropTypes.bool,
  justifyCenter: PropTypes.bool,
};

export default FlexContainer;
