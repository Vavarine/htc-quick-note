import styled from "styled-components";

export const TextEditorContainer = styled.div`
  .ProseMirror {
    max-height: calc(100vh - 16rem);

    outline: none;
    padding: 1rem;

    overflow-y: auto;

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
