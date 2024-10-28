import styled, { css } from 'styled-components';
import { NotificationProps } from './Notification.types';
import { colorPalette } from '../../color.type';

const variantStyles = {
  default: css`
    background-color: white;
    color: ${colorPalette.black[0]};
  `,
  success: css`
    background-color: ${colorPalette.green[2]};
 color: ${colorPalette.black[0]};
    border-left: 10px solid ${colorPalette.green[0]};
  `,
  error: css`
    background-color: ${colorPalette.red[0]};
    color: white;
    border-left: 10px solid ${colorPalette.red[0]};
  `,
  warning: css`
    background-color: ${colorPalette.yellow[2]};
    color: ${colorPalette.black[0]};
    border-left: 10px solid ${colorPalette.yellow[0]};
  `,
  info: css`
    background-color: ${colorPalette.blue[0]};
    color: white;
    border-left: 10px solid ${colorPalette.blue[0]};
  `,
  custom: css`
    background-color: ${colorPalette.purple[0]};
    color: white;
    border-left: 10px solid ${colorPalette.purple[0]};
  `
};

export const NotificationWrapper = styled.div<NotificationProps>`
  width: ${props => props.width || '100%'};
  max-width: 28rem;
  padding: 1rem;
  border-radius: 8px;
  border: 2px solid #000000;
  box-shadow: 4px 4px 0px 0px rgba(0, 0, 0, 1);
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: ${props => props.alwaysOnTop ? 9999 : 1000};
  ${props => {
    switch(props.position) {
      case 'top-left':
        return 'top: 1rem; left: 1rem;';
      case 'top-right':
        return 'top: 1rem; right: 1rem;';
      case 'bottom-left':
        return 'bottom: 1rem; left: 1rem;';
      case 'bottom-right':
        return 'bottom: 1rem; right: 1rem;';
      case 'center':
        return 'top: 50%; left: 50%; transform: translate(-50%, -50%);';
      default:
        return 'top: 1rem; right: 1rem;';
    }
  }}
  ${({ variant = 'default' }) => variantStyles[variant]};
  ${props => {
    switch(props.animationType) {
      case 'fade':
        return css`
          animation: fade ${props.duration}s ease-in-out;
          @keyframes fade {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
        `;
      case 'slide':
        return css`
          animation: slide ${props.duration}s ease-in-out;
          @keyframes slide {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(0); }
          }
        `;
      case 'zoom':
        return css`
          animation: zoom ${props.duration}s ease-in-out;
          @keyframes zoom {
            0% { transform: scale(0); }
            100% { transform: scale(1); }
          }
        `;
      default:
        return '';
    }
  }}
`;

export const NotificationHeader = styled.div`
  display: flex;
  align-items: center;
  font-weight: 900;
  font-size: 1.5rem;
  gap: 0.5rem;
  justify-content: center;
  width: 100%;
  margin-bottom: 0.5rem;
  position: relative;
  padding-top: 1rem;
  text-align: center;
`;

export const NotificationCloseButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.25rem;
  font-size: 1.25rem;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 4px;
  transition: all 0.2s ease;
  position: absolute;
  top: 0;
  right: 0;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }
`;

export const NotificationContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: auto 0;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 900;
  padding: 0 1rem;

  h3 {
    font-size: 1.5rem;
    font-weight: 900;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.5;
    font-weight: 700;
    text-align: center;
  }

  span {
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const NotificationActions = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: auto;
`;

export const NotificationButton = styled.button<{variant?: 'accept' | 'reject' | 'neutral'}>`
  padding: 0.5rem 1rem;
  border: 2px solid #000000;
  cursor: pointer;
  font-weight: 900;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  transition: all 0.2s ease;

  ${props => {
    switch(props.variant) {
      case 'accept':
        return css`
          background-color: #4ADE80;
          color: #000000;
          &:hover {
            background-color: #22C55E;
          }
        `;
      case 'reject':
        return css`
          background-color: #EF4444;
          color: #FFFFFF;
          &:hover {
            background-color: #DC2626;
          }
        `;
      default:
        return css`
          background-color: #E5E7EB;
          color: #000000;
          &:hover {
            background-color: #D1D5DB;
          }
        `;
    }
  }}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const CountdownBar = styled.div<{duration: number}>`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 4px;
  background-color: rgba(0,0,0,0.2);
  width: 100%;
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background-color: currentColor;
    animation: countdown ${props => props.duration}s linear forwards;
  }

  @keyframes countdown {
    from {
      width: 100%;
    }
    to {
      width: 0%;
    }
  }
`;