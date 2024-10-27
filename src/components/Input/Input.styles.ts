import styled, { css } from 'styled-components';
import { InputProps } from './Input.types';

const colors = {
  primary: '#4B59CD',
  success: '#28a745',
  danger: '#dc3545',
  info: '#17a2b8',
  warning: '#ffc107',
  neutral: '#1D1D1C',
  white: '#FEFEFE',
};

const sizes = {
  small: '8px 12px',
  medium: '10px 16px',
  large: '12px 20px',
};

const inputBaseStyles = css<InputProps>`
  width: 100%;
  max-width: ${({ size }) => (size === 'small' ? '150px' : size === 'large' ? '350px' : '250px')};
  padding: ${({ size }) => (size ? sizes[size] : sizes.medium)};
  border: 2px solid ${colors.neutral};
  border-radius: 4px;
  background-color: ${colors.white};
  color: ${colors.neutral};
  font-size: 1rem;
  outline: none;
  transition: box-shadow 0.2s ease-in-out;

  ${({ validationState }) =>
    validationState &&
    css`
      border-color: ${validationState === 'success' ? colors.success : colors.danger};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: #e0e0e0;
      color: #9e9e9e;
      cursor: not-allowed;
    `}

  &:focus {
    box-shadow: 0 0 0 4px rgba(75, 89, 205, 0.3);
  }

  &:hover {
    box-shadow: 0 0 0 2px ${colors.primary};
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
`;

export const Label = styled.label<InputProps>`
  font-size: 1rem;
  font-weight: bold;
  color: ${colors.neutral};
  ${({ inlineLabel }) =>
    inlineLabel &&
    css`
      display: flex;
      align-items: center;
      gap: 8px;
    `}
`;

export const HelperText = styled.span<InputProps>`
  font-size: 0.875rem;
  color: ${({ validationState }) =>
    validationState === 'error' ? colors.danger : validationState === 'success' ? colors.success : colors.info};
`;

export const InputField = styled.input<InputProps>`
  ${inputBaseStyles}
`;

export const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  cursor: pointer;
`;

export const LeadingText = styled.span`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  color: ${colors.neutral};
`;

export const TrailingText = styled.span`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: ${colors.neutral};
`;

export const InputContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;
`;
