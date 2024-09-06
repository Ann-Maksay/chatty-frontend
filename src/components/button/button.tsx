
import { StyledButton } from './button.styles';
import { type AppRoute } from "../../enums/enums";
import { type ValueOf } from '../../types/value-of.type';

type Properties = {
	href?: ValueOf<typeof AppRoute>;
  label: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<Properties> = ({
  href,
  label,
  onClick
}: Properties) => {
  return <StyledButton onClick={onClick}>{label}</StyledButton>
}

export { Button }