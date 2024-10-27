import React from 'react';
import { ButtonProps } from './Button.types';
import { StyledButton } from './Button.styles';

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
  variant = 'primary',
  size = 'medium',
  loading = false,
  icon,
  tooltip,
  className,
  fontWeight = 400,
  fontSize = 16,
  letterSpacing = 0.5,
  textTransform = 'none',
  lineHeight = 1.5,
  maxLines,
  customDimensions,
}) => {
  // Convert size prop to match StyledButton size prop type
  const getButtonSize = (size: ButtonProps['size']): 'small' | 'medium' | 'large' => {
    switch(size) {
      case 'tiny':
        return 'small';
      case 'xlarge':
      case 'custom':
        return 'large';
      default:
        return size as 'small' | 'medium' | 'large';
    }
  };

  return (
    <StyledButton
      label={label}
      onClick={onClick}
      disabled={disabled || loading}
      variant={variant}
      size={getButtonSize(size)}
      title={tooltip}
      className={className}
      fontWeight={fontWeight}
      fontSize={fontSize}
      letterSpacing={letterSpacing}
      textTransform={textTransform}
      lineHeight={lineHeight}
      maxLines={maxLines}
      customDimensions={customDimensions}
    >
      {loading ? (
        <span className="spinner" />
      ) : (
        <>
          {icon && <span className="icon">{icon}</span>}
          {label}
        </>
      )}
    </StyledButton>
  );
};

export default Button;
