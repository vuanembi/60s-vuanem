import { StateCreator } from 'zustand';

import { RadioCardImageProps } from '../components/radio-question/radio-card-image';
import { RadioQuestion } from './question.slice.type';
import { WizardStore } from './wizard.store';

import Q2_ANY from '../public/q2/any.png';
import Q2_ANY_CHECKED from '../public/q2/any-checked.png';
import Q2_BACK from '../public/q2/back.png';
import Q2_BACK_CHECKED from '../public/q2/back-checked.png';
import Q2_FACEDOWN from '../public/q2/facedown.png';
import Q2_FACEDOWN_CHECKED from '../public/q2/facedown-checked.png';
import Q2_SIDE from '../public/q2/side.png';
import Q2_SIDE_CHECKED from '../public/q2/side-checked.png';

export type Question2Slice = {
    question2: RadioQuestion<'question2', RadioCardImageProps>;
};

export const createQuestion2Slice: StateCreator<WizardStore, [], [], Question2Slice> = (set, get) => ({
    question2: {
        name: 'question2',
        options: [
            {
                label: 'Nằm nghiêng',
                value: 'Nằm nghiêng',
                src: { normal: Q2_SIDE, checked: Q2_SIDE_CHECKED },
            },
            {
                label: 'Nằm sấp',
                value: 'Nằm sấp',
                src: { normal: Q2_FACEDOWN, checked: Q2_FACEDOWN_CHECKED },
            },
            {
                label: 'Nằm ngửa',
                value: 'Nằm ngửa',
                src: { normal: Q2_BACK, checked: Q2_BACK_CHECKED },
            },
            {
                label: 'Nằm mọi tư thế',
                value: 'Nằm mọi tư thế',
                src: { normal: Q2_ANY, checked: Q2_ANY_CHECKED },
            },
        ],
        prompt: () => `Tư thế ngủ quen thuộc của anh/chị${get().name ? ` ${get().name}` : ''}?`,
        value: 'Nằm nghiêng',
        setValue: (value) => set(({ question2 }) => ({ question2: { ...question2, value: value.question2 } })),
    },
});
