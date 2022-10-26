import { rem } from "polished";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: ${rem(52)};
  max-width: ${rem(592)};

  margin-bottom: ${rem(50)};
`;

type ContentProps = {
  isOpen?: boolean;
};

export const Content = styled.div<ContentProps>`
  width: 100%;

  max-height: ${({ isOpen }) => (isOpen ? "calc(100vh - 16rem)" : rem(52))};

  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey300};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.15);

  overflow: hidden;

  transition: max-height 0.2s;

  form {
    position: relative;
    background-color: ${({ theme }) => theme.colors.background};
    z-index: 1;
  }

  input {
    height: ${rem(52)};
    width: 100%;
    border: none;

    padding-inline: 1rem;

    ::placeholder {
      color: ${({ theme }) => theme.colors.grey500};
    }
  }
`;

type BackdropProps = {
  isOpen?: boolean;
};

export const Backdrop = styled.div<BackdropProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};

  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

export const SubmitButton = styled.button`
  height: ${rem(36)};
  padding-inline: 1rem;
  font-size: ${rem(14)};
  border-radius: 5px;

  :hover:not(:active) {
    background-color: ${({ theme }) => theme.colors.grey100};
  }
`;
