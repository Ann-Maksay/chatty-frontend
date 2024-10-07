import {
  type Control,
  type FieldPath,
  type FieldValues,
  useController,
} from "react-hook-form";

import { StyledLabel, StyledCheckbox } from "./checkbox.style";

type Properties<T extends FieldValues> = {
  control: Control<T, null>;
  label: string;
  name: FieldPath<T>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
const Checkbox = <T extends FieldValues>({
  control,
  label,
  name,
  onChange,
}: Properties<T>): JSX.Element => {
  const { field } = useController({ control, name });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    field.onChange(e);
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <StyledLabel htmlFor={name}>
      <StyledCheckbox
        {...field}
        checked={Boolean(field.value)}
        type="checkbox"
        id={name}
        onChange={handleChange}
      />
      <label htmlFor={name}></label>
      <span>{label}</span>
    </StyledLabel>
  );
};

export { Checkbox };
