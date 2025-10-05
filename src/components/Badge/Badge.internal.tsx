import styled from "styled-components";

interface StyledBadgeProps {
  $size: "small" | "large";
  $isInverted?: boolean;
}

export const StyledBadge = styled.div<StyledBadgeProps>`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.$size === "large" ? "flex-start" : "center"};
  gap: ${(props) => (props.$size === "large" ? "0.8rem" : "0.2rem")};
  border-radius: ${(props) => (props.$size === "large" ? "100px" : "unset")};
  border: ${(props) => (props.$size === "large" ? "unset" : "1px solid #333")};
  padding: ${(props) => (props.$size === "large" ? "1.2rem" : "0.2rem")};
  font-weight: 800;
  background-color: ${(props) =>
    props.$isInverted ? "#333" : props.$size === "large" ? "#eee" : "#fff"};

  ${(props) =>
    props.$size === "small" &&
    `
    span {
    color: ${props.$isInverted ? "#fff" : "#333"};
    font-size: 0.8rem;
  }
    `}
`;
