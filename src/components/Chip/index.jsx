import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon, { SIZE as ICON_SIZE } from 'src/components/Icon';
import FlexContainer from 'src/components/FlexContainer';

import './Chip.style.scss';

function Chip({ title, iconName }) {
  const iconClassName = classNames('kit-chip__icon', { 'kit-chip__icon--no-offset': !title });

  return (
    <FlexContainer as="span" className="kit-chip" alignCenter justifyCenter>
      {iconName && <Icon className={iconClassName} name={iconName} outlined size={ICON_SIZE.XS} />}
      <span className="kit-chip__text">{title}</span>
    </FlexContainer>
  );
}

Chip.defaultProps = {
  iconName: undefined,
  title: undefined,
};

Chip.propTypes = {
  iconName: PropTypes.string,
  title: PropTypes.string,
};

export default Chip;
