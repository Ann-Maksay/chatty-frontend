import { type AppRoute } from "~/enums/enums";
import { type ValueOf } from '~/types/types';


type Properties = {
	href?: ValueOf<typeof AppRoute>;
  label: string;
}

// TODO: upgrade links when routing is ready

const Link: React.FC<Properties> = ({
  href,
  label,
}: Properties) => {
  return <a href={ href }>{label}</a>
}

export { Link }