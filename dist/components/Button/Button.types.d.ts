/// <reference types="react" />
export interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link' | 'brutal' | 'neobrutal' | 'pixelated' | 'glitch' | 'retro' | 'gradient' | 'warning' | 'success';
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge' | 'custom';
    loading?: boolean;
    icon?: React.ReactNode;
    tooltip?: string;
    className?: string;
    fontWeight?: 300 | 400 | 500 | 700 | 900;
    fontSize?: 12 | 14 | 16 | 20 | 24;
    letterSpacing?: number;
    textTransform?: 'uppercase' | 'lowercase' | 'capitalize' | 'none';
    lineHeight?: number;
    maxLines?: number;
    customDimensions?: {
        height?: number;
        padding?: {
            vertical: number;
            horizontal: number;
        };
    };
}
