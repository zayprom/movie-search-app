import styled from "styled-components";

interface StyledWrapperProps {
  $direction: "row" | "column";
  $gap?: "xsmall" | "small" | "medium";
  $align?: "center" | "flex-start" | "stretch";
  $justifyContent?: "center" | "flex-start" | "space-between";
  $hasFullViewportHeight?: boolean;
  $isFullWidth?: boolean;
  $isSmallScreen?: boolean;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
  display: flex;
  flex-direction: ${(props) => (props.$direction === "row" ? "row" : "column")};
  min-height: ${(props) => (props.$hasFullViewportHeight ? "100dvh" : "unset")};
  justify-content: ${(props) =>
    props.$justifyContent === "center"
      ? "center"
      : props.$justifyContent === "flex-start"
      ? "flex-start"
      : props.$justifyContent === "space-between"
      ? "space-between"
      : "unset"};
  align-items: ${(props) =>
    props.$align === "center"
      ? "center"
      : props.$align === "flex-start"
      ? "flex-start"
      : props.$align === "stretch"
      ? "stretch"
      : "unset"};
  width: ${(props) => (props.$isFullWidth ? "100%" : "unset")};
  gap: ${(props) =>
    props.$gap === "xsmall"
      ? "0.2rem"
      : props.$gap === "small"
      ? "0.4rem"
      : props.$gap === "medium"
      ? "2rem"
      : "unset"};

  ${(props) =>
    props.$isSmallScreen &&
    `@media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }`}
`;
