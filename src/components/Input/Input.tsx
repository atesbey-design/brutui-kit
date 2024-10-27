import React, { useState } from 'react';
import { InputProps } from './Input.types';
import {
  InputWrapper,
  Label,
  HelperText,
  InputField,
  IconWrapper,
  LeadingText,
  TrailingText,
  InputContainer,
} from './Input.styles';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = 'text',
  value = '',
  onChange,
  disabled,
  validationState,
  helperText,
  required,
  icon,
  showPasswordToggle,
  autoFill,
  leadingText,
  trailingText,
  size = 'medium',
  inlineLabel,
  className,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [inputType, setInputType] = useState<'text' | 'password'>(type as 'text' | 'password');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(e); // Pass the entire event object instead of just the string value
    }
  };

  const handleTogglePassword = () => {
    setInputType((prevType: 'text' | 'password') => (prevType === 'password' ? 'text' : 'password'));
  };

  return (
    <InputWrapper className={className}>
      {label && <Label inlineLabel={inlineLabel}>{label} {required && '*'}</Label>}
      <InputContainer>
        {leadingText && <LeadingText>{leadingText}</LeadingText>}
        <InputField
          type={inputType}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          disabled={disabled}
          validationState={validationState}
          autoComplete={autoFill ? 'on' : 'off'}
          size={size}
        />
        {icon && <IconWrapper>{icon}</IconWrapper>}
        {showPasswordToggle && type === 'password' && (
          <IconWrapper onClick={handleTogglePassword}>
            {inputType === 'password' ? <AiFillEye /> : <AiFillEyeInvisible />}
          </IconWrapper>
        )}
        {trailingText && <TrailingText>{trailingText}</TrailingText>}
      </InputContainer>
      {helperText && <HelperText validationState={validationState}>{helperText}</HelperText>}
    </InputWrapper>
  );
};

export default Input;
