import { StateCreator } from 'zustand';

import { SliderQuestion, SetSliderQuestion } from './question.slice.type';
import { WizardStore } from './wizard.store';

export type Question31Slice = {
    question31: SliderQuestion;
    setQuestion31: SetSliderQuestion;
};

export const createQuestion31Slice: StateCreator<WizardStore, [], [], Question31Slice> = (set) => ({
    question31: {
        props: { name: 'question31', prompt: 'Bạn ngáy khi ngủ?' },
        value: 0,
    },
    setQuestion31: (value) => set((state) => ({ question31: { props: state.question31.props, value } })),
});
