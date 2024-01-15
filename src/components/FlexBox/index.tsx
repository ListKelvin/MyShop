import React, { ReactNode } from "react";
import { StyledFlexbox } from "@/global/styles";

// Higher-Order Component approach

const withFlexbox =
  (Component: React.ComponentType) =>
  (
    props: React.ComponentProps<typeof Component> & {
      children?: ReactNode;
      $justifyContent?: string;
      $alignItems?: string;
      $flexDirection?: string;
      $gap?: string;
      $position?: string;
    }
  ) => {
    const { children, ...rest } = props;
    return <StyledFlexbox {...rest}>{children}</StyledFlexbox>;
  };

const Flexbox = withFlexbox(StyledFlexbox);

export default Flexbox;
