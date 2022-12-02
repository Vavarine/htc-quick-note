import { rem } from "polished";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 0 20px;
  height: ${rem(80)};
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary500};
`;

export const HeaderContent = styled.div`
  margin: 0 auto;

  height: 100%;
  width: 100%;
  max-width: ${rem(1360)};

  display: flex;
  align-items: center;

  h1 {
    font-size: ${rem(20)};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.background};
  }
`;

export const HeaderProfile = styled.div`
  margin-left: auto;

  display: flex;
  align-items: center;

  cursor: pointer;

  strong {
    margin-right: ${rem(10)};
    font-size: ${rem(18)};
    color: ${({ theme }) => theme.colors.danger};
    line-height: ${rem(18)};
    font-weight: 400;
  }
`;

export const HeaderUser = styled.div`
  height: ${rem(50)};
  width: ${rem(50)};

  background-color: ${({ theme }) => theme.colors.grey800};
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.span`
  margin-right: ${rem(10)};
  font-size: ${rem(18)};
  color: ${({ theme }) => theme.colors.background};
  line-height: ${rem(18)};
`;
