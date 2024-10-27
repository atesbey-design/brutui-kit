import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';


const variantStyles = {
  primary: css`
    background-color: #000;
    color: #fff;
    border: 4px solid #000;
    box-shadow: 8px 8px 0px #FF00FF;
    transform: translate(0, 0);
    transition: all 0.2s;
    font-weight: 900;
    text-transform: uppercase;

    &:hover {
      transform: translate(4px, 4px);
      box-shadow: 4px 4px 0px #FF00FF;
      background-color: #FF00FF;
      color: #000;
    }
  `,
  secondary: css`
    background-color: #fff;
    color: #000;
    border: 4px solid #000;
    box-shadow: 8px 8px 0px #00FFFF;
    transform: translate(0, 0);
    transition: all 0.2s;
    font-weight: 900;
    text-transform: uppercase;

    &:hover {
      transform: translate(4px, 4px);
      box-shadow: 4px 4px 0px #00FFFF;
    }
  `,
  destructive: css`
    background-color: #FF0000;
    color: #fff;
    border: 4px solid #000;
    box-shadow: 8px 8px 0px #000;
    transform: translate(0, 0);
    transition: all 0.2s;
    font-weight: 900;
    animation: shake 0.5s ease-in-out infinite;

    @keyframes shake {
      0%, 100% { transform: translate(0, 0); }
      25% { transform: translate(-2px, 0); }
      75% { transform: translate(2px, 0); }
    }

    &:hover {
      transform: translate(4px, 4px);
      box-shadow: 4px 4px 0px #000;
    }
  `,
  outline: css`
    background-color: transparent;
    color: #000;
    border: 4px solid #000;
    box-shadow: 8px 8px 0px #000;
    transform: translate(0, 0);
    transition: all 0.2s;
    font-weight: 900;

    &:hover {
      transform: translate(4px, 4px);
      box-shadow: 4px 4px 0px #000;
      background-color: #000;
      color: #fff;
    }
  `,
  ghost: css`
    background-color: rgba(255, 255, 255, 0.1);
    color: #000;
    border: 4px solid rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(8px);
    box-shadow: 8px 8px 0px rgba(0, 0, 0, 0.1);
    transform: translate(0, 0);
    transition: all 0.2s;
    font-weight: 900;

    &:hover {
      transform: translate(4px, 4px);
      box-shadow: 4px 4px 0px rgba(0, 0, 0, 0.1);
      background-color: rgba(255, 255, 255, 0.2);
    }
  `,
  link: css`
    background-color: transparent;
    color: #000;
    border: none;
    text-decoration: underline;
    text-decoration-thickness: 4px;
    text-decoration-color: #000;
    padding: 0;
    font-weight: 900;
    transition: all 0.2s;

    &:hover {
      text-decoration-thickness: 8px;
      transform: translateY(-2px);
    }
  `,
  brutal: css`
    background-color: #fff;
    color: #000;
    border: 8px solid #000;
    box-shadow: 12px 12px 0px #000;
    transform: translate(0, 0);
    transition: all 0.1s;
    font-weight: 900;
    text-transform: uppercase;

    &:hover {
      transform: translate(6px, 6px);
      box-shadow: 6px 6px 0px #000;
    }
  `,
  neobrutal: css`
    background-color: #FF00FF;
    color: #000;
    border: 8px solid #000;
    box-shadow: 12px 12px 0px #000, 24px 24px 0px #FF00FF;
    transform: translate(0, 0);
    transition: all 0.2s;
    font-weight: 900;

    &:hover {
      transform: translate(6px, 6px);
      box-shadow: 6px 6px 0px #000, 18px 18px 0px #FF00FF;
    }
  `,
  pixelated: css`
    background-color: #000;
    color: #fff;
    border: 4px solid #000;
    box-shadow: 8px 8px 0px #000;
    transform: translate(0, 0);
    transition: none;
    font-family: 'Press Start 2P', cursive;
    font-weight: 900;
    image-rendering: pixelated;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);

    &:hover {
      background-color: #fff;
      color: #000;
      transform: translate(2px, 2px);
      box-shadow: 6px 6px 0px #000;
    }
  `,
  glitch: css`
    background-color: #000;
    color: #fff;
    border: 4px solid #FF00FF;
    box-shadow: 8px 8px 0px #00FFFF;
    transform: translate(0, 0);
    transition: all 0.1s;
    font-weight: 900;
    position: relative;

    &:before, &:after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: inherit;
    }

    &:before {
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
      transform: translate(-4px, -4px);
      background: #FF00FF;
    }

    &:after {
      clip-path: polygon(0 45%, 100% 45%, 100% 100%, 0 100%);
      transform: translate(4px, 4px);
      background: #00FFFF;
    }

    &:hover {
      transform: translate(4px, 4px);
      box-shadow: 4px 4px 0px #00FFFF;
    }
  `,
  retro: css`
    background-color: #000;
    color: #fff;
    border: 4px solid #fff;
    box-shadow: 8px 8px 0px #000;
    transform: translate(0, 0);
    transition: all 0.2s;
    font-family: 'VT323', monospace;
    font-weight: 900;
    text-transform: uppercase;
    filter: blur(0.5px);

    &:hover {
      transform: translate(4px, 4px);
      box-shadow: 4px 4px 0px #000;
      filter: blur(1px) brightness(150%);
    }
  `,
  gradient: css`
    background: linear-gradient(45deg, #FF00FF, #00FFFF, #FFFF00);
    background-size: 200% 200%;
    color: #000;
    border: 4px solid #000;
    box-shadow: 8px 8px 0px #000;
    transform: translate(0, 0);
    transition: all 0.2s;
    font-weight: 900;
    animation: gradient 3s ease infinite;

    @keyframes gradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    &:hover {
      transform: translate(4px, 4px);
      box-shadow: 4px 4px 0px #000;
      animation-duration: 1s;
    }
  `,
  warning: css`
    background-color: #FF8800;
    color: #000;
    border: 4px solid #000;
    box-shadow: 8px 8px 0px #000;
    transform: translate(0, 0);
    transition: all 0.2s;
    font-weight: 900;
    animation: pulse 2s infinite;

    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.05); }
      100% { transform: scale(1); }
    }

    &:hover {
      transform: translate(4px, 4px);
      box-shadow: 4px 4px 0px #000;
      animation: none;
    }
  `,
  success: css`
    background-color: #00FF00;
    color: #000;
    border: 4px solid #000;
    box-shadow: 8px 8px 0px #000;
    transform: translate(0, 0);
    transition: all 0.2s;
    font-weight: 900;

    &:hover {
      transform: translate(4px, 4px);
      box-shadow: 4px 4px 0px #000;
    }
  `
};

const sizeStyles = {
  small: css`
    height: 32px;
    padding: 8px 16px;
    font-size: 14px;
  `,
  medium: css`
    height: 40px;
    padding: 12px 24px;
    font-size: 16px;
  `,
  large: css`
    height: 48px;
    padding: 16px 32px;
    font-size: 20px;
  `
};
export const StyledButton = styled.button<ButtonProps>`
  cursor: pointer;
  ${(props) => variantStyles[props.variant || 'primary']}
  ${(props) => {
    const size = props.size || 'medium';
    if (size === 'tiny' || size === 'xlarge' || size === 'custom') {
      return sizeStyles.medium;
    }
    return sizeStyles[size];
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
