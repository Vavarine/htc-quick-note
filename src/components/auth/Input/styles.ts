import { rem } from "polished";
import styled from "styled-components";

interface InputContainerProps {
  isErrored?: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  position: relative;
  width: 100%;

  input {
    width: 100%;
    height: ${rem(52)};
    padding: 0 ${rem(20)};

    border: solid
      ${({ theme, isErrored }) => (isErrored ? theme.colors.danger : theme.colors.grey300)} 1px;
    border-radius: 10px;

    font-size: ${rem(14)};
    color: ${({ theme, isErrored }) => (isErrored ? theme.colors.danger : theme.colors.grey900)};
  }

  span {
    position: absolute;
    font-size: ${rem(16)};
    bottom: ${rem(-20)};
    left: ${rem(10)};
    color: ${({ theme }) => theme.colors.danger};
  }
`;
