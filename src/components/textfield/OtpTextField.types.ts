import { TextFieldProps } from "@mui/material/TextField"


export type OtpTextFieldProps = TextFieldProps & {
    value: string | undefined
    index: number,
    handleChange: (value: string, index: number, forward: boolean) => void,
    handlePaste: (value: string) => void
};



export type MuiTextFieldProps = Omit<TextFieldProps, "value" | "onChange" | "onPaste" | "type">
