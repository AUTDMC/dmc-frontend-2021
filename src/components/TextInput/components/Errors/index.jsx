import PropTypes from 'prop-types';

import './Errors.style.scss';

function Errors({ errors }) {
  if (errors?.length === 0 || !Array.isArray(errors)) {
    return null;
  }

  const errorsItems = errors.map((error) => <li className="kit-input__error">{error}</li>);

  return (<ul>{errorsItems}</ul>);
}

Errors.defaultProps = {
  errors: [],
};

Errors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
};

export default Errors;
