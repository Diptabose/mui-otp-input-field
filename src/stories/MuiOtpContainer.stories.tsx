import { StoryFn, Meta } from "@storybook/react";
import { MuiOtp } from "../components/container";
import React from "react";

export default {
  title: "MuiOTP",
  component: MuiOtp,
} as Meta<typeof MuiOtp>;

const Template: StoryFn<typeof MuiOtp> = (args) => <MuiOtp {...args} />;

export const OTPTest = Template.bind({});

function handleOTP(otp: string) {
  console.log("The otp is", otp);
}

OTPTest.args = {
  length: 6,
  onChange: (otp) => {
    console.log("The otp is ", otp);
  },
  seperator: <>-</>,
  type: "number",
};
