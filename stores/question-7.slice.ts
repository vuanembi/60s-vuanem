import { StateCreator } from 'zustand';

import { RadioCardImageProps } from '../components/radio-question/radio-card-image';
import { RadioQuestion, SetRadioQuestion } from './question.slice.type';
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
    question7: RadioQuestion<RadioCardImageProps>;
    setQuestion7: SetRadioQuestion;
};

export const createQuestion7Slice: StateCreator<WizardStore, [], [], Question7Slice> = (set) => ({
    question7: {
        props: {
            name: 'question7',
            prompt: 'Loại / Chất liệu mong muốn?',
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
        },
        value: 'Lò xo',
    },
    setQuestion7: (value) => set((state) => ({ question7: { props: state.question7.props, value } })),
});
