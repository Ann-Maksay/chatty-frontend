import { StyledButton, StyledLabel } from "./button.styles";
import { Link } from "../link/link";

import { type AppRoute } from "~/enums/enums";
import { IconName, type ValueOf } from "~/types/types";

type Properties = {
  disabled?: boolean;
  hasVisuallyHiddenLabel?: boolean;
  href?: ValueOf<typeof AppRoute>;
  icon?: IconName;
  label: string;
  style?: string;
  type?: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

const Button: React.FC<Properties> = ({
  disabled = false,
  hasVisuallyHiddenLabel = false,
  href,
  icon = "none",
  label,
  style,
  type = "button",
  onClick,
}: Properties) => {
  return href ? (
    <Link href={href} label={label} style={style} />
  ) : (
    <StyledButton
      disabled={disabled}
      type={type}
      onClick={onClick}
      $style={style}
      $icon={icon}
    >
      <StyledLabel $isHidden={hasVisuallyHiddenLabel ? "true" : "false"}>
        {label}
      </StyledLabel>
    </StyledButton>
  );
};

export { Button };
