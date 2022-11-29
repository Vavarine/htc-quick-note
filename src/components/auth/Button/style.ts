import { rem } from "polished";
import styled from "styled-components";

export const Button = styled.button`
  height: ${rem(50)};
  background-color: ${({ theme }) => theme.colors.primary500};

  border-radius: 10px;
  color: ${({ theme }) => theme.colors.background};

  transition: all 0.2s;

  :hover:not(:active) {
    background-color: ${({ theme }) => theme.colors.primary700};
  }
`;
