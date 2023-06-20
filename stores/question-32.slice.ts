import { StateCreator } from 'zustand';

import { SliderQuestion, SetSliderQuestion } from './question.slice.type';
import { WizardStore } from './wizard.store';

export type Question32Slice = {
    question32: SliderQuestion;
    setQuestion32: SetSliderQuestion;
};

export const createQuestion32Slice: StateCreator<WizardStore, [], [], Question32Slice> = (set) => ({
    question32: {
        props: { name: 'question32', prompt: 'Bạn bị trào ngược dạ dày?' },
        value: 0,
    },
    setQuestion32: (value) => set((state) => ({ question32: { props: state.question32.props, value } })),
});
