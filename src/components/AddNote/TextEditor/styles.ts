import styled from "styled-components";

export const Container = styled.div`
  .ProseMirror {
    outline: none;
    padding: 1rem;

    ul {
      margin-left: 1rem;
    }

    img {
      max-width: 100%;
    }

    p {
      font-size: 1rem;

      &.is-editor-empty:first-child::before {
        content: attr(data-placeholder);
        height: 0;
        float: left;
        pointer-events: none;

        color: ${({ theme }) => theme.colors.grey500};
      }
    }
  }
`;
