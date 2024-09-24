import { StyledButton } from "./button.styles";
import { Link } from "../link/link";

import { type AppRoute } from "~/enums/enums";
import { type ValueOf } from "~/types/types";

type Properties = {
  disabled?: boolean;
  href?: ValueOf<typeof AppRoute>;
  label: string;
  style?: string;
  type?: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button: React.FC<Properties> = ({
  disabled = false,
  href,
  label,
  style,
  type = "button",
  onClick,
}: Properties) => {
  return href ? (
    <Link href={href} label={label} />
  ) : (
    <StyledButton
      disabled={disabled}
      type={type}
      onClick={onClick}
      $style={style}
    >
      {label}
    </StyledButton>
  );
};

export { Button };
