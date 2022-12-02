import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiCheck } from "react-icons/fi";

import htcImg from "../../../assets/htc.png";
import { CheckBoxContainer, LoginContainer } from "./styles";
import { Input } from "../../../components/auth/Input";
import { globalTheme } from "../../../styles/globalTheme";
import { Button } from "../../../components/auth/Button/style";
import { Title } from "../styles";
import { useAuth } from "../../../contexts/authContext";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Email invalido")
    .required("O email é obrigatório")
    .min(5, "O email deve conter ao menos 5 caracteres"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(6, "A senha deve conter ao menos 5 caracteres"),
  rememberMe: yup.boolean(),
});

export function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { login } = useAuth();

  console.log("errors", errors);

  const onSubmit = (data: any) => {
    login(data);
  };

  return (
    <LoginContainer>
      <img src={htcImg} alt="Hall to Code" />
      <Title>Entre na sua conta</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          placeholder="Email"
          register={register}
          errorMessage={errors?.email?.message as string}
        />
        <Input
          name="password"
          type="password"
          placeholder="Senha"
          register={register}
          errorMessage={errors?.password?.message as string}
        />
        <CheckBoxContainer>
          <label htmlFor="rememberMe">
            <input type="checkbox" id="rememberMe" {...register("rememberMe")} />
            <div>
              {watch("rememberMe") ? <FiCheck color={globalTheme.colors.background} /> : ""}
            </div>
            <p>Lembrar de mim</p>
          </label>
          {errors?.rememberMe && <span>{errors.rememberMe.message as string}</span>}
        </CheckBoxContainer>
        <Button type="submit">Entrar</Button>
      </form>
      <p>
        Não tem uma conta <Link to="/sign-up">Inscreva-se agora</Link>
      </p>
    </LoginContainer>
  );
}
