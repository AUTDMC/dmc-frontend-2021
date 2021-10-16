import PropTypes from 'prop-types';
import classNames from 'classnames';

import FlexContainer from 'src/components/FlexContainer';

import './Card.style.scss';

function Card({
  as,
  headAction,
  action,
  secondary,
  children,
  title,
}) {
  const titleClassName = classNames('kit-card__title', { 'kit-card__title--secondary': secondary });

  return (
    <FlexContainer as={as} className="kit-card" column>
      <FlexContainer className="kit-card__head" alignCenter>
        <h4 className={titleClassName}>{title}</h4>
        {headAction}
      </FlexContainer>
      <div className="kit-card__content">
        {children}
      </div>
      {action}
    </FlexContainer>
  );
}

Card.defaultProps = {
  as: 'div',
  headAction: null,
  action: null,
  secondary: false,
  children: null,
  title: undefined,
};

Card.propTypes = {
  as: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  headAction: PropTypes.node,
  action: PropTypes.node,
  secondary: PropTypes.bool,
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Card;
