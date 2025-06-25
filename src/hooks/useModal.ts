import {useCallback, useState} from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const modalOpen = useCallback(() => setIsOpen(true), []);
  const modalClose = useCallback(() => setIsOpen(false), []);
  const modalToggle = useCallback(() => setIsOpen(prev => !prev), []);

  return { isOpen, modalOpen, modalClose, modalToggle };
}