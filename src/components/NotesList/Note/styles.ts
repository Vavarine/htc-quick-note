import { rem } from "polished";
import styled from "styled-components";

export const NoteContainer = styled.div`
  width: ${rem(270)};

  border: solid 1px ${({ theme }) => theme.colors.grey300};
  border-radius: 5px;
`;

export const NoteTitle = styled.h3`
  margin: 1rem;
  margin-bottom: ${rem(4)};
  font-weight: 500;
  font-size: 1rem;
  line-height: ${rem(24)};
`;

export const NoteContent = styled.div`
  height: 100%;
  width: 100%;

  cursor: pointer;
`;
