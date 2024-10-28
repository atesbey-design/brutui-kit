import styled from 'styled-components';
import { PopoverProps, PopoverVariant } from './Popover.types';
import { colorPalette } from '../../color.type';

const PopoverVariants: Record<PopoverVariant, {
  bgColor: string;
  textColor: string;
  borderColor: string;
}> = {
  default: {
    bgColor: 'white',
    textColor: colorPalette.black[0],
    borderColor: colorPalette.black[0]
  },
  primary: {
    bgColor: colorPalette.blue[4],
    textColor: 'white',
    borderColor: colorPalette.black[0]
  },
  secondary: {
    bgColor: colorPalette.purple[0],
    textColor: 'white',
    borderColor: colorPalette.black[0]
  },
  success: {
    bgColor: colorPalette.green[0],
    textColor: colorPalette.black[0],
    borderColor: colorPalette.black[0]
  },
  warning: {
    bgColor: colorPalette.yellow[0],
    textColor: colorPalette.black[0],
    borderColor: colorPalette.black[0]
  },
  danger: {
    bgColor: colorPalette.red[0],
    textColor: 'white',
    borderColor: colorPalette.black[0]
  }
};

export const PopoverWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const TriggerWrapper = styled.button`
  font-weight: bold;
  transition: all 0.2s;
  cursor: pointer;
  background: white;
  color: black;
  font-size: 1rem;
  border: none;
`;

export const PopoverContent = styled.div<Partial<PopoverProps>>`
  position: absolute;
  z-index: ${props => props.zIndex || 1000};
  min-width: 200px;
  max-width: 28rem;
  font-size: 1rem;
  line-height: 1.5;
  font-weight: bold;
  background: ${props => props.variant ? PopoverVariants[props.variant].bgColor : 'white'};
  color: ${props => props.variant ? PopoverVariants[props.variant].textColor : 'black'};
  border: 4px solid ${props => props.variant ? PopoverVariants[props.variant].borderColor : 'black'};
  padding: 1rem;
  box-shadow: 4px 4px 0px 0px rgba(0,0,0,1);

  ${props => {
    switch(props.position) {
      case 'top':
        return `
          bottom: 100%;
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'bottom':
        return `
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'left':
        return `
          right: 100%;
          top: 50%;
          transform: translateY(-50%);
        `;
      case 'right':
        return `
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
        `;
      default:
        return `
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
        `;
    }
  }}

  .header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 0.5rem;

    h3 {
      font-size: 1.25rem;
      font-weight: bold;
    }
  }

  .content {
    font-size: 1rem;
    line-height: 1.5;
  }
`;

export const PopoverCloseButton = styled.button<{ variant?: PopoverVariant }>`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: 2px solid currentColor;
  border-radius: 4px;
  color: inherit;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  padding: 0;
  transition: all 0.2s ease;

  &:hover {
    background: currentColor;
    color: ${props => props.variant ? PopoverVariants[props.variant].bgColor : 'white'};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px currentColor;
  }
`;
