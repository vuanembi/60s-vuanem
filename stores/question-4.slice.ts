import { StateCreator } from 'zustand';

import { RadioCardImageProps } from '../components/radio-question/radio-card-image';
import { RadioQuestion, SetRadioQuestion } from './question.slice.type';
import { WizardStore } from './wizard.store';

import Q4_SINGLE from '../public/q4/single.png';
import Q4_SINGLE_CHECKED from '../public/q4/single-checked.png';
import Q4_DOUBLE from '../public/q4/double.png';
import Q4_DOUBLE_CHECKED from '../public/q4/double-checked.png';
import Q4_TRIPLE_CHECKED from '../public/q4/triple-checked.png';
import Q4_TRIPLE from '../public/q4/triple.png';

export type Question4Slice = {
    question4: RadioQuestion<RadioCardImageProps>;
    setQuestion4: SetRadioQuestion;
};

export const createQuestion4Slice: StateCreator<WizardStore, [], [], Question4Slice> = (set) => ({
    question4: {
        props: {
            name: 'question4',
            prompt: 'Kích cỡ sản phẩm mong muốn?',
            options: [
                {
                    label: '1 người',
                    value: '1 người',
                    src: { normal: Q4_SINGLE, checked: Q4_SINGLE_CHECKED },
                },
                {
                    label: '2 người',
                    value: '2 người',
                    src: { normal: Q4_DOUBLE, checked: Q4_DOUBLE_CHECKED },
                },
                {
                    label: '3 người trở lên',
                    value: '3 người trở lên',
                    src: { normal: Q4_TRIPLE, checked: Q4_TRIPLE_CHECKED },
                },
            ],
        },
        value: '1 người',
    },
    setQuestion4: (value) => set((state) => ({ question4: { props: state.question4.props, value } })),
});
