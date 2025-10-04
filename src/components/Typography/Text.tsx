import type { ComponentPropsWithRef } from "react";
import { StyledText } from "./Text.internal";

interface TextProps extends ComponentPropsWithRef<"p"> {
  $size?: "xsmall" | "small" | "medium";
  $color?: "dark" | "red";
  $isItalic?: boolean;
  $weight?: "medium" | "bold";
  children: React.ReactNode;
}

export const Text = (props: TextProps) => {
  return (
    <StyledText
      {...props}
      $weight={props.$weight}
      $isItalic={props.$isItalic}
      $size={props.$size}
      $color={props.$color}
    >
      {props.children}
    </StyledText>
  );
};
