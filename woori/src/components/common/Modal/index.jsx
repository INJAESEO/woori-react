import React, { useCallback } from "react";
import { useBodyScrollLock } from "../../../hooks/useBodyScrollLock";
import * as S from "./style";
import { useModalHandler } from "../../../hooks/useModalHandler";

const Modal = ({
  isOpen,
  setIsOpen,
  children,
  closeButton = true,
  style = { padding: "40px" },
  styleInWhiteBox = { padding: "24px" },
}) => {
  const stopPropagation = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const closeModal = useModalHandler(isOpen, setIsOpen)[1];
  useBodyScrollLock(isOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <S.Container onClick={closeModal} style={style}>
      <div onClick={stopPropagation} style={styleInWhiteBox}>
        {closeButton && (
          <S.CloseModalButton onClick={closeModal}>x</S.CloseModalButton>
        )}
        {children}
      </div>
    </S.Container>
  );
};

export default React.memo(Modal);
