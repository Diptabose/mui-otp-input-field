<div align="center">
<h1>MUI OTP Input Field</h1>
  <p>An OTP input based on React library <a href="https://mui.com/">MUI</a></p>
</div>
<div align="center">

![license](https://img.shields.io/badge/license-MIT-blue)
![ts](https://img.shields.io/badge/Built_with-Typescript-blue)
![npm](https://img.shields.io/badge/npm-v1.1.0-blue)

</div>

## Installation

```terminal
// with npm
npm install mui-otp-input-field@latest
```

## Usage

```jsx
import { useState } from "react";
import { MuiOtp } from "mui-otp-input-field";

const MyComponent = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (newValue) => {
    setOtp(newValue);
  };

  return <MuiOtp value={otp} onChange={handleChange} />;
};
```

<!--## [Documentation](https://viclafouch.github.io/mui-otp-input/)-->

<!--## Changelog-->

<!--Go to [Github Releases](https://github.com/viclafouch/mui-otp-input/releases)-->

## TypeScript

The library is built with typescript.

## API Reference ( Props to the MuiOtp Component )

<table>
  <tr>
    <th>Name</th>
    <th>Type</th>
    <th>Required</th>
    <th>Default Value </th>
    <th> Description</th>
  </tr>
  <tr>
     <td>length</td>
     <td><i>number</i></td>
     <td>true</td>
     <td>none</td>
     <td>Indicates the no.of input boxes to be rendered.</td>
  </tr>
    <tr>
     <td>value</td>
     <td><i>string</i></td>
     <td>optional</td>
     <td>""</td>
     <td>A value to initialize the MuiOtp component. This is optional because the container component maintains a state for the inputs.</td>
  </tr>
    <tr>
     <td>onChange</td>
     <td><i>function</i></td>
     <td>optional</td>
     <td>none</td>
     <td>Called every time input changes.</td>
  </tr>
  <tr>
     <td>onComplete</td>
     <td><i>function</i></td>
     <td>optional</td>
     <td>none</td>
     <td>Called when the otp length satifies the provided length.</td>
  </tr>
    <tr>
     <td>seperator</td>
     <td><i>ReactNode</i></td>
     <td>optional</td>
     <td>none</td>
     <td>A React component to render between the inputs.</td>
  </tr>

  <tr>
     <td>type</td>
     <td><i>InputTypes</i></td>
     <td>optional</td>
     <td>text</td>
     <td>Traditional input types. This includes "text","number" and "password".</td>
  </tr>
    <tr>
     <td>enableFocus</td>
     <td><i>boolean</i></td>
     <td>optional</td>
     <td>true</td>
     <td>Allows auto focus of the next input when entered value in previous one.</td>
  </tr>

 <tr>
     <td>MuiTextFieldProps</td>
     <td><i>MuiTextFieldProps</i></td>
     <td>optional</td>
     <td><code>textAlign="center"</code></td>
     <td>The props to the underlying <a href="https://mui.com/material-ui/api/text-field/">MuiTextField</a>.</td>
  </tr>

   <tr>
     <td>containerStyles</td>
     <td><i>CSSProperties</i></td>
     <td>optional</td>
     <td><code>display:"flex", gap:"5px"</code></td>
     <td>The styles to the container encapsulating the input fields.</td>
  </tr>

  <tr>
     <td>wrapperStyles</td>
     <td><i>CSSProperties</i></td>
     <td>optional</td>
     <td><code>display:"flex", alignItems:"center", gap:"2px"</code></td>
     <td>The styles to the wrapper which is used when seperator is included.</td>
  </tr>
</table>


<h2>Hooks</h2>
<b>Note:</b> These hooks are used for internal purposes. External usage of this may lead to unexpected behaviour. Its highly suggested to turn off the enableFocus in the MuiOtp component before using these hooks.

<h3>useFocus</h3>
Returns a function named focus, to handle the focusing of the inputs based on index.

<h3>useInitialFocus</h3>
Used to focus the first input on load.

<b>Note:</b>
Default selector for these hooks is "otp-container"


<h3>🐛 Bugs</h3>

Please file an issue for bugs, missing documentation, or unexpected behavior.

<h3>💡 Feature Requests</h3>

Please raise an issue for any feature requests.

<h3>LICENSE</h3>

MIT
