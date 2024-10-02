import { StyledLink } from "./link.style";

import { type AppRoute } from "~/enums/enums";
import { type ValueOf } from "~/types/types";

type Properties = {
  href?: ValueOf<typeof AppRoute>;
  label: string;
  style?: string;
};

const Link: React.FC<Properties> = ({ href, label, style }: Properties) => {
  return (
    <StyledLink href={href} $style={style}>
      {label}
    </StyledLink>
  );
};

export { Link };
