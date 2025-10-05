import { StyledWrapper } from "./LayoutWrapper.internal";

interface LayoutWrapperProps {
  $direction: "row" | "column";
  $gap?: "xsmall" | "small" | "medium";
  $align?: "center" | "flex-start" | "stretch";
  $justifyContent?: "center" | "flex-start" | "space-between";
  $isFullViewportHeight?: boolean;
  $isFullWidth?: boolean;
  $isSmallScreen?: boolean;
  $isAutoHeight?: boolean;
  children: React.ReactNode;
}

export const LayoutWrapper = (props: LayoutWrapperProps) => {
  return <StyledWrapper {...props}>{props.children}</StyledWrapper>;
};
