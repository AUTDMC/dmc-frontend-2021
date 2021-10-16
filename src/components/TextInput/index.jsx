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

  const hasError = errors?.length > 0;
  const blockClassName = classNames('kit-input', className);
  const inputClassName = classNames('kit-input__controller', { 'kit-input__controller--invalid': hasError });

  return (
    <FlexContainer className={blockClassName} column>
      <FlexContainer className="kit-input__head">
        <Title id={id}>{title}</Title>
        {renderHint()}
      </FlexContainer>
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className={inputClassName}
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
