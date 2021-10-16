import PropTypes from 'prop-types';
import classNames from 'classnames';

import FlexContainer from 'src/components/FlexContainer';

import Errors from './components/Errors';
import Title from './components/Title';

import './TextInput.style.scss';

function TextInput({
  className,
  errors,
  title,
  value,
  onChange,
  id,
  placeholder,
  renderHint,
  type,
}) {
  function handleChange({
    target: {
      value: newValue,
    },
  }) {
    onChange(newValue);
  }

  const blockClassName = classNames('kit-input', className);

  return (
    <FlexContainer className={blockClassName} column>
      <FlexContainer className="kit-input__head">
        <Title id={id}>{title}</Title>
        {renderHint()}
      </FlexContainer>
      <input
        id={id}
        className="kit-input__controller"
        placeholder={placeholder}
        type={type}
        onChange={handleChange}
        value={value}
      />
      <Errors errors={errors} />
    </FlexContainer>
  );
}

TextInput.defaultProps = {
  className: undefined,
  errors: [],
  title: undefined,
  value: undefined,
  placeholder: undefined,
  type: 'text',
  renderHint: () => null,
};

TextInput.propTypes = {
  className: PropTypes.string,
  errors: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  renderHint: PropTypes.func,
  type: PropTypes.string,
};

export default TextInput;
