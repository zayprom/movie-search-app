import { StyledBadge } from "./Badge.internal";

interface BadgeProps {
  $size: "small" | "large";
  $isInverted?: boolean;
  children: React.ReactNode;
}

export const Badge = (props: BadgeProps) => {
  return (
    <StyledBadge $size={props.$size} $isInverted={props.$isInverted}>
      {props.children}
    </StyledBadge>
  );
};
