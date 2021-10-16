import PropTypes from 'prop-types';

import './Title.style.scss';

function Title({ id, children }) {
  if (!children) {
    return null;
  }

  return <label className="kit-input__title" htmlFor={id}>{children}</label>;
}

Title.defaultProps = {
  children: null,
};

Title.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired,
};

export default Title;
