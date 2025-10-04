import type { ComponentPropsWithRef } from "react";
import { StyledInput, InputWrapper } from "./Input.internal";

interface InputProps extends ComponentPropsWithRef<"input"> {
  name: string;
  placeholder: string;
}

export const Input = (props: InputProps) => {
  return (
    <InputWrapper>
      <StyledInput
        {...props}
        name={props.name}
        placeholder={props.placeholder}
      />
    </InputWrapper>
  );
};
