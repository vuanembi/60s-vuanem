import { StateCreator } from 'zustand';

import { RadioCardImageProps } from '../components/radio-question/radio-card-image';
import { RadioQuestion } from './question.slice.type';
import { WizardStore } from './wizard.store';

import Q7_COMPRESS from '../public/q7/compress.png';
import Q7_COMPRESS_CHECKED from '../public/q7/compress-checked.png';
import Q7_FOAM from '../public/q7/foam.png';
import Q7_FOAM_CHECKED from '../public/q7/foam-checked.png';
import Q7_LATEX from '../public/q7/latex.png';
import Q7_LATEX_CHECKED from '../public/q7/latex-checked.png';
import Q7_SPRING_CHECKED from '../public/q7/spring-checked.png';
import Q7_SPRING from '../public/q7/spring.png';

export type Question7Slice = {
    question7: RadioQuestion<'question7', RadioCardImageProps>;
};

export const createQuestion7Slice: StateCreator<WizardStore, [], [], Question7Slice> = (set, get) => ({
    question7: {
        name: 'question7',
        options: [
            {
                label: 'Lò xo',
                value: 'Lò xo',
                src: { normal: Q7_SPRING, checked: Q7_SPRING_CHECKED },
            },
            {
                label: 'Foam',
                value: 'Foam',
                src: { normal: Q7_FOAM, checked: Q7_FOAM_CHECKED },
            },
            {
                label: 'Cao su',
                value: 'Cao su',
                src: { normal: Q7_LATEX, checked: Q7_LATEX_CHECKED },
            },
            {
                label: 'Không rõ',
                value: 'Không rõ',
                src: { normal: Q7_COMPRESS, checked: Q7_COMPRESS_CHECKED },
            },
        ],
        value: 'Lò xo',
        prompt: () => `Anh/chị${get().name ? ` ${get().name} ` : ' '}đặc biệt yêu thích chất liệu nệm nào?`,
        setValue: (value) => set(({ question7 }) => ({ question7: { ...question7, value: value.question7 } })),
    },
});
