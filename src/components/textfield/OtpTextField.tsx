import React, { ChangeEvent, FocusEvent, KeyboardEvent } from "react";
import TextField from "@mui/material/TextField";
import { OtpTextFieldProps } from "./OtpTextField.types";
import "./OtpTextField.css";
import { useFocus } from "../../hooks";

const OtpTextField = ({
  value,
  handleChange,
  handlePaste,
  index,
  inputProps,
  ...attr
}: OtpTextFieldProps) => {
  const { focus } = useFocus({
    enable: true,
  });

  const { type } = attr;

  const isNumeric = type === "number" || type === "tel";

  const isValid = (value: string) => {
    return isNumeric ? !isNaN(Number(value)) : typeof value === "string";
  };

  function handleOnChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    let value = event.target.value;
    if (isValid(value)) {
      const forward = value ? true : false;
      console.log(forward , index)
      handleChange(value, index, forward);
    }
  }

  const handleOnPaste = (event: any) => {
    event = event as ClipboardEvent;
    const data = event.clipboardData?.getData("text");
    if (data) {
      handlePaste(data);
    }
  };

  function handleOnFocus(event: FocusEvent<HTMLInputElement>) {
    const target = event.target;
    const { value } = target;

    target.value = "";
    target.value = value;
  }

  function handleOnKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    //Accessibility ArrowRight
    if (event.key === "ArrowRight") {
      focus(index + 1);
      return;
    }

    // Accessibilty ArrowLeft
    if (event.key === "ArrowLeft") {
      focus(index - 1);
      return;
    }

    // Handle Backspace
    if (event.key === "Backspace" && (value === "" || value === undefined)) {
      event.preventDefault();
      console.log("Inside the backspace")
      focus(index - 1);
    }
  }

  return (
    <TextField
      autoComplete="one-time-code"
      value={value ?? ""}
      className="no-spinners"
      onChange={handleOnChange}
      {...attr}
      onPaste={handleOnPaste}
      onFocus={handleOnFocus}
      onKeyDown={handleOnKeyDown}
      inputProps={{
        ...inputProps,
        style: {
          textAlign: "center",
          ...inputProps?.style,
        },

        //maxLength: 1,
      }}
    />
  );
};

export default OtpTextField;
