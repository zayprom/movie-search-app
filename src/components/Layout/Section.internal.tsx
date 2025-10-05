import styled from "styled-components";

interface StyledSectionProps {
  $direction: "row" | "column";
  $align?: "center" | "flex-start";
  $justifyContent?: "flex-start";
  $isAutoWidth?: boolean;
  $hasGap?: boolean;
}

export const StyledSection = styled.section<StyledSectionProps>`
  width: ${(props) => (props.$isAutoWidth ? "auto" : "unset")};
  display: flex;
  flex-direction: ${(props) =>
    props.$direction === "column" ? "column" : "row"};
  align-items: ${(props) =>
    props.$align === "center"
      ? "center"
      : props.$align === "flex-start"
      ? "flex-start"
      : "unset"};
  justify-content: ${(props) =>
    props.$justifyContent === "flex-start" ? "flex-start" : "unset"};
  gap: ${(props) => (props.$hasGap ? "2.4rem" : "unset")};
`;
