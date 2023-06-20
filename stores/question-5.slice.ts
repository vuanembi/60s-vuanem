import { StateCreator } from 'zustand';

import { RadioCardTextProps } from '../components/radio-question/radio-card-text';
import { RadioQuestion, SetRadioQuestion } from './question.slice.type';
import { WizardStore } from './wizard.store';

export type Question5Slice = {
    question5: RadioQuestion<RadioCardTextProps>;
    setQuestion5: SetRadioQuestion;
};

export const createQuestion5Slice: StateCreator<WizardStore, [], [], Question5Slice> = (set) => ({
    question5: {
        props: {
            name: 'question5',
            prompt: 'Độ cao của gối bạn sử dụng?',
            options: [
                { label: 'Gối cao', value: 'Gối cao' },
                { label: 'Gối thấp', value: 'Gối thấp' },
                { label: 'Linh hoạt', value: 'Linh hoạt' },
            ],
        },
        value: 'Gối cao',
    },
    setQuestion5: (value) => set((state) => ({ question5: { props: state.question5.props, value } })),
});
