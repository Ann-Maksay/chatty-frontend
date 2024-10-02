import {
  type Control,
  type FieldPath,
  type FieldValues,
  useController,
} from "react-hook-form";

import { StyledInput, StyledLabel, StyledWrapper } from "./input.styles";

import { type IconName } from "~/types/icon-name.type";

type Properties<T extends FieldValues> = {
  control: Control<T, null>;
  isRequired?: boolean;
  icon?: IconName;
  inputMode?: "email" | "text";
  label: string;
  name: FieldPath<T>;
  placeholder?: string;
  style?: "primary";
  type?: "text" | "email" | "password";
};

const Input = <T extends FieldValues>({
  control,
  isRequired = false,
  icon = "none",
  inputMode = "text",
  label,
  name,
  placeholder,
  style = "primary",
  type = "text",
}: Properties<T>): JSX.Element => {
  const { field } = useController({ control, name });

  return (
    <StyledWrapper $icon={icon} $style={style}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        placeholder={placeholder}
        required={isRequired}
        inputMode={inputMode}
        type={type}
        {...field}
      />
    </StyledWrapper>
  );
};

export { Input };
