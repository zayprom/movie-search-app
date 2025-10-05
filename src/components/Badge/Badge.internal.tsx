import styled from "styled-components";

interface StyledBadgeProps {
  $kind: "small" | "large";
  $isInverted?: boolean;
}

export const StyledBadge = styled.div<StyledBadgeProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.$kind === "large" ? "flex-start" : "center"};
  gap: ${(props) => (props.$kind === "large" ? "0.8rem" : "0.2rem")};
  border-radius: ${(props) => (props.$kind === "large" ? "100px" : "unset")};
  border: ${(props) => (props.$kind === "large" ? "unset" : "1px solid #333")};
  padding: ${(props) => (props.$kind === "large" ? "1.2rem" : "0.2rem")};
  font-weight: 800;
  background-color: ${(props) =>
    props.$isInverted ? "#333" : props.$kind === "large" ? "#eee" : "#fff"};

  ${(props) =>
    props.$kind === "small" &&
    `
    span {
    color: ${props.$isInverted ? "#fff" : "#333"};
    font-size: 0.8rem;
  }
    `}
`;
