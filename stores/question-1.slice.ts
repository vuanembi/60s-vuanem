import { StateCreator } from 'zustand';

import { RadioCardTextProps } from '../components/radio-question/radio-card-text';
import { RadioQuestion } from './question.slice.type';
import { WizardStore } from './wizard.store';

export type Question1Slice = {
    question1: RadioQuestion<'question1', RadioCardTextProps>;
};

export const createQuestion1Slice: StateCreator<WizardStore, [], [], Question1Slice> = (set, get) => ({
    question1: {
        name: 'question1',
        options: [
            { label: 'Đổi nệm hoặc nâng cấp nệm', value: 'Đổi nệm hoặc nâng cấp nệm' },
            { label: 'Nệm cũ ngủ không ngon giấc', value: 'Nệm cũ ngủ không ngon giấc' },
            { label: 'Mua nệm mới, giường mới', value: 'Mua nệm mới, giường mới' },
            { label: 'Mua tặng cha mẹ & người thân', value: 'Mua tặng cha mẹ & người thân' },
            { label: 'Cho con ngủ riêng', value: 'Cho con ngủ riêng' },
        ],
        subtitle: 'Lựa chọn một miêu tả đúng với lý do anh/chị đang cần mua',
        prompt: () => `Tại sao anh/chị${get().name ? ` ${get().name} ` : ' '}lại cần nệm mới?`,
        shortPrompt: 'Nhu cầu',
        value: 'Đổi nệm hoặc nâng cấp nệm',
        setValue: (value) => set(({ question1 }) => ({ question1: { ...question1, value: value.question1 } })),
    },
});
