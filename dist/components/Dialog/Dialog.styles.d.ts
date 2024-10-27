/// <reference types="react" />
import { DialogProps } from './Dialog.types';
export declare const DialogOverlay: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    isOpen: boolean;
    style?: import("react").CSSProperties | undefined;
}>> & string;
export declare const DialogContainer: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    size?: DialogProps['size'];
    draggable?: boolean | undefined;
    minWidth?: number | undefined;
    minHeight?: number | undefined;
    isCritical?: boolean | undefined;
    style?: import("react").CSSProperties | undefined;
}>> & string;
export declare const DialogHeader: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    isCritical?: boolean | undefined;
    style?: import("react").CSSProperties | undefined;
}>> & string;
export declare const DialogTitle: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, never>> & string;
export declare const DialogContent: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    style?: import("react").CSSProperties | undefined;
}>> & string;
export declare const DialogFooter: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").HTMLAttributes<HTMLDivElement>, HTMLDivElement>, {
    style?: import("react").CSSProperties | undefined;
}>> & string;
export declare const DialogButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components/dist/types").Substitute<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, {
    variant: 'primary' | 'secondary' | 'tertiary';
    disabled?: boolean | undefined;
}>> & string;
export declare const CloseButton: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, never>> & string;
export declare const DialogImage: import("styled-components/dist/types").IStyledComponentBase<"web", import("styled-components").FastOmit<import("react").DetailedHTMLProps<import("react").ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, never>> & string;
