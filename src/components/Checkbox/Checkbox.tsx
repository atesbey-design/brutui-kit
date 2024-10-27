import React, { useCallback } from 'react';
import { CheckboxProps, CheckboxState } from './Checkbox.types';
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  CheckboxLabel
} from './Checkbox.styles';

export const Checkbox: React.FC<CheckboxProps> = ({
  label,
  checked = false,
  indeterminate = false,
  onChange,
  disabled = false,
  required = false,
  className
}) => {
  const getCheckboxState = useCallback((): CheckboxState => {
    if (indeterminate) return 'indeterminate';
    return checked ? 'checked' : 'unchecked';
  }, [checked, indeterminate]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange(event.target.checked);
    }
  };

  return (
    <CheckboxContainer 
      className={className}
      aria-disabled={disabled}
    >
      <HiddenCheckbox
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        required={required}
      />
      <StyledCheckbox
        state={getCheckboxState()}
        disabled={disabled}
      />
      <CheckboxLabel required={required}>
        {label}
      </CheckboxLabel>
    </CheckboxContainer>
  );
};

export default Checkbox;
