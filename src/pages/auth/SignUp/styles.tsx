import { rem } from "polished";
import styled from "styled-components";

export const SignInContainer = styled.div`
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

    > div:not(:last-of-type) {
      margin-bottom: ${rem(32)};
    }

    > div:last-of-type {
      margin-bottom: ${rem(46)};
    }
  }

  button {
    margin-bottom: ${rem(32)};
  }
`;
