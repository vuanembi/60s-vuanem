import { StateCreator } from 'zustand';

import { RadioCardTextProps } from '../components/radio-question/radio-card-text';
import { RadioQuestion } from './question.slice.type';
import { WizardStore } from './wizard.store';

export type Question5Slice = {
    question5: RadioQuestion<'question5', RadioCardTextProps>;
};

export const createQuestion5Slice: StateCreator<WizardStore, [], [], Question5Slice> = (set, get) => ({
    question5: {
        name: 'question5',
        options: [
            { label: 'Gối cao', value: 'Gối cao' },
            { label: 'Gối thấp', value: 'Gối thấp' },
            { label: 'Linh hoạt', value: 'Linh hoạt' },
        ],
        prompt: () => `Anh/chị${get().name ? ` ${get().name} ` : ' '}hiện đang sử dụng gối như nào?`,
        value: 'Gối cao',
        setValue: (value) => set(({ question5 }) => ({ question5: { ...question5, value: value.question5 } })),
    },
});
