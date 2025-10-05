import { StyledBadge } from "./Badge.internal";

interface BadgeProps {
  $kind: "small" | "large";
  $isInverted?: boolean;
  children: React.ReactNode;
}

export const Badge = (props: BadgeProps) => {
  return (
    <StyledBadge $kind={props.$kind} $isInverted={props.$isInverted}>
      {props.children}
    </StyledBadge>
  );
};
