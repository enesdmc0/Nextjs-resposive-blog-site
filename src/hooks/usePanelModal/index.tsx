import {create} from "zustand";

interface PanelModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const usePanelModal = create<PanelModalStore>(set => ({
    isOpen: false,
    onOpen: () => set({isOpen: true}),
    onClose: () => set({isOpen: false }),
}))

export default usePanelModal;