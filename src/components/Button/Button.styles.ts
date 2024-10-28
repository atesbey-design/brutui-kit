import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';
import { colorPalette } from '../../color.type';

const baseButtonStyles = css`
  font-weight: bold;
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  transition: all 0.2s ease;
  border: 4px solid #000000;
  box-shadow: 4px 4px 0px #000000;
  &:hover {
    transform: translate(2px, 2px);
    box-shadow: 2px 2px 0px #000000;
  }
`;

const variantStyles = {
  default: css`
    ${baseButtonStyles}
    background-color: #FFFFFF;
    color: #000000;
  `,
  primary: css`
    ${baseButtonStyles}
    background-color: #3B82F6;
    color: #FFFFFF;
  `,
  secondary: css`
    ${baseButtonStyles}
    background-color: #A855F7;
    color: #FFFFFF;
  `,
  destructive: css`
    ${baseButtonStyles}
    background-color: #EF4444;
    color: #FFFFFF;
  `,
  outline: css`
    ${baseButtonStyles}
    background-color: transparent;
    color: #000000;
  `,
  ghost: css`
    ${baseButtonStyles}
    background-color: transparent;
    border-color: transparent;
    box-shadow: none;
    &:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  `,
  link: css`
    ${baseButtonStyles}
    background: none;
    border: none;
    box-shadow: none;
    text-decoration: underline;
    padding: 0;
    color: #3B82F6;
  `,
  brutal: css`
    ${baseButtonStyles}
    background-color: #FFFFFF;
    border-width: 4px;
  `,
  neobrutal: css`
    ${baseButtonStyles}
    background-color: #FFFFFF;
    border-width: 6px;
    box-shadow: 6px 6px 0px #000000;
  `,
  success: css`
    ${baseButtonStyles}
    background-color: #4ADE80;
    color: #000000;
  `,
  warning: css`
    ${baseButtonStyles}
    background-color: #FCD34D;
    color: #000000;
  `,
  error: css`
    ${baseButtonStyles}
    background-color: #EF4444;
    color: #FFFFFF;
  `,
  info: css`
    ${baseButtonStyles}
    background-color: #3B82F6;
    color: #FFFFFF;
  `,
  custom: css`
    ${baseButtonStyles}
    background-color: #A855F7;
    color: #FFFFFF;
  `
};

export const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  ${(props) => {
    const variant = props.variant || 'primary';
    if (variant in variantStyles) {
      return variantStyles[variant as keyof typeof variantStyles];
    }
    return variantStyles.primary;
  }}
  border-radius: 0;
  position: relative;
  font-family: 'Space Mono', monospace;
  letter-spacing: ${props => props.letterSpacing || 0.5}px;
  line-height: ${props => props.lineHeight || 1.5};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: ${props => props.fontWeight || 900};
  font-size: ${props => props.fontSize || 16}px;
  text-transform: ${props => props.textTransform || 'none'};
  ${props => props.maxLines && css`
    display: -webkit-box;
    -webkit-line-clamp: ${props.maxLines};
    -webkit-box-orient: vertical;
  `}
  ${props => props.customDimensions && css`
    ${props.customDimensions.height && css`height: ${props.customDimensions.height}px;`}
    ${props.customDimensions.padding && css`
      padding: ${props.customDimensions.padding.vertical}px ${props.customDimensions.padding.horizontal}px;
    `}
  `}
  ${props => props.style && Object.entries(props.style).map(([key, value]) => css`${key}: ${value};`)}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none !important;
    box-shadow: none;
    filter: grayscale(100%);
    animation: none;

    &:hover {
      transform: none !important;
      box-shadow: none;
      background-color: inherit;
      color: inherit;
    }
  }
`;
