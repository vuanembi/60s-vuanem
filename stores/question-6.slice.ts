import { StateCreator } from 'zustand';

import { RadioCardImageProps } from '../components/radio-question/radio-card-image';
import { RadioQuestion, SetRadioQuestion } from './question.slice.type';
import { WizardStore } from './wizard.store';

import Q6_ANY from '../public/q6/any.png';
import Q6_ANY_CHECKED from '../public/q6/any-checked.png';
import Q6_FIRM from '../public/q6/firm.png';
import Q6_FIRM_CHECKED from '../public/q6/firm-checked.png';
import Q6_MEDIUM from '../public/q6/medium.png';
import Q6_MEDIUM_CHECKED from '../public/q6/medium-checked.png';
import Q6_SOFT_CHECKED from '../public/q6/soft-checked.png';
import Q6_SOFT from '../public/q6/soft.png';

export type Question6Slice = {
    question6: RadioQuestion<RadioCardImageProps>;
    setQuestion6: SetRadioQuestion;
};

export const createQuestion6Slice: StateCreator<WizardStore, [], [], Question6Slice> = (set) => ({
    question6: {
        props: {
            name: 'question6',
            prompt: 'Độ cứng mềm mong muốn?',
            options: [
                {
                    label: 'Mềm mại',
                    value: 'Mềm mại',
                    src: { normal: Q6_SOFT, checked: Q6_SOFT_CHECKED },
                },
                {
                    label: 'Trung bình',
                    value: 'Trung bình',
                    src: { normal: Q6_MEDIUM, checked: Q6_MEDIUM_CHECKED },
                },
                {
                    label: 'Cứng cáp',
                    value: 'Cứng cáp',
                    src: { normal: Q6_FIRM, checked: Q6_FIRM_CHECKED },
                },
                {
                    label: 'Không rõ',
                    value: 'Không rõ',
                    src: { normal: Q6_ANY, checked: Q6_ANY_CHECKED },
                },
            ],
        },
        value: 'Mềm mại',
    },
    setQuestion6: (value) => set((state) => ({ question6: { props: state.question6.props, value } })),
});
