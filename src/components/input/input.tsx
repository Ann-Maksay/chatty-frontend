import {
  type Control,
  type FieldPath,
  type FieldValues,
  useController,
} from "react-hook-form";

import {
  StyledInput,
  StyledLabel,
  StyledWrapper,
  StyledError,
} from "./input.styles";

import { type IconName } from "~/types/icon-name.type";

type Properties<T extends FieldValues> = {
  control: Control<T, null>;
  error?: string;
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
  error,
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
    <StyledWrapper $icon={icon} $style={style} $hasError={!!error}>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput
        placeholder={placeholder}
        required={isRequired}
        inputMode={inputMode}
        type={type}
        {...field}
        $hasError={!!error}
      />
      {error && <StyledError>{error}</StyledError>}
    </StyledWrapper>
  );
};

export { Input };
