import type React from "react";
import { StyledList } from "./List.internal";

interface ListProps {
  children: React.ReactNode;
}

export const List = (props: ListProps) => {
  return <StyledList>{props.children}</StyledList>;
};
