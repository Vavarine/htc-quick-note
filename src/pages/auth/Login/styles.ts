import { rem } from "polished";
import styled from "styled-components";
import { Input } from "../../../components/auth/Input";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin-bottom: ${rem(39)};
  }

  form {
    width: 100%;
    max-width: ${rem(350)};

    display: flex;
    flex-direction: column;

    > div:first-of-type {
      margin-bottom: ${rem(32)};
    }

    button {
      margin-bottom: ${rem(32)};
    }
  }
`;

export const CheckBoxContainer = styled.div`
  margin-top: ${rem(24)};
  margin-bottom: ${rem(32)};

  label {
    display: flex;

    input {
      display: none;
    }

    div {
      margin-right: ${rem(9.5)};
      height: 1rem;
      width: 1rem;
      border: solid 1px ${({ theme }) => theme.colors.grey300};
      border-radius: 4px;
    }

    input:checked + div {
      background-color: ${({ theme }) => theme.colors.primary500};
      border-color: ${({ theme }) => theme.colors.primary500};
    }
  }
`;
