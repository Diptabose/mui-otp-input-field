import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import { OtpTextFieldProps } from "./OtpTextField.types";
import "./OtpTextField.css";

const OtpTextField = ({
  value,
  handleChange,
  handlePaste,
  index,
  inputProps,
  ...attr
}: OtpTextFieldProps) => {
  function handleOnChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    let value = event.target.value;
    const forward = value ? true : false;
    handleChange(value, index, forward);
  }

  const handleOnPaste = (event: any) => {
    event = event as ClipboardEvent;
    const data = event.clipboardData?.getData("text");
    if (data) {
      handlePaste(data);
    }
  };

  return (
    <TextField
      autoComplete="off"
      value={value ?? ""}
      className="no-spinners"
      onChange={handleOnChange}
      {...attr}
      onPaste={handleOnPaste}
      inputProps={{
        ...inputProps,
        style: {
          textAlign: "center",
          ...inputProps?.style,
        },

        maxLength: 1,
      }}
    />
  );
};

export default OtpTextField;
