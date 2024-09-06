import { StyledButton } from './button.styles';
import { Link } from '../link/link';

import { type AppRoute } from '~/enums/enums';
import { type ValueOf } from '~/types/types';



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
  return href ? <Link href={href} label={label} />
    : <StyledButton onClick={onClick}>{label}</StyledButton>
}

export { Button }