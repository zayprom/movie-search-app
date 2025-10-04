import styled from "styled-components";

interface StyledTextProps {
  $size?: "xsmall" | "small" | "medium";
  $color?: "dark" | "red";
  $isItalic?: boolean;
  $weight?: "medium" | "bold";
}

export const StyledText = styled.p<StyledTextProps>`
  font-size: ${(props) =>
    props.$size === "xsmall"
      ? "0.6rem"
      : props.$size === "small"
      ? "0.8rem"
      : props.$size === "medium"
      ? "1.2rem"
      : "1.2rem"};
  font-weight: ${(props) =>
    props.$weight === "bold"
      ? "800"
      : props.$weight === "medium"
      ? "700"
      : "unset"};
  color: ${(props) =>
    props.$color === "dark"
      ? "#333"
      : props.$color === "red"
      ? "#c0392b"
      : "#333"};
  font-style: ${(props) => (props.$isItalic ? "italic" : "unset")};
`;
