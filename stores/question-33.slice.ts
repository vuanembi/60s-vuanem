import { StateCreator } from 'zustand';

import { SliderQuestion, SetSliderQuestion } from './question.slice.type';
import { WizardStore } from './wizard.store';

export type Question33Slice = {
    question33: SliderQuestion;
    setQuestion33: SetSliderQuestion;
};
export const createQuestion33Slice: StateCreator<WizardStore, [], [], Question33Slice> = (set) => ({
    question33: {
        props: { name: 'question33', prompt: 'Bạn bị đau mỏi lưng?' },
        value: 0,
    },
    setQuestion33: (value) => set((state) => ({ question32: { props: state.question32.props, value } })),
});
