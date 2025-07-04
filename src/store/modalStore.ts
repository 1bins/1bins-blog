import { create } from 'zustand'

interface ModalState {
  isOpen: boolean
  modalOpen: () => void
  modalClose: () => void
  modalToggle: () => void
}

export const modalStore = create<ModalState>((set) => ({
  isOpen: false,
  modalOpen: () => set({ isOpen: true }),
  modalClose: () => set({ isOpen: false }),
  modalToggle: () => set((state) => ({ isOpen: !state.isOpen })),
}))