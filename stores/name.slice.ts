import { StateCreator } from 'zustand';

import { WizardStore } from './wizard.store';

export type NameSlice = {
    name: string;
    setName: (name: string) => void;
};

export const createNameSlice: StateCreator<WizardStore, [], [], NameSlice> = (set) => ({
    name: '',
    setName: (name) => set(() => ({ name })),
});
