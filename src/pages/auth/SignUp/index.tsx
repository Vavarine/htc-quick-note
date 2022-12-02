import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FiCheck } from "react-icons/fi";

import htcImg from "../../../assets/htc.png";
import { Input } from "../../../components/auth/Input";
import { globalTheme } from "../../../styles/globalTheme";
import { Button } from "../../../components/auth/Button/style";
import { SignInContainer } from "./styles";
import { Title } from "../styles";
import { useAuth } from "../../../contexts/authContext";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("O nome é obrigatório")
    .min(3, "O nome deve conter ao menos 3 caracteres"),
  email: yup
    .string()
    .email("Email invalido")
    .required("O email é obrigatório")
    .min(5, "O email deve conter ao menos 5 caracteres"),
  password: yup
    .string()
    .required("A senha é obrigatória")
    .min(6, "A senha deve conter ao menos 5 caracteres"),
  confirmPassword: yup
    .string()
    .required("A senha é obrigatória")
    .min(6, "A senha deve conter ao menos 5 caracteres")
    .is([yup.ref("password")], "As senhas devem ser iguais"),
});

export function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { signUp } = useAuth();

  const onSubmit = (data: any) => {
    signUp(data);
  };

  return (
    <SignInContainer>
      <img src={htcImg} alt="Hall to Code" />
      <Title>Crie sua conta</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="name"
          placeholder="Nome"
          register={register}
          errorMessage={errors?.name?.message as string}
        />
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
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Repita sua senha"
          register={register}
          errorMessage={errors?.confirmPassword?.message as string}
        />

        <Button type="submit">Registrar</Button>
      </form>
      <p>
        Já tem uma conta <Link to="/login">Fazer login</Link>
      </p>
    </SignInContainer>
  );
}
