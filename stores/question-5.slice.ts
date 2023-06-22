import { StateCreator } from 'zustand';

import { RadioCardImageProps } from '../components/radio-question/radio-card-image';
import { RadioQuestion } from './question.slice.type';
import { WizardStore } from './wizard.store';

import Q5_LOW from '../public/q5/low.png';
import Q5_LOW_CHECKED from '../public/q5/low-checked.png';
import Q5_MEDIUM from '../public/q5/medium.png';
import Q5_MEDIUM_CHECKED from '../public/q5/medium-checked.png';
import Q5_HIGH from '../public/q5/high.png';
import Q5_HIGH_CHECKED from '../public/q5/high-checked.png';

export type Question5Slice = {
    question5: RadioQuestion<'question5', RadioCardImageProps>;
};

export const createQuestion5Slice: StateCreator<WizardStore, [], [], Question5Slice> = (set, get) => ({
    question5: {
        name: 'question5',
        options: [
            { label: 'Gối thấp', value: 'Gối thấp', src: { normal: Q5_LOW, checked: Q5_LOW_CHECKED } },
            { label: 'Linh hoạt', value: 'Linh hoạt', src: { normal: Q5_MEDIUM, checked: Q5_MEDIUM_CHECKED } },
            { label: 'Gối cao', value: 'Gối cao', src: { normal: Q5_HIGH, checked: Q5_HIGH_CHECKED } },
        ],
        prompt: () => `Anh/chị${get().name ? ` ${get().name} ` : ' '}hiện đang sử dụng gối như nào?`,
        shortPrompt: 'Độ cao gối',
        value: 'Gối cao',
        setValue: (value) => set(({ question5 }) => ({ question5: { ...question5, value: value.question5 } })),
    },
});
