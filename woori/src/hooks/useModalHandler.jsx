import React, { useCallback } from "react";
import { useBodyScrollLock } from "./useBodyScrollLock";

export const useModalHandler = (modalState, modalStateSetter) => {
  const openModal = useCallback(() => {
    modalStateSetter(true);
  }, []);

  const closeModal = useCallback(() => {
    modalStateSetter(false);
  }, []);

  useBodyScrollLock(modalState);

  return [openModal, closeModal];
};
