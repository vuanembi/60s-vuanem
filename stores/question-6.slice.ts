import { StateCreator } from 'zustand';

import { RadioCardImageProps } from '../components/radio-question/radio-card-image';
import { RadioQuestion } from './question.slice.type';
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
    question6: RadioQuestion<'question6', RadioCardImageProps>;
};

export const createQuestion6Slice: StateCreator<WizardStore, [], [], Question6Slice> = (set, get) => ({
    question6: {
        name: 'question6',
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
        prompt: () => `Anh/chị${get().name ? ` ${get().name} ` : ' '}muốn nằm nệm có độ cứng như thế nào?`,
        subtitle: 'Độ cứng của mỗi loại nệm sẽ ảnh hưởng đến thói quen giấc ngủ, hãy chọn chính xác nhé',
        shortPrompt: 'Độ cứng mềm nệm',
        value: 'Mềm mại',
        setValue: (value) => set(({ question6 }) => ({ question6: { ...question6, value: value.question6 } })),
    },
});
