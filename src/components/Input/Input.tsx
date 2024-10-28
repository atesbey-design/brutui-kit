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
import { Eye, EyeOff } from 'lucide-react';

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
  autoFill,
  leadingText,
  trailingText,
  size = 'medium',
  inlineLabel,
  className,
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    if (onChange) {
      onChange(e);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputWrapper className={className}>
      {label && <Label inlineLabel={inlineLabel}>{label} {required && '*'}</Label>}
      <InputContainer>
        {leadingText && <LeadingText>{leadingText}</LeadingText>}
        <InputField
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          disabled={disabled}
          validationState={validationState}
          autoComplete={autoFill ? 'on' : 'off'}
          size={size}
        />
        {icon && <IconWrapper>{icon}</IconWrapper>}
        {type === 'password' && (
          <IconWrapper 
            onClick={togglePasswordVisibility}
            style={{ cursor: 'pointer', color: '#000000' }}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </IconWrapper>
        )}
        {trailingText && <TrailingText>{trailingText}</TrailingText>}
      </InputContainer>
      {helperText && <HelperText validationState={validationState}>{helperText}</HelperText>}
    </InputWrapper>
  );
};

export default Input;
