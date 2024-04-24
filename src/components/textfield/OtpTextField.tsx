import React, {
  ChangeEvent,
  FocusEvent,
  KeyboardEvent,
  ClipboardEvent,
  FormEvent,
  HTMLInputTypeAttribute,
} from "react";
import TextField from "@mui/material/TextField";
import { OtpTextFieldProps } from "./OtpTextField.types";
import "./OtpTextField.css";
import { useFocus } from "../../hooks";
import {
  getValidCharacters,
  isValid,
  split,
} from "../../utils/string/string.utils";
import { InputTypes } from "../container";

const OtpTextField = ({
  value,
  handleChange,
  handlePaste,
  index,
  inputProps,
  ...attr
}: OtpTextFieldProps) => {
  const { type } = attr;

  const { focus } = useFocus({
    enable: true,
  });

  const isNumeric = type === "number" || type === "tel";

  function handleOnChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    let value = event.target.value;
    if (isValid(isNumeric, value)) {
      const forward = value ? true : false;
      handleChange(value, index, forward);
    }
  }

  const handleOnPaste = (event: ClipboardEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.clipboardData?.getData("text");
    if (data) {
      const validData = getValidCharacters(isNumeric, data);
      if (validData.length > 0) {
        handlePaste(validData);
      }
    }
  };

  function handleOnFocus(event: FocusEvent<HTMLInputElement>) {
    event.preventDefault();
    const target = event.target;
    target.type = "text"; // A workaround to supress error regarding selection on type="number"
    target.select();
    target.type = type as HTMLInputTypeAttribute;
  }

  function handleOnKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    //Accessibility ArrowRight

    const forbiddenNumeric = ["Minus", "Period"];

    const forbiddenGeneric = ["ArrowUp", "ArrowDown"];

    // To prevent "-" from being entered in case of input
    if (forbiddenNumeric.includes(event.code) && isNumeric) {
      event.preventDefault();
    }

    if (forbiddenGeneric.includes(event.code)) {
      event.preventDefault();
    }

    if (event.key === "ArrowRight") {
      getSelection(event);
      return focus(index + 1);
    }

    // Accessibilty ArrowLeft
    if (event.key === "ArrowLeft") {
      getSelection(event);
      return focus(index - 1);
    }

    // Handle Backspace
    if (event.key === "Backspace" && (value === "" || value === undefined)) {
      return focus(index - 1);
    }
  }

  function getSelection(event: KeyboardEvent<HTMLDivElement>) {
    event.preventDefault();
    const target = event.target as HTMLInputElement;
    target.type = "text"; // A workaround to supress error regarding selection on type="number"
    target.select();
    target.type = type as HTMLInputTypeAttribute;
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
      inputMode={type === "number" ? "numeric" : "text"}
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
