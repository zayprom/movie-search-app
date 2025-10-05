import { StyledSection } from "./Section.internal";

interface SectionProps {
  $direction: "row" | "column";
  $align?: "center" | "flex-start";
  $justifyContent?: "flex-start";
  $isAutoWidth?: boolean;
  $hasGap?: boolean;
  children: React.ReactNode;
}

export const Section = (props: SectionProps) => {
  return <StyledSection {...props}>{props.children}</StyledSection>;
};
