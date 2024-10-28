import styled, { css } from 'styled-components';
import { InputProps } from './Input.types';
import { colorPalette } from '../../color.type';

const colors = {
  primary: colorPalette.blue[0],
  success: colorPalette.green[0],
  danger: colorPalette.red[0],
  info: colorPalette.blue[2],
  warning: colorPalette.yellow[0],
  neutral: colorPalette.black[0],
  white: colorPalette.gray[4],
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
  border: 4px solid #000000;
  border-radius: 4px;
  background-color: #FFFFFF;
  color: ${colors.neutral};
  font-size: 1rem;
  outline: none;
  transition: box-shadow 0.2s ease-in-out;

  &::placeholder {
    color: #666666;
    font-weight: bold;
  }

  ${({ validationState }) =>
    validationState &&
    css`
      border-color: ${validationState === 'success' ? colors.success : colors.danger};
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: ${colorPalette.gray[3]};
      color: ${colorPalette.gray[1]};
      cursor: not-allowed;
    `}

  &:focus {
    box-shadow: 0 0 0 4px ${colorPalette.blue[4]};
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
