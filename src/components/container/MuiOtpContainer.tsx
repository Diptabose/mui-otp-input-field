import React, { Fragment, useState } from "react";
import { useFocus, useInitialFocus } from "../../hooks";
import OtpTextField from "../textfield";
import { MuiOtpContainerProps } from "./MuiOtpContainer.types";
import { getValidCharacters, mutateString } from "../../utils";

export const MuiOtp = ({
  length,
  value = "",
  onChange,
  onComplete,
  seperator,
  containerStyles,
  MuiTextFieldProps,
  enableFocus = true,
  type = "text",
}: MuiOtpContainerProps) => {
  const isNumeric = type === "number" || type === "tel";
  const [otp, setOtp] = useState<string>(
    getValidCharacters(isNumeric, value.toString())
  );

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

    const nextFocusedIndex = forward
      ? mutatedString.length
      : mutatedString?.length - 1;

    focus(nextFocusedIndex);
    onChange && onChange(mutatedString);
    if (mutatedString.length === length) {
      onComplete && onComplete(mutatedString);
    }
  }

  function handlePaste(value: string) {
    setOtp(value.slice(0, length));
  }

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
