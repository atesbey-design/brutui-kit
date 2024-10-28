import styled from 'styled-components';
import { CheckboxState } from './Checkbox.types';
import { colorPalette } from '../../color.type';

export const CheckboxContainer = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
  gap: 8px;
  
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
`;

export const StyledCheckbox = styled.div<{
  state: CheckboxState;
  disabled?: boolean;
}>`
  width: 24px;
  height: 24px;
  border: 3px solid ${colorPalette.black[0]};
  background: ${props => props.state === 'checked' ? colorPalette.black[0] : colorPalette.gray[4]};
  position: relative;
  transition: all 0.2s ease;
  box-shadow: 4px 4px 0 ${colorPalette.black[0]};

  &:hover {
    transform: ${props => props.disabled ? 'none' : 'translate(-2px, -2px)'};
    box-shadow: ${props => props.disabled ? `4px 4px 0 ${colorPalette.black[0]}` : `6px 6px 0 ${colorPalette.black[0]}`};
  }

  &:active {
    transform: ${props => props.disabled ? 'none' : 'translate(2px, 2px)'};
    box-shadow: ${props => props.disabled ? `4px 4px 0 ${colorPalette.black[0]}` : `2px 2px 0 ${colorPalette.black[0]}`};
  }

  ${props => props.state === 'checked' && `
    &:after {
      content: '';
      position: absolute;
      left: 6px;
      top: 2px;
      width: 6px;
      height: 12px;
      border: solid ${colorPalette.gray[4]};
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  `}

  ${props => props.state === 'indeterminate' && `
    &:after {
      content: '';
      position: absolute;
      left: 4px;
      top: 8px;
      width: 12px;
      height: 2px;
      background: ${colorPalette.black[0]};
    }
  `}
`;

export const CheckboxLabel = styled.span<{ required?: boolean }>`
  font-family: 'Space Mono', monospace;
  font-size: 16px;
  font-weight: 500;
  color: ${colorPalette.black[0]};

  ${props => props.required && `
    &:after {
      content: '*';
      color: ${colorPalette.red[0]};
      margin-left: 4px;
    }
  `}
`;
