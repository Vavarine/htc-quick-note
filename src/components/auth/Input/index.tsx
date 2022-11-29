import { InputHTMLAttributes } from "react";
import { UseFormRegister } from "react-hook-form";
import { InputContainer } from "./styles";

type InputProps = {
  name: string;
  type?: string;
  errorMessage?: string;
  register: UseFormRegister<any>;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({ name, type = "text", register, errorMessage, ...rest }: InputProps) {
  return (
    <InputContainer isErrored={!!errorMessage}>
      <input type={type} {...register(name)} {...rest} />
      {errorMessage && <span>{errorMessage}</span>}
    </InputContainer>
  );
}
