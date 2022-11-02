import { ReactNode } from "react";
import { BackDrop, ModalContainer, ModalContent } from "./styles";

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onRequesClose: () => void;
}

export function Modal({ children, isOpen, onRequesClose }: ModalProps) {
  return (
    <ModalContainer isOpen={isOpen}>
      <BackDrop onClick={onRequesClose} />
      <ModalContent>{children}</ModalContent>
    </ModalContainer>
  );
}
