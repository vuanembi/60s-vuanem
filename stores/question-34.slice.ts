import { StateCreator } from 'zustand';

import { SliderQuestion, SetSliderQuestion } from './question.slice.type';
import { WizardStore } from './wizard.store';

export type Question34Slice = {
    question34: SliderQuestion;
    setQuestion34: SetSliderQuestion;
};

export const createQuestion34Slice: StateCreator<WizardStore, [], [], Question34Slice> = (set) => ({
    question34: {
        props: { name: 'question33', prompt: 'Bạn bị đau mỏi vai gáy?' },
        value: 0,
    },
    setQuestion34: (value) => set((state) => ({ question34: { props: state.question34.props, value } })),
});
