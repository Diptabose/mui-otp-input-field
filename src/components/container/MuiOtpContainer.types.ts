

import { CSSProperties, ReactNode, } from 'react';
import { MuiTextFieldProps } from "../textfield"

export type InputTypes = "text" | "number" | "password"

export interface MuiOtpContainerProps {
    length: number
    seperator?: ReactNode
    onChange?: (otp: string) => void
    onComplete?: (otp: string) => void
    value?: string | number
    containerStyles?: CSSProperties,
    wrapperStyles?: CSSProperties,
    MuiTextFieldProps?: MuiTextFieldProps
    type?: InputTypes,
    enableFocus?: boolean // Default true
}

