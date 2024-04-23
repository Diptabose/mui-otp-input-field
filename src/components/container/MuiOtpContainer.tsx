import React, { Fragment, useState } from "react";
import { useFocus, useInitialFocus } from "../../hooks";
import OtpTextField from "../textfield";
import { MuiOtpContainerProps } from "./MuiOtpContainer.types";
import { mutateString } from "../../utils";

export const MuiOtp = ({
  length,
  value = "",
  onChange,
  onComplete,
  seperator,
  containerStyles,
  wrapperStyles,
  MuiTextFieldProps,
  enableFocus = true,
  type = "text",
}: MuiOtpContainerProps) => {
  const [otp, setOtp] = useState<string>(value.toString());

  useInitialFocus({
    enable: enableFocus,
  });

  const { focus } = useFocus({
    enable: enableFocus,
  });

  function handleChange(value: string, index: number, forward: boolean) {
    value = value.slice(-1) ?? "";
    const mutatedString = mutateString(otp, value, index);
    setOtp(mutatedString);
    const nextFocusedIndex = mutatedString.length;
    focus(nextFocusedIndex);
    onChange && onChange(mutatedString);
    if (mutatedString.length === length) {
      onComplete && onComplete(mutatedString);
    }
  }

  function handlePaste(value: string) {
    // Check the validity of the inputs and put those inputs which are valid.
    setOtp(value.slice(0, length));
  }

  // function handleOnKeyDown(event: any) {
  //   const e = event as KeyboardEvent;
  //   if (e.key === "Backspace" && otp.length >= 1) {
  //     const value = otp;
  //     const length = value.length;
  //     const focusingIndex = length - 1;
  //     if (otp[focusingIndex]) {
  //       const updatedValue = value.slice(0, focusingIndex);
  //       focus(focusingIndex);
  //       setOtp(updatedValue);
  //       onChange && onChange(updatedValue);
  //     }
  //   }
  // }

  return (
    <div
      id="otp-container"
      style={{
        ...containerStyles,
        display: "flex",
        gap: "5px",
        alignItems: "center",
      }}
      //onKeyDown={handleOnKeyDown}
    >
      {Array.from({ length }).map((_, index) => {
        return (
          <Fragment key={index}>
            <OtpTextField
              {...MuiTextFieldProps}
              index={index}
              handleChange={handleChange}
              handlePaste={handlePaste}
              value={otp[index]}
              type={type}
            />
            {index !== length - 1 && seperator}
          </Fragment>
        );
      })}
    </div>
  );
};
